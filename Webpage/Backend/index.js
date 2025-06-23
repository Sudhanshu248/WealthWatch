const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.routes.js");

dotenv.config();
const dblink = process.env.DB_CONNECT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
    // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/', userRoutes); 

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://sainisudhanshu389:WKKlBH58fXyqHE2A@wealthwatchcluster.6vudzkg.mongodb.net/WealthWatch?retryWrites=true&w=majority&appName=WealthWatchCluster", {
            ssl: true,
            tls: true,
            tlsAllowInvalidCertificates: true,
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
            socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
            connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds
            maxPoolSize: 10, // Limit the number of connections in the pool
            minPoolSize: 2, // Maintain at least 2 connections in the pool
            maxIdleTimeMS: 30000, // Close idle connections after 30 seconds
            retryWrites: true,
            retryReads: true
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something went wrong!",
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.listen(3002, () => {
    console.log("Server is successfully running on 3002 port.");
    start();
});
