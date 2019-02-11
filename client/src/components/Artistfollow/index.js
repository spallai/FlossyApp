import React from "react";

class Artistfollow
 extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="row">
      <div className="col s12 m6">
        <div className="card profileCards darken-1">
          <div className="card-content white-text">
            <span className="card-title">People you follow</span>
            <br></br>
            <div className="container messageContainer">PEOPLE YOU FOLLOW GO HERE<p></p></div> 
          </div>
        </div>
      </div>
    </div> 
              
    );
  }
}

export default Artistfollow
;
