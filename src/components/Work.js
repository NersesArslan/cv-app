import React, { Component } from "react";

export default class Work extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Company:</label>
            <input type="text" />
          </div>
          <div>
            <label>Position:</label>
            <input
              type="text"
              onChange={this.props.onMajorChange}
              value={this.props.majorValue}
            />
          </div>
          <div>
            <label>Main tasks</label>
            <textarea />
          </div>
          <div>
            <label>From</label>
            <input type="date" />
          </div>
          <div>
            <label>To</label>
            <input type="date" />
          </div>
          <button type="submit" value={this.props.buttonValue}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
