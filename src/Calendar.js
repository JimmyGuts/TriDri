import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calendar(props) {

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const stateDays = Object.keys(props.state.day)
  const dayDrinks = [];
  let dayFiller = (days) => {
    days.forEach(dayNum => dayDrinks.push(props.state.day[dayNum]))
  }
  dayFiller(stateDays);


  // const handleChange = (event, index) => {
  //   const target = event.target;
  //   const value = target.value;
  //   let dayToChange = setDays[index];
  //   dayToChange(value);
  // }

  const weekList = weekdays.map((weekday, index) =>
    <div class="card border-primary mb-3 day" style={{ order: index }} key={index}>
      <div class="card-header bg-primary border-success dayHeader"><h2>{weekday}</h2></div>
      <div class="card-body text-success">
        <h5 class="card-title">{dayDrinks[index]}</h5>
        <button type="button" class="btn btn-primary calButton" data-toggle="modal" data-target="#logModal">Log</button>
      </div>
      <div class="modal fade" id="logModal" tabIndex="-1" role="dialog" aria-labelledby="logDrinksModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="logDrinksModal">Number of Drinks</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="numberOfDrinks"></label>
                  <input type="number" class="form-control" id="numberOfDrinks" />
                </div>
              </form>
            </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" onClick={()=>{props.updateDrinks()}}>Log</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

  return (
    <div class="calendar">
        {weekList}
        <div>

        </div>
      </div>
  )
}

export default Calendar;