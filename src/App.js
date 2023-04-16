import "./App.css";
import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import CV from "./components/CV";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: { text: "" },
      nameValue: [],
      email: { text: "" },
      emailValue: [],
      phone: { number: "" },
      phoneValue: [],
      college: { text: "" },
      collegeValue: [],
      major: { text: "" },
      majorValue: [],
      from: { text: "" },
      fromValue: [],
      to: { text: "" },
      toValue: [],
      company: { text: "" },
      companyValue: [],
      position: { text: "" },
      positionValue: [],
      task: { text: "" },
      taskValue: [],
      workFrom: { text: "" },
      workFromValue: [],
      workTo: { text: "" },
      workToValue: [],
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
  handleEndDate = (e) => {
    this.setState({
      to: {
        text: e.target.value,
      },
    });
  };

  handleCompany = (e) => {
    this.setState({
      company: {
        text: e.target.value,
      },
    });
  };
  handlePosition = (e) => {
    this.setState({
      position: { text: e.target.value },
    });
  };

  handleTask = (e) => {
    this.setState({
      task: { text: e.target.value },
    });
  };
  handleWorkStartDate = (e) => {
    this.setState({
      workFrom: {
        text: e.target.value,
      },
    });
  };
  handleWorkTo = (e) => {
    this.setState({
      workTo: {
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
    });
  };

  editButton = (e) => {
    e.preventDefault();
    this.setState({
      name: { text: this.state.nameValue },
      nameValue: [],
      email: { text: this.state.emailValue },
      emailValue: [],
      phone: { number: this.state.phoneValue },
      phoneValue: [],
    });
  };

  onSubmitEdu = (e) => {
    e.preventDefault();
    this.setState({
      collegeValue: this.state.collegeValue.concat(this.state.college.text),
      college: { text: "" },
      majorValue: this.state.majorValue.concat(this.state.major.text),
      major: { text: "" },
      fromValue: this.state.fromValue.concat(this.state.from.text),
      from: { text: "" },
      toValue: this.state.toValue.concat(this.state.to.text),
      to: { text: "" },
    });
  };

  editEducationButton = (e) => {
    e.preventDefault();
    this.setState({
      college: { text: this.state.collegeValue },
      collegeValue: [],
      major: { text: this.state.majorValue },
      majorValue: [],
      from: { text: this.state.fromValue },
      fromValue: [],
      to: { text: this.state.toValue },
      toValue: [],
    });
  };

  onSubmitWork = (e) => {
    e.preventDefault();
    this.setState({
      companyValue: this.state.companyValue.concat(this.state.company.text),
      company: { text: "" },
      positionValue: this.state.positionValue.concat(this.state.position.text),
      position: { text: "" },
      taskValue: this.state.taskValue.concat(this.state.task.text),
      task: { text: "" },
      workFromValue: this.state.workFromValue.concat(this.state.workFrom.text),
      workFrom: { text: "" },
      workToValue: this.state.workToValue.concat(this.state.workTo.text),
      workTo: { text: "" },
    });
  };

  editWorkButton = (e) => {
    e.preventDefault();
    this.setState({
      company: { text: this.state.companyValue },
      companyValue: [],
      position: { text: this.state.positionValue },
      positionValue: [],
      task: { text: this.state.taskValue },
      taskValue: [],
      workFrom: { text: this.state.workFromValue },
      workFromValue: [],
      workTo: { text: this.state.workToValue },
      workToValue: [],
    });
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
      to,
      toValue,
      company,
      companyValue,
      positionValue,
      position,
      task,
      taskValue,
      workFrom,
      workFromValue,
      workTo,
      workToValue,
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
            onClick={this.editButton}
          />
          <Education
            onChange={this.handleCollege}
            value={college.text}
            onMajorChange={this.handleMajor}
            majorValue={major.text}
            onDateChange={this.handleStartDate}
            fromValue={from.text}
            onToDate={this.handleEndDate}
            toValue={to.text}
            buttonValue={"Submit"}
            onSubmit={this.onSubmitEdu}
            onClick={this.editEducationButton}
          />
          <Work
            onChange={this.handleCompany}
            value={company.text}
            onPositionChange={this.handlePosition}
            positionValue={position.text}
            onTaskChange={this.handleTask}
            taskValue={task.text}
            onWorkDateChange={this.handleWorkStartDate}
            workDateValue={workFrom.text}
            onToDate={this.handleWorkTo}
            toDateValue={workTo.text}
            buttonValue={"Submit"}
            onSubmit={this.onSubmitWork}
            onClick={this.editWorkButton}
          />
        </div>
        <CV
          name={nameValue}
          email={emailValue}
          phone={phoneValue}
          college={collegeValue}
          major={majorValue}
          eduDateFrom={fromValue}
          eduDateTo={toValue}
          company={companyValue}
          position={positionValue}
          task={taskValue}
          workDateFrom={workFromValue}
          workDateTo={workToValue}
        />
      </div>
    );
  }
}

export default App;
