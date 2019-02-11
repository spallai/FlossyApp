import React from "react";
import "./style.css";

class Landing extends React.Component {
  state = {
  };


  render() {
    return (
<div className="container center-align " style={{marginTop:"6%"}}>
    <div className="row">
    <div className="col m2" >
    <a class="waves-effect waves-light btn-large text-white  landingBttn"><i class="material-icons supervisor_account left"></i>Login</a>
    <a class="waves-effect waves-light btn-large text-white landingBttn"><i class="material-icons left"></i>Sign up</a>
   
   </div>
   </div>
   </div>

    );
  }
}

export default Landing;
