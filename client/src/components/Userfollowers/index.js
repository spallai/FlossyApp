import React from "react";

class Userfollowers extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card profileCards darken-1">
            <div className="card-content white-text">
              <span className="card-title">Your followers</span>
              <br></br>
              <div className="container messageContainer">FOLLOWERS GO HERE<p></p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Userfollowers;
