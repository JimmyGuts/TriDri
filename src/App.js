
import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.js";
import Login from "./Login.js";
import Display from "./Display.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      name: "Liz",
      streak: 0,
      totalDrinks: 10,
      drinksLeft: 0,
      day: {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0
      },
      sumOfDrinks: 0,
    }
  }

  logIn(event) {
    event.preventDefault();
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  drinksLeftFill(day) {
    let sum = 0;
    for (let key in day) {
      sum = sum + day[key]
    }
    this.setState({
      sumOfDrinks: sum,
      drinksLeft: this.state.totalDrinks - sum
    })
  }

  componentDidMount() {
    this.drinksLeftFill(this.state.day);
  }

  addDrinks(drinks, dayName) {
    drinks = parseInt(drinks);
    let updatedDay = { ...this.state.day, [dayName]: drinks};
    this.setState({ day: updatedDay });
    this.drinksLeftFill(updatedDay);
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <NavBar logIn={this.logIn.bind(this)} />
        {this.state.loggedIn
          ? <Display
            state={this.state}
            addDrinks={this.addDrinks.bind(this)} />
          : <Login
            logIn={this.logIn.bind(this)} />
        }
      </div>
    );
  }
}

export default App;
