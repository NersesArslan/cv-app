import "./App.css";
import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Professional from "./components/Professional";
import CV from "./components/CV";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="container">
          <General />
          <Education />
          <Professional />
        </div>
        <CV />
      </div>
    );
  }
}

export default App;
