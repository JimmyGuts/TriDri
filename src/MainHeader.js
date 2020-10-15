import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainHeader(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container mainDisplay">
        <div class="welcomeStreak">
          <h1 class="display-4 welcome">Welcome, {props.state.name}!</h1>
          <h4 class="lead streak">Your current streak is <b>{props.state.streak}</b> weeks, and you have <b>{props.state.drinksLeft}</b> drinks remaining this week.</h4>
        </div>
        <div class="drinkCircle rounded-circle">
          <h1 class="drinkNumber">{props.state.drinksLeft}</h1>
        </div>
      </div>
    </div>
  )
}

export default MainHeader;