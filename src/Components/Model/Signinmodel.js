import React, { useState } from 'react'

function signinmodel({userDetails,setUserDetails}) {
    const [password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[userName,setUserName]=useState("")
    const [errorMessage,setErrorMessage]=useState("")
  
    console.log("sdafafadf",userDetails)
 
    const SaveValue=(e)=>{
        if(password.length!==0&&email.length!==0&&userName.length!==0){
            let obj={
                emailId:email,
                password:password,
                userName:userName
            }
            localStorage.setItem( "userDetails", JSON.stringify(obj) )
            setUserDetails(obj)
            $('#exampleModal').modal('hide');

        }else{
          setErrorMessage("Please Add User Details")
        }

    }
  return (
   <>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h6 className='text-danger'>{errorMessage}</h6>
      <form>
    <div class="mb-3">
    <label for="username" class="form-label" >User Name</label>
    <input type="input" class="form-control" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter your name' id="username"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter your Email' aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' id="exampleInputPassword1"/>
  </div>
 
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"  onClick={(e)=>SaveValue(e)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
   </>
  )
}

export default signinmodel
