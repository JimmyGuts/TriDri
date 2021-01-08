import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Update to indicate when number of drinks is close to being reached, has been reached, and has been exceeded

function MainHeader(props) {
  return (
    <div class="jumbotron jumbotron-fluid welcomeBar">
      <div class="container mainDisplay">
        <div class="welcomeStreak">
          <h1 class="display-4 welcomeMessage">Welcome, {props.state.name}!</h1>
          <h4 class="lead streak welcomeMessage">Your current streak is <b>{props.state.streak}</b> weeks, and you have <b>{props.state.drinksLeft}</b> drinks remaining this week.</h4>
          <h4 class="lead streak welcomeMessage">Longest Streak: <b>{props.state.streak}</b> weeks.</h4>
        </div>
        <div class="drinkCircle rounded-circle">
          <h1 class="drinkNumber">{props.state.drinksLeft}</h1>
        </div>
      </div>
    </div>
  )
}

export default MainHeader;