import React from "react";

class Artistpend extends React.Component {
  state = {
  };

  render() {
    return (
      <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Your pending appointments and messages</span>
            <p>Message<br></br>Appointment</p>
          </div>
          {/* <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div> */}
        </div>
      </div>
    </div>      
    );
  }
}

export default Artistpend;