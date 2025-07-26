import { createUser } from "../models/user.js";

export async function addUser(req,res){

    try{
        const {email,name,age}=req.body;
        const newUser= await createUser(email,name ,age);

        res.status(201).json({message: "User is Created",user: newUser  });
    }
    catch(err){

        console.log(err);
        res.status(500).json({message:"Error creating user"});
    }
}