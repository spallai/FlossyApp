import React from "react";

class Profilebox extends React.Component {
  state = {
  };

  render() {
    return (
      <div class="row">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img style={{maxWidth: "85%"}}src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"/>
            <span class="card-title">Cat McCatster</span>
          </div>
          <div class="card-content">
            <p>I love to do all sorts of cat-makeup. Cat eyeshadow is my favorite. Tune in weekly for my videos!!!!</p>
          </div>
          <div class="card-action">
            <a href="#">Book me!!</a>
          </div>
        </div>
      </div>
    </div>
      );
  }
}

export default Profilebox;
