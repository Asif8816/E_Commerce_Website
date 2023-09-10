import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
const Spinner = ({path="login"}) => {
    const [count,setCount]=useState(3);
    const nevigate=useNavigate();
    const location = useLocation();

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((prevValue)=>--prevValue);
        },1000);
        count ===0 && nevigate(`/${path}`,{
          state:location.pathname,
        });
        return ()=>clearInterval(interval)
    },[count,nevigate])

  return (
    <>
      <div class="d-flex-column justify-content-center aling-items-center"
      style={{height:"100vh"}}
      >
        <h1 className='text-center'>redirection to you in {count}sec</h1>
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
    </>
  )
}


export default Spinner
