import React from "react";
import "./style.css";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

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
    <a class="waves-effect waves-light btn-large text-white  landingBttn"><i class="material-icons supervisor_account left"></i>Login</a>
    <a class="waves-effect waves-light btn-large text-white landingBttn"><i class="material-icons left"></i>Sign up</a>
    {login}
    {signUp}
   </div>
   </div>
   </div>

    );
  }
}

export default Landing;
