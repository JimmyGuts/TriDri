import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {


  return (
    <div>
      <div className="container loginbox">
        {/* <h2 class="loginHeader">Log In</h2> */}
        <form className="loginform">
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword2" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
            </div>
          </div>
          <div class="form-group row logorsign">
            <div class="col-sm-10">
              <button onClick={props.logIn} class="btn btn-primary btn-lg login">Log In</button>
            </div>
          </div>
        </form>
      </div>
      <div className="container loginbox">
        {/* <h2 class="loginHeader">Sign Up</h2> */}
        <form className="loginform">
          <div class="form-group row">
            <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="name" class="form-control" id="inputName3" placeholder="Name" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail4" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword4" class="col-sm-2 col-form-label">Again</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password Again" />
            </div>
          </div>
          <div class="form-group row logorsign">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary btn-lg signup">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;