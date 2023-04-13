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
          <General
            onChange={this.handleName}
            value={name.text}
            onEmailChange={this.handleEmail}
            emailValue={email.text}
            onPhoneChange={this.handlePhone}
            phoneValue={phone.number}
            buttonValue={"Submit"}
            onSubmit={this.onSubmitForm}
          />
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
