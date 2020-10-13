
import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.js";
import Login from "./Login.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <NavBar />

        <Login />

      </div>
    );
  }
}

export default App;
