import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components need logic, placeholder for now

function NavBar(props) {
  return (
    <div>
    <nav className="navbar  navbar-dark bg-primary">
      <a className="navbar-brand navtext" href="#">
        <img src="./images/half-full-white.png" width="30" height="30" style={{marginRight: '15px', marginTop: "4px"}} className="d-inline-block align-top" alt="" loading="lazy"></img>
          Tri Dri
      </a>
      <button className="btn btn-outline-light" type="button" onClick={props.logIn}>
        Log In
      </button>
    </nav>
    </div>
  )
}

export default NavBar;