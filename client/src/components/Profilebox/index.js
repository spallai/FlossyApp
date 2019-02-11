import React from "react";

class Profilebox extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img style={{maxWidth: "85%"}}src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"/>
            <span className="card-title">Cat McCatster</span>
          </div>
          <div className="card-content">
            <p>I love to do all sorts of cat-makeup. Cat eyeshadow is my favorite. Tune in weekly for my videos!!!!</p>
          </div>
          <div className="card-action">
            <a href="#">Book me!!</a>
          </div>
        </div>
      </div>
    </div>
      );
  }
}

export default Profilebox;
