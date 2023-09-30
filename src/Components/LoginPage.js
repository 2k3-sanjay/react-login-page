import React, { useEffect } from 'react'

function LoginPage() {
useEffect(()=>{
    localStorage.setItem("userDetails",JSON.stringify([{userName:"sanjay",emailId:"sanjay@gmail.com",password:"12345"}]));
},[])
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

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
    <div class="mb-3">
    <label for="username" class="form-label">User Name</label>
    <input type="input" class="form-control" placeholder='Enter your name' id="username"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder='Enter your Email' aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input type="password" class="form-control"  placeholder='Enter your password' id="exampleInputPassword1"/>
  </div>
 
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default LoginPage
