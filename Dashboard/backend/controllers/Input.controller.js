
import InputData from '../models/inputData.models.js'; // your Mongoose model

export const getInputData =async (req, res) => {
  try {
    const data = await InputData.find();
     res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}