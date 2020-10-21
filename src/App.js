
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
      totalDrinks: 30,
      drinksLeft: 0,
      day: {
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
        sat: 6,
        sun: 7
      },

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
      drinksLeft: this.state.totalDrinks - sum
    })
  }

  componentDidMount() {
    this.drinksLeftFill(this.state.day);
  }




  addDrinks(event) {
    let target = event.target;
    console.log(target)
    // this.setState({
    //   drinksLeft: drinksLeft - number,
    //   [day]: number,
    // })
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
