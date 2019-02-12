import React from "react";
import "./style.css";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import {Link} from "react-router-dom";

class Landing extends React.Component {
  state = {
  };

  handleLoginModal = () => {
    this.setState({
      login: true,
      signUp: false
    })
  }

  handleSignUpModal = () => {
    this.setState({
      login: false,
      signUp: true
    })
  }

  render() {
    let login = this.state.login ? <SignIn type="login"/> : null;
    let signUp = this.state.signUp ? <SignUp type="signup"/> : null;

    return (
<div className="container center-align " style={{marginTop:"6%"}}>
    <div className="row">
    <div className="col m2" >
    <a onClick = {this.handleLoginModal}class="waves-effect waves-light btn-large text-white  landingBttn"><i class="material-icons supervisor_account left"></i>Sign In</a>
    <a onClick = {this.handleSignUpModal}class="waves-effect waves-light btn-large text-white landingBttn"><i class="material-icons left"></i>Sign Up</a>
    {login}
    {signUp}
   </div>
   </div>
   </div>

    );
  }
}

export default Landing;
