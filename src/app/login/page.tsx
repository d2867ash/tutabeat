'use client'

import {  useRouter } from "next/navigation";
import React, { useEffect } from "react";
import axios from 'axios'


export default function LoginPage()
{

  const router = useRouter();
const [user, setUser] = React.useState
(
    {
       email:"",
       password:"",
       username:""

     }
)
const [buttonDisabled, setButtonDisabled] = React.useState(true);
const [loading, setLoading] = React.useState(false);

const onLoginclick= async ()=> {
try {
  
  setLoading(true);
  const response = await axios.post("/api/users/login",user);
  router.push("/");
} catch (error:any) {
  console.log(error.message);
  
}
finally{
  setLoading(false);
}
}

useEffect(() => {
if(user.email.length > 0 
  && user.password.length >0 
  )
   {
    setButtonDisabled(false);
   }

},[user]);

return (
    <>
<div className="container mx-7 p-4">
<h1>Login Page</h1>

</div>

    <div className="container">
    
  
  <div  className="data-mdb-input-init form-outline mb-4">
    <input type="email" id="form2Example1" value={user.email} onChange={(e) => setUser({...user,email:e.target.value})} className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  
  <div  className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      
      <div className="form-check">
        <input className="form-check-input" type="checkbox"  readOnly value="" id="form2Example31" checked />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  
  <button  type="button"  className="btn btn-primary btn-block mb-4" onClick={onLoginclick}>Sign in</button>
  
  <div className="row mb -3">
    <span><a href="/register">Register for sign up</a></span>
  </div>


    </div>
    </>
);

}