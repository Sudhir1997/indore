import ReactModal from 'react-modal';
import React,{useState} from 'react';

export function Edit(props){
  let [email,updateEmail]=useState(localStorage.getItem("selectedEmail"));
  let [selectedLastName,updateLastName]=useState(localStorage.getItem("selectedLastName"));
  let [selectedFirstName,updateFirstName]=useState(localStorage.getItem("selectedLastName"));
let handlerUpdate=(event)=>{
  if(event.target.id==="firstname"){
    updateFirstName(event.target.value);
  }
  if(event.target.id==="lastname"){
    console.log(1)
    updateLastName(event.target.value);
  }
  if(event.target.id==="email"){
    updateEmail(event.target.value);
  }
}

  return(
    <ReactModal  isOpen={props.visible}>
    <h1>Update Details</h1>
    <form>
    <div class="mb-3">
      <label for="firstname" class="form-label">First Name</label>
      <input value={selectedFirstName} onChange={handlerUpdate}  type="text" required class="form-control" id="firstname"  />

    </div>
    <div class="mb-3">
      <label for="lastname" class="form-label">Last Name</label>
      <input value={selectedLastName}  onChange={handlerUpdate}  type="text" class="form-control" id="lastname"  />
    </div>

      <div class="mb-3">
        <label for="email" required class="form-label">Email</label>
        <input value={email}  onChange={handlerUpdate}  type="email" class="form-control" id="email"  />
      </div>
    </form>
    <button onClick={()=>{props.close()}}> Update Record </button>
        </ReactModal>
  )
}
