import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from "./MainHeader.js";
import Calendar from "./Calendar.js"

function Display(props) {
  return (
    <div>
      <MainHeader state={props.state} />

      <Calendar
        addDrinks={props.addDrinks}
        state={props.state}/>

    </div>
  )
}

export default Display;