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
        <img className="newsfeedimg" src={feed1} alt="feedone" />;
        <img className="newsfeedimg" src={feed2} alt="feedtwo" />;
        <img className="newsfeedimg" src={feed3} alt="feedthree" />;
        </div>
      </div>
    </div>
 

    )
};
};

export default Newsfeed;