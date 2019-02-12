import React from "react";
import "./style.css";
import Login from "../Login";

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
    let login = this.state.login ? <Login type="login"/> : null;
    let signUp = this.state.signUp ? <Login type="signup"/> : null;

    return (
<div className="container center-align " style={{marginTop:"6%"}}>
    <div className="row">
    <div className="col m2" >
    <a onClick={this.handleLoginModal}className="waves-effect waves-light btn-large text-white  landingBttn"><i className="material-icons supervisor_account left"></i>Login</a>
    <a onClick={this.handleSignUpModal}className="waves-effect waves-light btn-large text-white landingBttn"><i className="material-icons left"></i>Sign up</a>
    {login}
    {signUp}
   </div>
   </div>
   </div>

    );
  }
}

export default Landing;
