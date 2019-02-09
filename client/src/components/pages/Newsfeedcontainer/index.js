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

class Newsfeedcontainer extends React.Component {
  state = {
  };

  render() {
    return (

      <div className="container">
        <div className="row">
          
          <div className="col m4">
            <Profilebox />
            <span><Upload />
              </span >
              <Artistpend />
              <Userfollow />
              <Userfollowers />
              <Userpend />
              <Artistfollowers />
              <Artistfollow />
          </div>

          <div className="col m8">
              {/* float right */}

          </div>
            
          
        </div>
      </div>
      

    );
  }
}

export default Newsfeedcontainer;
