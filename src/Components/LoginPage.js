import React, { useEffect, useState } from 'react'
import Signinmodel from './Model/signinmodel';

function LoginPage() {


  const[userDetails,setUserDetails]=useState([])
useEffect(()=>{
  setUserDetails(JSON.parse(localStorage.getItem("userDetails")))
},[])
console.log("sdfsdf",userDetails)

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
        <form>
      
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" placeholder='Enter your Email Address'/>
            <label class="form-label" for="form1Example13" >Email address</label>
          </div>

       
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg"  placeholder='Enter your  Password'/>
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
          <button class="btn btn-primary" type="button">Sign In</button>
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
<Signinmodel userDetails={userDetails}/>

    </>
  )
}

export default LoginPage
