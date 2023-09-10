import JWT from "jsonwebtoken";
import user_models from "../models/user_models.js";
//Protect routes token  base
 export const requireSigIn=async (req,res,next)=>{
    try {
        const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user=decode;
        next();
        
    } catch (error) {
        console.log(error)
        
    }
 }

 //admin access

 export const isAdmin=async(req,res,next)=>{
    try {
        const user=await user_models.findById(req.user._id)
        if(user.role !==1)
        {
            return res.status(401).send({
                success:false,
                message:"unauthorized access"
            })
        }else{
            next();
        }

        
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error
        })
        
    }
 }


 