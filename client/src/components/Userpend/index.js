import React from "react";
import "./style.css";

class Userpend extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card profileCards darken-1">
            <div className="card-content white-text">
              <span className="card-title">Your confirmed appointments</span>
              <div class="collection">
                <a href="#!" class="collection-item"><span class="new badge">3</span>CONFIRMED APPOINTMENTS</a>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Userpend;
