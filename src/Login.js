import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {


  return (
    <div className="container loginbox">
      <form className="loginform">
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="name" class="form-control" id="inputName3" placeholder="Name"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
          </div>
        </div>
        <div class="form-group row logorsign">
          <div class="col-sm-10">
            <button onClick={props.logIn} class="btn btn-primary btn-lg login">Log In</button>
            <button type="submit" class="btn btn-primary btn-lg signup">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;