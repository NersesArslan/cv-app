import React, { Component } from "react";

export default class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Education">
        <form>
          <div>
            <label htmlFor="School">School Name</label>
            <input type="text" id="School" />
          </div>
          <div>
            <label>Major</label>
            <input type="text" />
          </div>
          <div>
            <label>From</label>
            <input type="date" />
          </div>
          <div>
            <label>To</label>
            <input type="date" />
          </div>
          <div className="buttons">
            <button type="submit" value="Submit">
              Submit
            </button>
            <button onClick={this.editForm}>Edit</button>
          </div>
        </form>
      </div>
    );
  }
}
