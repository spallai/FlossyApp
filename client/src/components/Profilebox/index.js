import React from "react";
import "./style.css"

class Profilebox extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="row">
      <div className="col s12 m7">
        <div className="card profileBox">
          <div style={{borderRadius:25}} className="card-image">
            <img style={{maxWidth: "85%", margin:"auto", padding:"5px"}}src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"/>
            <span className="card-title">Cat McCatster</span>
          </div>
          <div className="card-content">
            <p>I love to do all sorts of cat-makeup. Cat eyeshadow is my favorite. Tune in weekly for my videos!!!!</p>
          </div>
          <div style={{margin:"auto"}} className="card-action">
          <a class="waves-effect waves-light btn-large text-white bookArtist"><i class="material-icons left"></i>Book Me</a>
          </div>
        </div>
      </div>
    </div>
      );
  }
}

export default Profilebox;
