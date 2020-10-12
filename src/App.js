
import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.js"

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <NavBar />

        {/* <button type="button" className="btn btn-primary">
          This is a bootstrap button
        </button> */}
      </div>
    );
  }
}

export default App;
