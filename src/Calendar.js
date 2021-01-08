import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calendar(props) {

  // Hooks for initializing calendar with correct days, and for setting drink numbers
  const [drinks, setDrinks] = useState(0);
  const [dayName, setDayName] = useState("");

  // Creation of containers for use in logic
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const stateDays = Object.keys(props.state.day)
  const dayDrinks = [];

  // Logic for initializing current drinks listed for each day
  let dayFiller = (days) => {
    days.forEach(dayNum => dayDrinks.push(props.state.day[dayNum]))
  }
  dayFiller(stateDays);

  // Logic for logging drinks
  // Need to update / implement testing for negatives
  let drinkLog = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    setDrinks(value);
    setDayName(name);
  }
  let drinkPlus = (event, index) => {
    let target = event.target;
    let name = target.name;
    let value = drinks;
    // let value = dayDrinks[index];
    setDrinks(value += 1);
    dayDrinks[index] = value += 1;
    setDayName(name);
  }
  let drinkMinus = (event, index) => {
    let target = event.target;
    let name = target.name;
    let value = drinks;
    // let value = dayDrinks[index];
    if (drinks - 1 >= 0) {
      setDrinks(value -= 1)
      setDayName(name);
    }
  }
  let clearDrinks = () => {
    setDrinks(0);
  }

  // This needs to be refactored, seperate concerns and update how conditional rendering is currently working
    // Implement success / failure coloring

  const weekList = weekdays.map((weekday, index) =>
    <div class="card border-primary mb-3 day" style={{ order: index }} key={index}>
      <div class="card-header bg-primary border-success dayHeader" ><h2>{weekday}</h2></div>
      <div class="card-body text-success">
        <h5 class="card-title">{dayDrinks[index]}</h5>
        <div>
          {dayDrinks[index] > 0
            ? <button type="button" class="btn btn-primary calButton" data-toggle="modal" data-target={`#logModal${weekday}`}>Update</button>
            : <button type="button" class="btn btn-primary calButton" data-toggle="modal" data-target={`#logModal${weekday}`}>Log</button>
          }
        </div>
      </div>
      <div class="modal fade" id={`logModal${weekday}`} tabIndex="-1" role="dialog" aria-labelledby="logDrinksModal" aria-hidden="true">
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
                  <label for={dayDrinks[index]}></label>
                  <div class="container-fluid">
                    <div class="row justify-content-center">
                      <button type="button" class="btn btn-primary drinkPlusMinus rounded-circle" name={stateDays[index]} onClick={() => drinkMinus(event)}>
                        -
                      </button>
                      <h5 class="drinkTotal">{drinks}</h5>
                      <button type="button" class="btn btn-primary drinkPlusMinus rounded-circle" name={stateDays[index]} onClick={() => drinkPlus(event)}>
                        +
                      </button>
                    </div>
                  </div>
                  {/* <input type="number" min="0" max={props.state.drinksLeft} default="0" class="form-control custom-range" id={dayDrinks[index]} name={stateDays[index]} onChange={(event) => drinkLog(event)} /> */}
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={() => { props.addDrinks(drinks, dayName); clearDrinks(); }}>Log</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="calendar col-9" order={1}>
          {weekList}
        </div>
        <div class="calendar col-2" order={2}>
          <div class="card border-primary mb-3 day" >
            <div class="card-header bg-success border-success dayHeader"><h2>{"Total"}</h2></div>
            <div class="card-body text-success">
              <h5 class="card-title">{`${props.state.sumOfDrinks} / ${props.state.totalDrinks}`}</h5>
              <button type="button" class="btn btn-success calButton">Submit Week</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="row justify-content-center">
        <div class="col-9">
          <div class="progress">
            <div class="progress-bar progBar" role="progressbar">60%</div>
          </div>
        </div>
        <div class="col-2"></div>
      </div> */}
    </div>
  )
}

export default Calendar;