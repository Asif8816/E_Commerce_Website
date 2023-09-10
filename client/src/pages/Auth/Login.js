import React,{useState} from 'react'
import MainPage from '../../components/Layout/MainPage';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import {toast} from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[auth,setAuth]=useAuth();
    const navigate=useNavigate();
    const location=useLocation();
  
    //form function 
    const handleSubmit=async (e)=>{
      e.preventDefault();
      try {
        const res= await axios.post("/api/v1/auth/login",{email,password});
        if(res && res.data.success){
          toast.success(res.data && res.data.message);
          setAuth({
            ...auth,
            user: res.data.user,
           token: res.data.token,

          });
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate(location.state || "/");
        }else{
          toast.error(res.data.message);
        }
        
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
        
      }
    }

  return (
    <MainPage title={"Register -Ecommerce App"}>
        <div className="form-container">
            <h1>Login page </h1>
        <form onSubmit={handleSubmit}> 
             <div className="mb-3">
             <input type="email" className="form-control" id="exampleInputEmail1"  placeholder='write email'  required value={email} onChange={(e)=>setEmail(e.target.value)} />
             </div>
             <div className="mb-3">
             <input type="password" className="form-control" id="exampleInputPassword1" placeholder='write Password'  required value={password} onChange={(e)=>setPassword(e.target.value)} />
             </div>
            <div className="mb-3">
            <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>ForgotPassword </button>
            </div>
  <button type="submit" className="btn btn-primary">LOGIN</button>
</form>


        </div>
      
    </MainPage>
    
  )
}

export default Login
