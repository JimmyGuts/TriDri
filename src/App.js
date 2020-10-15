
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
      streak: 5,
      drinksLeft: 5,
    }
    this.logIn = this.logIn.bind(this);
  }

  logIn(event) {
    event.preventDefault();
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }


  render() {
    const { name } = this.props;
    return (
      <div>
        <NavBar />
          {this.state.loggedIn
          ? <Display state={this.state} />
          : <Login logIn={this.logIn.bind(this)}/>
          }
      </div>
    );
  }
}

export default App;
