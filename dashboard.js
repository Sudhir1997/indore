import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styles from './dashboard.module.css';
import {Edit} from './edit.js';
export function Dashboard(){
// state of component
  let [userName,changeUsername]=useState(localStorage.getItem("username")||"");
  let [details,updateDetails]=useState();
  let [display,updateDisplay]=useState(false);
  let [modal,updateModal]=useState(false);


  let handlerPagination=async(page)=>{
    let records=await axios.get(`https://reqres.in/api/users?page=${page}`);
    updateDetails(records.data.data);
    updateDisplay(true);
    console.log(details);
  }

  let handlerEditUser=async(value)=>{
    let result=await axios.get(`https://reqres.in/api/users/${value}`);
    localStorage.setItem("selectedEmail",result.data.data.email);
    localStorage.setItem("selectedFirstName",result.data.data.first_name);
    localStorage.setItem("selectedLastName",result.data.data.last_name);
    console.log(result.data.data);
    updateModal(true);
  }


  const modalClose=()=>{
    updateModal(false);
  }


  return(
    <>
    <h1 className={styles.username}>{`Hi,${userName}`}</h1>
    {
      display===true?details.map((value)=>{return(
        <table class="table">
         <tbody>
         <tr>
         <td key={value.id}>{value.email}</td>
         <td>
         <div class="dropdown">
         <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
         Dropdown
         </a>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
         <li><button class="dropdown-item" onClick={()=>{handlerEditUser(value.id)}}>Edit User</button></li>
         <li><button class="dropdown-item" >Delete User</button></li>
         </ul>
         </div>
         </td>
         </tr>
         </tbody>
         </table>
       )}):<h1>Please Select Page</h1>
    }
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><button onClick={()=>{handlerPagination("1")}} class="page-link" href="#">1</button></li>
    <li class="page-item"><button onClick={()=>{handlerPagination("2")}} class="page-link" href="#">2</button></li>
  </ul>
</nav>
{
  modal===true?< Edit visible={modal} close={modalClose} />:null
}
    </>
  )
}
