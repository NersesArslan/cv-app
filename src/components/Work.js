import React, { Component } from "react";

export default class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <label>Company:</label>
            <input
              type="text"
              onChange={this.props.onChange}
              value={this.props.value}
            />
          </div>
          <div>
            <label>Position:</label>
            <input
              type="text"
              onChange={this.props.onPositionChange}
              value={this.props.positionValue}
            />
          </div>
          <div>
            <label>Job Description:</label>
            <textarea
              type="text"
              onChange={this.props.onTaskChange}
              value={this.props.taskValue}
            />
          </div>
          <div>
            <label>From:</label>
            <input
              type="number"
              onChange={this.props.onWorkDateChange}
              value={this.props.workDateValue}
            />
          </div>
          <div>
            <label>To:</label>
            <input
              type="number"
              onChange={this.props.onToDate}
              value={this.props.toDateValue}
            />
          </div>

          <div className="buttons">
            <button type="submit" value={this.props.buttonValue}>
              Submit
            </button>
            <button onClick={onClick}>Edit</button>
          </div>
        </form>
      </div>
    );
  }
}
