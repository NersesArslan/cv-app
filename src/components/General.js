import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="Name">
          <label>Name</label>
          <input type="text" onChange={this.handleName} value={name.text} />
        </div>
      </div>
    );
  }
}
