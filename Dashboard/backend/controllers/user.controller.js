import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../models/user.models.js';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET; 

const signup = async (req, res) => {
    try {
        const { username, email, password} = req.body;

        if(!username || !email || !password ) {
            return res.status(400).json({message: "All fields are required"});
        }

        // Check if user exists with a timeout
        const user = await User.findOne({ email }).maxTimeMS(5000);

        if(user) {
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: newUser._id}, JWT_SECRET);
        newUser.token = token;
        
        // Save with timeout
        await newUser.save({ maxTimeMS: 5000 });

        return res.status(201).json({
            message: "User Created Successfully",
            token
        });

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const response = await User.findOne({
            email:email
        })

        if(!response){
            res.status(401).send({
                Message:"Your email is not correct"
            })
        };

        const passwordmatch = await bcrypt.compare(password,response.password);

        if(passwordmatch){
            const token = jwt.sign({ id: response._id}, JWT_SECRET);
            console.log(token);
            response.token = token;
            await response.save();
            res.json({
                token
            })
        }
        else{
    
            res.status(401).send({
                Message:"Incorrect Password"
            })
        }


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { signup, login };
