import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import goalRouter from "./route/goal.routes.js";


const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const dblink = process.env.DB_CONNECT;
const connectDB = async () =>{
    try{
      await mongoose.connect(dblink);
        console.log("SuccessFully Mongoose Connected !")

    }
    catch(error){
  console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}


app.use("/list" , goalRouter);
app.use("/" , (req ,res)=>{
    res.send("server is working");
});
app.use((err,req ,res  ,next )=>{
    console.error(err);
    res.status(500).json({
        message: "Something went wrong!",
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
})

app.listen(8080,()=>{
  console.log("Server is successfully running on 8080 port.");
    connectDB();

})