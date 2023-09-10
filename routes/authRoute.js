import express from 'express'
import {registerController,loginController,testConroller, forgotPasswordController} from '../controllers/authController.js'
import { isAdmin, requireSigIn } from '../middlewares/authMiddleware.js'
//router object 

const router=express.Router()

//routing 
//REGISTER || methode post 
router.post('/register',registerController)


//LOGIN ||POST

router.post("/login",loginController);

//Forgot Password || Post 

router.post("/forgot-password",forgotPasswordController);

//test routes
router.get('/test',requireSigIn,isAdmin, testConroller)


router.get("/user-auth",requireSigIn,(req,res)=>{
    res.status(200).send({ ok: true });
});

router.get("/admin-auth",requireSigIn,isAdmin,(req,res)=>{
    res.status(200).send({ ok: true });
});

export default router;