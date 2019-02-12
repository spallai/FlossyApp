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
          <h3 className="header text-center">User Profile</h3>
          <div className="card horizontal">
            <div className="card-image">
              <img className="userpic" src={userpic} alt="userpic"/>
      </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>Email: user@gmail.com</p>
                  <p>Phone: 213.878.9000</p>
                  <p>Website: www.makeupsquad.com</p>
                </div>
              <div className="chip chip-hash">
                #hair
              </div>
              <div className="chip chip-hash">
                #makeup
              </div>
              <div className="chip chip-hash">
                #nails
              </div>
              <div className="chip chip-hash">
                #glamsquad
              </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Profilebox;
