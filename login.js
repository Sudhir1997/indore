import React,{useState} from 'react';
import { Link } from 'react-router-dom';
export function Login(){
  let [username,updateUsername]=useState(localStorage.getItem("email")||localStorage.getItem("username")||"");
  let [password,updatePassword]=useState(localStorage.getItem("password")||"");

  return(
    <>
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" value={username} class="form-control" id="email" aria-describedby="emailHelp"/>
      </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" value={password} class="form-control" id="password"/>
   </div>
  </form>
<Link to="/dashboard">login</Link>
</>
  )
}
