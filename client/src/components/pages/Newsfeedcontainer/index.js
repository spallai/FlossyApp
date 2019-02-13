import React from "react";
import Profilebox from "../../Profilebox";
import Artistpend from "../../Artistpend";
import Userpend from "../../Userpend";
import UserHist from "../../UserHist";
import Userfollowers from "../../Userfollowers";
import Userfollow from "../../Userfollow";
import Newsfeed from "../../Newsfeed"
import "./style.css"

class Newsfeedcontainer extends React.Component {
  state = {
  };

  render() {
    return (

      <div id="wrapper">
        <div className="row "  style={{ marginTop: "5%", marginBottom: "10%" }}>

          <div className="col-lg-5" id="side-nav" >
            <br></br>
            <Profilebox />
              <Artistpend />
              <Userfollow />
              <Userfollowers />
              <Userpend />
              <UserHist />
          </div>
          <br></br>

          <div className="col-lg-7" id="content-wrapper" >
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


