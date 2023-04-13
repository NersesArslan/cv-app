import "./App.css";
import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";

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

      college: {
        text: "",
      },
      collegeValue: [],
      major: { text: "" },
      majorValue: [],
      from: { text: "" },
      fromValue: [],
      to: { text: "" },
      toValue: [],
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onSubmitEdu = this.onSubmitEdu.bind(this);
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

  handleCollege = (e) => {
    this.setState({
      college: {
        text: e.target.value,
      },
    });
  };

  handleMajor = (e) => {
    this.setState({
      major: {
        text: e.target.value,
      },
    });
  };
  handleStartDate = (e) => {
    this.setState({
      from: {
        text: e.target.value,
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
      fromValue: this.state.fromValue.concat(this.state.from.text),
      from: { text: "" },
    });
  };

  onSubmitEdu = (e) => {
    e.preventDefault(
      this.setState({
        collegeValue: this.state.collegeValue.concat(this.state.college.text),
        college: { text: "" },
        majorValue: this.state.majorValue.concat(this.state.major.text),
        major: { text: "" },
      })
    );
  };

  render() {
    const {
      name,
      nameValue,
      email,
      emailValue,
      phone,
      phoneValue,
      college,
      collegeValue,
      major,
      majorValue,
      from,
      fromValue,
    } = this.state;
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
          <Education
            onChange={this.handleCollege}
            value={college.text}
            onMajorChange={this.handleMajor}
            majorValue={major.text}
            onDateChange={this.handleStartDate}
            phoneValue={from.text}
            buttonValue={"Submit"}
            onSubmit={this.onSubmitEdu}
          />
        </div>
        <h1>Lie about it all you want, you'll still get underpaid.</h1>
        <div class="CV-Template">
          <p>{nameValue}</p>
          <p>{emailValue}</p>
          <p>{phoneValue}</p>
          <p>{collegeValue}</p>
          <p>{majorValue}</p>
          <p>{fromValue}</p>
        </div>
      </div>
    );
  }
}

export default App;
