import React, { Component } from "react";
import Line from "./Line";
import "../styles/general.css";
import "../styles/education.css";
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
          <p>{college}</p>
          <p>{major}</p>
          <p>
            {eduDateFrom} - {eduDateTo}
          </p>
        </div>
        <Line />
        <div className="Work">
          <p>{company}</p>
          <p>{position}</p>
          <p>{task}</p>
          <p>{workDateFrom}</p>
          <p>{workDateTo}</p>
        </div>
      </div>
    );
  }
}
