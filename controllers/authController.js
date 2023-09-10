import { comparePassword, hashpassword } from "../helpers/authHelper.js"
import user_models from "../models/user_models.js"
import JWT from "jsonwebtoken";

export const registerController=async(req,res)=>{
    try {
        const {name,email,password,phone,address,answer}=req.body
        //validations
        if(!name){
            return res.send({message:'name is Required'})
        }
        if(!email){
            return res.send({message:'email is Required'})
        }
        if(!phone){
            return res.send({message:'Phone is Required'})
        }
        if(!password){
            return res.send({message:'password is Required'})
        }
        if(!address){
            return res.send({message:'address is Required'})
        }
        if(!answer){
            return res.send({message:'answer is Required'})
        }
        //check user
        const existingUser=await user_models.findOne({email})
        //existing user
        if(existingUser){
            return res.status(200).send(
                {sucess:false,
                message:"alredy register please login"
                })
        }

        //register user
        const hashedPassword=await hashpassword(password)
        //save
        const user=await new user_models({name,email,phone,address,password:hashedPassword,answer}).save()

        res.status(201).send({
            success:true,
            message:"user Register successfully",
            user
        })
        


        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess:false,
            message:'error in ragistration',
            error
        })
        
    }
};


//post LOGIN

export const loginController=async(req,res)=>{

    try {
        const {email,password}=req.body
        //validation
        if(!email||!password)
        {
            return res.status(404).send({
                success:false,
                message:'invalide email or password'
        })
        }

        //check user
        const user=await user_models.findOne({email})
        if(!user)
        {
            return res.status(404).send({
                success:false,
                message:'Email is not registerd '
        })   
        }

        const match=await comparePassword(password,user.password)
        if(!match)
        {
            return res.status(202).send({
                success:false,
                message:'invalide password'
        })
        }

        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role: user.role

            },token
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in login",
            error
        })
        
    }
};


export const forgotPasswordController=async(req,res)=>{
    try {
        const {email,answer,newPassword}=req.body
        if(!email){
            res.status(400).send({message:"Email is required"})
        }
        if(!answer){
            res.status(400).send({message:"answer is required"})
        }
        if(!newPassword){
            res.status(400).send({message:"New Password is required"})
        }

        //check 
        const user=await user_models.findOne({email,answer});
        //validation 
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Wrong Email or Answer",
            });
        }

        const hashed= await hashpassword(newPassword);
        await user_models.findByIdAndUpdate(user._id,{password:hashed});
        res.status(200).send({
            success:true,
            message:"password reset Successfully ",
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Somthing wnet wrong ",
            error 
        })
        
    }
};

//test controller
export const testConroller=(req,res)=>{
    res.send("test controller")
};


