import React from "react";

class Artistfollowers
 extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Your followers</span>
            <p>Follower1, Follower2, Follower3</p>
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

export default Artistfollowers
;
