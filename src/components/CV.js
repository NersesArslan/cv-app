import React, { Component } from "react";

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
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{college}</p>
        <p>{major}</p>
        <p>{eduDateFrom}</p>
        <p>{eduDateTo}</p>
        <p>{company}</p>
        <p>{position}</p>
        <p>{task}</p>
        <p>{workDateFrom}</p>
        <p>{workDateTo}</p>
      </div>
    );
  }
}
