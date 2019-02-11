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
            <br></br>
            <div className="container messageContainer"> <p>Message:</p></div> 
            <br></br>
            <div className="container messageContainer"> <p>Appointments:</p></div> 
          </div>
        </div>
      </div>
    </div>  
       
    );
  }
}

export default Artistpend;
