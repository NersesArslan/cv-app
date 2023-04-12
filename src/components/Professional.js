import React, { Component } from "react";

export default class Professional extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Professional">
        <form>
          <div>
            <label>Company</label>
            <input />
          </div>
          <div>
            <label>Position</label>
            <input />
          </div>
          <div>
            <label>Main Tasks</label>
            <textarea></textarea>
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
