import React from "react";
import "./style.css";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Navbar from "../../Navbar";

// import { Link } from "react-router-dom";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

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
    let login = this.state.login ? <SignIn {...this.props} type="login" /> : null;
    let signUp = this.state.signUp ? <SignUp {...this.props} type="signup" /> : null;

    return (
      <div>
        <Navbar handleLoginModal={this.handleLoginModal} handleSignUpModal={this.handleSignUpModal} {...this.props} />
        <div className="container center-align " style={{ marginTop: "6%" }}>
          <div className="row">
            <div className="col m2" >
              <a onClick={this.handleLoginModal} className="waves-effect waves-light btn-large text-white  landingBttn"><i className="material-icons supervisor_account left"></i>Login</a>
              <a onClick={this.handleSignUpModal} className="waves-effect waves-light btn-large text-white landingBttn"><i className="material-icons left"></i>Sign up</a>
              {login}
              {signUp}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Landing;
