import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from "./MainHeader.js";
import Calendar from "./Calendar.js"

function Display(props) {
  return (
    <div>
      <MainHeader state={props.state} />

      <Calendar />

    </div>
  )
}

export default Display;