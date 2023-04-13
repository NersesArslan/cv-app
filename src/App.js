import "./App.css";
import React, { Component } from "react";
import General from "./components/General";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        text: "",
      },
      nameValue: [],
      email: {
        text: "",
      },
      emailValue: [],

      phone: {
        number: "",
      },
      phoneValue: [],
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleName = (e) => {
    this.setState({
      name: {
        text: e.target.value,
      },
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: {
        text: e.target.value,
      },
    });
  };
  handlePhone = (e) => {
    this.setState({
      phone: {
        number: e.target.value,
      },
    });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      nameValue: this.state.nameValue.concat(this.state.name.text),
      name: { text: "" },
      emailValue: this.state.emailValue.concat(this.state.email.text),
      email: { text: "" },
      phoneValue: this.state.phoneValue.concat(this.state.phone.number),
      phone: { number: "" },
    });
  };

  render() {
    const { name, nameValue, email, emailValue, phone, phoneValue } =
      this.state;
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onSubmitForm}>
            <div className="Name">
              <label>Name</label>
              <input type="text" onChange={this.handleName} value={name.text} />
            </div>

            <div>
              <label>E-mail</label>
              <input
                type="email"
                onChange={this.handleEmail}
                value={email.text}
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                type="text"
                onChange={this.handlePhone}
                value={phone.number}
              />
            </div>
            <div className="buttons">
              <button type="submit" value="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div class="CV-Template">
          <p>{nameValue}</p>
          <p>{emailValue}</p>
          <p>{phoneValue}</p>
        </div>
      </div>
    );
  }
}

export default App;
