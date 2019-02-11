import React from "react";
import Profilebox from "../../Profilebox";
import Artistfollow from "../../Artistfollow";
import Artistfollowers from "../../Artistfollowers";
import Artistpend from "../../Artistpend";
// import Artistbooking from "../../Artistbooking/index.js";
import Userpend from "../../Userpend";
import Userfollowers from "../../Userfollowers";
import Userfollow from "../../Userfollow";
import Upload from "../../Upload";
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
              <Artistfollowers />
              <Artistfollow />
          </div>

          <div className="col m9 border">
              {/* float right */}
              <Newsfeed />

          </div>
            
          
        </div>
      </div>
      

    );
  }
}

export default Newsfeedcontainer;


