import React from "react";
import "./style.css"
import userpic from "./assets/userpic.jpeg";


class Profilebox extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="row">
        <div className="col m3">
          <h2 className="header">User Profile</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img className="userpic img-fluid img-thumbnail text-center" src={userpic} alt="userpic" />
            </div>
            <div className="card-stacked text-center">
              <div className="card-content text-center">
                <p>Email: user@gmail.com</p>
                <p>Phone: 213.878.9000</p>
                <p>Website: www.makeupsquad.com</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profilebox;
