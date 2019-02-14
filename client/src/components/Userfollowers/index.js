import React from "react";
import "./style.css";
import followingpic1 from "./assets/followingpic1.jpg";
import followingpic2 from "./assets/followingpic2.jpg";
import followingpic3 from "./assets/followingpic3.png";
import followingpic4 from "./assets/followingpic4.jpg";

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
            <div className="chip">
                <img className="followpic" src={followingpic1} alt="followingpic" />
                  Joe Smith
                </div>
                <div className="chip">
                <img className="followpic" src={followingpic2} alt="followingpic" />
                  Bill Smith
                </div> 
                <div className="chip">
                <img className="followpic" src={followingpic3} alt="followingpic" />
                  David Smith
                </div> 
                <div className="chip">
                <img className="followpic" src={followingpic4} alt="followingpic" />
                  Jennie Smith
                </div>   
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Userfollowers;
