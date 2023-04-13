import React, { Component } from "react";

export default class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>College/University:</label>
            <input
              type="text"
              onChange={this.props.onChange}
              value={this.props.value}
            />
          </div>
          <div>
            <label>Major</label>
            <input
              type="email"
              onChange={this.props.onEmailChange}
              value={this.props.emailValue}
            />
          </div>
          <div>
            <label>From</label>
            <input
              type="date"
              onChange={this.props.onPhoneChange}
              value={this.props.phoneValue}
            />
          </div>
          <div>
            <label>To</label>
            <input
              type="date"
              onChange={this.props.onPhoneChange}
              value={this.props.phoneValue}
            />
          </div>
        </form>
      </div>
    );
  }
}
