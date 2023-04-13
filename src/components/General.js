import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              onChange={this.props.onChange}
              value={this.props.value}
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              onChange={this.props.onEmailChange}
              value={this.props.emailValue}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              onChange={this.props.onPhoneChange}
              value={this.props.phoneValue}
            />
          </div>

          <button type="submit" value={this.props.buttonValue}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
