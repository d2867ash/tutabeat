'use client'

import {  useRouter } from "next/navigation";
import React, { useEffect } from "react";
import axios from 'axios'


export default function Register(){

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

const onSignup = async ()=> {
try {
  
  
 
  setLoading(true);


  const response = await axios.post("/api/users/signup",user);
  router.push("../login");
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

return(

<>
<div className="container mx-7 p-4">
<h1>{loading? "processing":"Register Page"}</h1>

</div>
<div className="container">



<div  className="form-outline mb-4">
    <input  value={user.username}  onChange={(e) => setUser({...user, username:e.target.value})}  id="form2Example19" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">User name</label>
  </div>

  <div  className="form-outline mb-4">
    <input  value={user.email}  onChange={(e) => setUser({...user, email:e.target.value})}  id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  
  <div  className="form-outline mb-4">
    <input type="password" onChange={(e)=> setUser({...user, password:e.target.value})} value={user.password} id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  <button className="btn btn-primary btn-block mb-4" onClick={onSignup}> {buttonDisabled? "No Signup":"Signup"}</button>


</div>
</>
);


}