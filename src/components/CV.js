import React, { Component } from "react";
import Line from "./Line";
import "../styles/general.css";
import "../styles/education.css";
import "../styles/work.css";
export default class CV extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      email,
      phone,
      college,
      major,
      eduDateFrom,
      eduDateTo,
      company,
      position,
      task,
      workDateFrom,
      workDateTo,
    } = this.props;
    return (
      <div className="CV-Template">
        <div className="General">
          <p className="name">{name}</p>
          <div className="test">
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
        <Line />
        <div className="Education">
          <h2>Education</h2>
          <div className="college">
            <h4>College</h4>
            <p>{college}</p>
          </div>
          <div className="major">
            <h4>Major</h4>
            <p>{major}</p>
          </div>
          <div className="date">
            <h4>Year</h4>
            <p>
              {eduDateFrom} - {eduDateTo}
            </p>
          </div>
        </div>
        <Line />
        <div className="Work">
          <h2>Work History</h2>
          <div className="company">
            <h4>Company</h4>
            <p>{company}</p>
          </div>
          <div className="job">
            <h4>Job Title</h4>
            <p>{position}</p>
          </div>
          <div className="job-description">
            <h4>Job Description</h4>
            <p>{task}</p>
          </div>
          <div className="date">
            <h4>Year</h4>
            <p>
              {workDateFrom} - {workDateTo}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
