import React from "react";
import "./style.css"

class UserHist extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card profileCards darken-1">
            <div className="card-content white-text">
              <span className="card-title">uFlossy History</span>
              <div class="collection">
                <a href="#!" class="collection-item"><span class=" badge">223</span>PHOTOS</a>
                <a href="#!" class="collection-item"><span class="new badge">113</span>VIDEOS</a>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default UserHist;