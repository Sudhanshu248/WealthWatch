import { GoogleGenerativeAI } from "@google/generative-ai";
import User from "../models/user.models.js";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
  temperature: 0.7,
  topP: 1,
  topK: 1,
  maxOutputTokens: 400, 
};

export const askGeminiAI = async (req, res) => {
  const { prompt } = req.body;
  
  const token = req.headers.authorization;
  if (!token) {
    console.error("No token provided");
    return ;
  }

  const user = await User.findOne({ token });
  if (!user) {
    console.error("Unauthorized user");
    return ;
  }

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });

    const cleanText = (text) => {
    return text
      .replace(/\*\*/g, "")        // remove double asterisks
      .replace(/\*/g, "")          // remove single asterisks
      .replace(/^[-•]\s?/gm, "")   // remove leading bullets/dashes
      .trim();
    };
    
    const responseText = cleanText(result.response.text());

    res.status(200).json({ result: responseText });

  } catch (error) {
    console.error("Gemini API Error:", error.message);
    res.status(500).json({ error: "Gemini API request failed", details: error.message });
  }
};
