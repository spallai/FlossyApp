import React from "react";
import Profilebox from "../../Profilebox";
import Artistpend from "../../Artistpend";
// import Artistbooking from "../../Artistbooking/index.js";
import Userpend from "../../Userpend";
import Userfollowers from "../../Userfollowers";
import Userfollow from "../../Userfollow";
import Newsfeed from "../../Newsfeed"
import "./style.css"

class Newsfeedcontainer extends React.Component {
  state = {
  };

  render() {
    return (

      <div >
        <div className="row" style={{marginTop:"5%", marginBottom:"10%"}}>
          
          <div className="col m3 border">
            <Profilebox />
              <Artistpend />
              <Userfollow />
              <Userfollowers />
              <Userpend />
          </div>

          <div className="col m9 border">
             
              <Newsfeed />

          </div>
            
          
        </div>
      </div>
      

    );
  }
}

export default Newsfeedcontainer;


