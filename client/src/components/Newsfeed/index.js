import React from "react";
import "./style.css"
import feed1 from "./assets/feed1.jpeg";
import feed2 from "./assets/feed2.jpeg";
import feed3 from "./assets/feed3.jpeg";



class Newsfeed extends React.Component {

  render() {
    return (
      <div className="container " >
        <div className="row ">
          <div className="col m9 text-center">
            <img className="newsfeedimg img-fluid img-thumbnail" src={feed1} alt="feedone" />
            <br></br>
            <br></br>
            <img className="newsfeedimg img-fluid img-thumbnail" src={feed2} alt="feedtwo" />
            <br></br>
            <br></br>
            <img className="newsfeedimg img-fluid img-thumbnail" src={feed3} alt="feedthree" />
            <br></br>
            <br></br>
          </div>

        </div>
      </div>


    )
  };
};

export default Newsfeed;