import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

export function Signup(){
   let [buttonDisableduseState,changebuttonDisableduseState]=useState(false);
   let navigate = useNavigate();

   const confirmHandler=(event)=>{
     let confirmPassword=event.target.value;
     let password=localStorage.getItem("password");
     if(confirmPassword===password){
       changebuttonDisableduseState(true);
     }
   }

  const handlerChange=(event)=>{
    let value=event.target.value;
    let name=event.target.id;
    localStorage.setItem(name,value)
    console.log(localStorage.getItem(name));
  }
    const handlerCLick=(event)=>{
      event.preventDefault();
      console.log(localStorage.getItem("username"));
       navigate(`/login`);
    }

    return(
      <>
      <h1>SignUp to Proceed...</h1>
      <form>
      <div class="mb-3">
        <label for="firstname" class="form-label">First Name</label>
        <input onBlur={handlerChange} type="text" required class="form-control" id="firstname"  />

      </div>
      <div class="mb-3">
        <label for="lastname" class="form-label">Last Name</label>
        <input onBlur={handlerChange} type="text" class="form-control" id="lastname"  />

      </div>
      <div class="mb-3">
        <label for="username" required class="form-label">User Name</label>
        <input onBlur={handlerChange} type="text" class="form-control" id="username"  />

      </div>
        <div class="mb-3">
          <label for="email" required class="form-label">Email address</label>
          <input onBlur={handlerChange} type="email" class="form-control" id="email"  />
        </div>
        <div class="mb-3">
            <label for="password" required class="form-label">Password</label>
            <input onBlur={handlerChange} type="password" class="form-control" id="password" />
        </div>
        <div class="mb-3">
            <label for="confirmpassword" required class="form-label">Confirm Password</label>
            <input onBlur={handlerChange} onChange={confirmHandler} type="confirmpassword" class="form-control" id="password" />
        </div>
      </form>
      {
        buttonDisableduseState===true?<button onClick={handlerCLick} class="btn btn-primary">Sign Up</button>:null
      }

      </>
    )
}
