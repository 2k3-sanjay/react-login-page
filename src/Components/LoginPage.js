import React, { useEffect, useState } from 'react'
import Signinmodel from './Model/Signinmodel';
import { useRouter } from 'next/router';

function LoginPage() {

  const[userDetails,setUserDetails]=useState([])
  const [password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const[errorMessage,setErrorMessage]=useState("")
  const router=useRouter()

useEffect(()=>{
  setUserDetails(JSON.parse(localStorage.getItem("userDetails")))
},[])

const verifyUserDetails=()=>{
  console.log("sdfsdf",email==userDetails.email||password==userDetails.password,password,email)
  if(userDetails!==null||userDetails!==undefined){
    if(email===userDetails.email||password===userDetails.password){
      router.push('/home')
    }else{
      setErrorMessage('please enter valid user details')
    }
  }else{
    setErrorMessage('please Add  user details')
  }

}

  return (
    <>
      <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <h5  className='text-danger' >{errorMessage}</h5>
        <form>
      
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13"  value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control form-control-lg" placeholder='Enter your Email Address'/>
            <label class="form-label" for="form1Example13" >Email address</label>
          </div>

       
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg"  value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter your  Password'/>
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
         
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button" onClick={(e)=>verifyUserDetails(e)}>Sign In</button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <div class="d-grid gap-2">
  <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Sign Up</button> 
</div>

        </form>
      </div>
    </div>
  </div>
</section>
<Signinmodel userDetails={userDetails} setUserDetails={setUserDetails}/>

    </>
  )
}

export default LoginPage
