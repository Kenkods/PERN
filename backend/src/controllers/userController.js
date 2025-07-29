import { createUser, findSimilarEmail } from "../models/user.js";
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';


export async function addUser(req,res){

    const {email, name, password, confirm_password, role}=req.body;

    if(password!==confirm_password){

        return res.status(401).json({success:false, message: "Password does not match!"});

    }

    try{
        const exists=await findSimilarEmail(email)
        if(exists){
            return res.status(409).json({success:false, message: "Email already exists!"});
        }
        const hashedPassword= await bcrypt.hash(password, 10);
        const user= await  createUser(email, name, hashedPassword, role);

        return res.status(201).json({success:true, user});
    }
    catch(error){
        console.error("User registration failed", error);
        return res.status(500).json({success:false, message:"Server error!"});
    }

    
}

export async function login(req, res){

    const {email, password}=req.body;

    try{
        const user= await findSimilarEmail(email);
        if(!user){

            return res.status(401).json({message: "Invalid email or Password"});

        }
        const exists= await bcrypt.compare(password, user.password);
        if(!exists){
            return res.status(401).json({message:"Invalid email or pasword"});

        }
        const pload={
            id:user.id,
            email:user.email,
            role:user.role
        };

        const token=jwt.sign(pload, process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES_IN || "1h"
        });

        delete user.password;

        res.status(200).json({
            message: "Login successful",
            token,
            user
        });
    }
    catch(error){
         console.error("Login error:", error);
        res.status(500).json({ message: "Server error during login" });
    }
}
    

