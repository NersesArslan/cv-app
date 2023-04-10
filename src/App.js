import "./App.css";
import React, { Component } from "react";
import General from "./components/General";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <General />
      </div>
    );
  }
}

export default App;
