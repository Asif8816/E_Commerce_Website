
import MainPage from '../../components/Layout/MainPage'
import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import {toast} from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
    const [email,setEmail]=useState("");
    const [newPassword,setnewPassword]=useState("");
    const [answer,SetAnswer]=useState("");
    const navigate=useNavigate();
    const location=useLocation();
  
    //form function 
    const handleSubmit=async (e)=>{
      e.preventDefault();
      try {
        const res= await axios.post("/api/v1/auth//forgot-password",{email,newPassword,answer});
        if(res && res.data.success){
          toast.success(res.data && res.data.message);
          navigate( "/login");
        }else{
          toast.error(res.data.message);
        }
        
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
        
      }
    }


  return (
    <MainPage title={"forgot password e commerce website"}>
        <div className="form-container">
            <h1>Login page </h1>
        <form onSubmit={handleSubmit}> 
             <div className="mb-3">
             <input type="email" className="form-control" id="exampleInputEmail1"  placeholder='write email'  required value={email} onChange={(e)=>setEmail(e.target.value)} />
             </div>
             <div className="mb-3">
             <input type="text" className="form-control" id="exampleInputEmail1"  placeholder='Enter Your  favrite Sport Name'  required value={answer} onChange={(e)=>SetAnswer(e.target.value)} />
             </div>
             <div className="mb-3">
             <input type="password" className="form-control" id="exampleInputPassword1" placeholder='write Password'  required value={newPassword} onChange={(e)=>setnewPassword(e.target.value)} />
             </div>
  <button type="submit" className="btn btn-primary">Reset Password</button>
</form>


        </div>
    </MainPage>
  )
}

export default ForgotPassword
