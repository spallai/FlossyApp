import React from "react";
import "./style.css"
import userpic from "./assets/userpic.jpeg";
import iconset from "./assets/iconset.jpeg";
import Navbar from "../Navbar";


class Profilebox extends React.Component {
  state = {
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col m3">
            <h3 className="header"></h3>
            <div className="card horizontal">
              <div className="card-image">
                <img className="userpic" src={userpic} alt="userpic" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4>Jen Vargas</h4>
                  <p>Email: jvargas99@ggmail.com</p>
                  <p>Phone: 213.878.9000</p>
                  <p>Website: www.makeupsquad.com</p>
                  <img className="iconset" src={iconset} alt="iconset" />
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
      </div>
    );
  }
}

export default Profilebox;
