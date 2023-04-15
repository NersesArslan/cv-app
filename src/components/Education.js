import React, { Component } from "react";

export default class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <label>College:</label>
            <input
              type="text"
              onChange={this.props.onChange}
              value={this.props.value}
            />
          </div>
          <div>
            <label>Major:</label>
            <input
              type="text"
              onChange={this.props.onMajorChange}
              value={this.props.majorValue}
            />
          </div>

          <div>
            <label>From:</label>
            <input
              type="number"
              onChange={this.props.onDateChange}
              value={this.props.fromValue}
            />
          </div>
          <div>
            <label>To</label>
            <input
              type="number"
              onChange={this.props.onToDate}
              value={this.props.toValue}
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
