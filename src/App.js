
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
      streak: 3,
      drinksLeft: 5,
    }

  }

  logIn(event) {
    event.preventDefault();
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  addDrinks(number) {
    this.setState({
      drinksLeft: drinksLeft - number,
    })
  }


  render() {
    const { name } = this.props;
    return (
      <div>
        <NavBar logIn={this.logIn.bind(this)}/>
          {this.state.loggedIn
          ? <Display state={this.state} addDrinks={this.addDrinks.bind(this)}/>
          : <Login logIn={this.logIn.bind(this)}/>
          }
      </div>
    );
  }
}

export default App;
