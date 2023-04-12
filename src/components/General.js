import React, { Component } from "react";
import Render from "./Render";
class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",

      test: [],
      test2: [],
      test3: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleNumber(event) {
    this.setState({ number: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      test: this.state.test.concat(this.state.name),
      test2: this.state.test2.concat(this.state.email),
      test3: this.state.test3.concat(this.state.number),
      name: "",
      email: "",
      number: "",
    });
  }

  editForm() {
    alert("you clicked the edit button!");
  }
  render() {
    const { test, test2, test3 } = this.state;
    return (
      <div className="General">
        <form onSubmit={this.handleSubmit}>
          <div className="Name">
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>E-mail</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>

          <div>
            <label>Phone Number</label>
            <input
              type="number"
              value={this.state.number}
              onChange={this.handleNumber}
            />
          </div>
          <div className="buttons">
            <button type="submit" value="Submit">
              Submit
            </button>
            <button onClick={this.editForm}>Edit</button>
          </div>
        </form>
        <Render test={test} test2={test2} test3={test3} />
      </div>
    );
  }
}

export default General;
