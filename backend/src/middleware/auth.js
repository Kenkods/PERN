import jwt from "jsonwebtoken";

export function authentication(req, res, next){

    const header=req.headers.authorization;
    const token= header && header.split(" ")[1];

    if(!token){
        return res.status(401).json({message : "Access denied"});
    }
    

    try{
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(error){
        res.status(403).json({message: "Invalid or Expire Token"});
    }
}

export function adminOnly(req,res,next){

    if(req.user.role!=="admin"){
        return res.status(403).json({message:"Forbidden: Admin Only!"});
    }
    next();
}