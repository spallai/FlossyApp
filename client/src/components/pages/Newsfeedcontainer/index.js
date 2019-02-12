import React from "react";
import Profilebox from "../../Profilebox";
import Artistfollow from "../../Artistfollow";
import Artistfollowers from "../../Artistfollowers";
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
        <div className="row " id="content" style={{ marginTop: "5%", marginBottom: "10%" }}>

          <div className="col-md-3 border" >
            <br></br>
            <Profilebox />
            <br></br>
            <Artistpend />
            <br></br>
            <Userfollow />
            <br></br>
            <Userfollowers />
            <br></br>
            <Userpend />
            <br></br>
            <Artistfollowers />
            <br></br>
            <Artistfollow />
            <br></br>
          </div>
          <br></br>

          <div className="col-md-9 border" >
            <br></br>
            <Newsfeed />
          </div>
          <br></br>

        </div>
      </div>

    );
  }
}

export default Newsfeedcontainer;


