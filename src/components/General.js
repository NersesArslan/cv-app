import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onSubmit,
      onChange,
      value,
      onEmailChange,
      emailValue,
      onPhoneChange,
      phoneValue,
      buttonValue,
      onClick,
    } = this.props;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" onChange={onChange} value={value} />
          </div>
          <div>
            <label>E-mail:</label>
            <input type="email" onChange={onEmailChange} value={emailValue} />
          </div>
          <div>
            <label>Phone Number:</label>
            <input type="text" onChange={onPhoneChange} value={phoneValue} />
          </div>
          <button type="submit" value={buttonValue}>
            Submit
          </button>
          <button onClick={onClick}>Edit</button>
        </form>
      </div>
    );
  }
}
