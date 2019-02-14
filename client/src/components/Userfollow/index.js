import React from "react";
import "./style.css";
import followpic1 from "./assets/followpic1.jpg";
import followpic2 from "./assets/followpic2.jpeg";
import followpic3 from "./assets/followpic3.jpg";
import followpic4 from "./assets/followpic4.jpg";

class Userfollow extends React.Component {
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
                <div className="chip">
                <img className="followpic" src={followpic1} alt="followpic" />
                  Jane Smith
                </div>
                <div className="chip">
                <img className="followpic" src={followpic2} alt="followpic" />
                  John Smith
                </div> 
                <div className="chip">
                <img className="followpic" src={followpic3} alt="followpic" />
                  Debbie Smith
                </div> 
                <div className="chip">
                <img className="followpic" src={followpic4} alt="followpic" />
                  Jason Smith
                </div>  
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Userfollow;
