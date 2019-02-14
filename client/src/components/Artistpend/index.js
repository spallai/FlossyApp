import React from "react";
import "./style.css"

class Artistpend extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card profileCards darken-1">
            <div className="card-content white-text">
              <span className="card-title">Your pending appointments and messages</span>
              <div className="collection">
                <a href="#!" className="collection-item"><span className="new badge">23</span>EMAIL</a>
                <a href="#!" className="collection-item"><span className="badge">13</span>APPOINTMENT REQUESTS</a>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Artistpend;
