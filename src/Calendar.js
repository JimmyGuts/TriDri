import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calendar(props) {

  const [drinks, setDrinks] = useState(0);

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const stateDays = Object.keys(props.state.day)
  const dayDrinks = [];
  let dayFiller = (days) => {
    days.forEach(dayNum => dayDrinks.push(props.state.day[dayNum]))
  }
  dayFiller(stateDays);

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
                  <input type="number" class="form-control" id="numberOfDrinks" onChange={() => setDrinks(event.target.input)} />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" onClick={() => { props.addDrinks(drinks) }}>Log</button>
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
            <div class="card-body text-success cardTotal">
              <h5 class="card-title">{`${props.state.sumOfDrinks} / ${props.state.totalDrinks}`}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="progress">
            <div class="progress-bar progBar" role="progressbar">60%</div>
          </div>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  )
}

export default Calendar;