import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calendar(props) {

  const [Mon, setMon] = useState(0);
  const [Tue, setTue] = useState(0);
  const [Wed, setWed] = useState(0);
  const [Thu, setThu] = useState(0);
  const [Fri, setFri] = useState(0);
  const [Sat, setSat] = useState(0);
  const [Sun, setSun] = useState(0);

  const weekdays = ["M", "Tu", "W", "Th", "F", "St", "Sn"];
  const stateDays = [Mon, Tue, Wed, Thu, Fri, Sat, Sun];

  const weekList = weekdays.map((weekday, index) =>
    <div class="card border-success mb-3 day" style={{order: index}}  key={index}>
      <div class="card-header bg-transparent border-success"><h2>{weekday}</h2></div>
      <div class="card-body text-success">
        <h5 class="card-title">{stateDays[index]}</h5>
        <button type="button" class="btn btn-primary calButton">Log</button>
      </div>
    </div>
  );

  return (
    <div class="calendar">
      {weekList}
    </div>
  )
}

export default Calendar;