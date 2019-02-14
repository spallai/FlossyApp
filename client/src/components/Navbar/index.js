import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./assets/logo.png";
import axios from 'axios';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleLogOut = () => {
    console.log(this.props)
    console.log('hit');
    localStorage.clear();
    axios.get("/logout").then(() => {
      console.log(this)
      this.props.logout();
    })
  }

  render() {
    if (JSON.parse(localStorage.getItem("userData"))) {
      return (
        <nav className="navbar" >
        <a href="#" class="brand-logo" alt="logo"></a>
        <img class="logo" src={logo} ></img>
        <h2><Link to= "/">uFlossy</Link></h2>
        <div className="col m12">
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/newsfeed">Newsfeed</Link></li>
            <li><Link to="/post">Post</Link></li>
           <button className="signOut" onClick={this.handleLogOut}>
             Logout
           </button>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar" >
          <a href="#" className="brand-logo" alt="logo"></a>
          <img className="logo" src={logo} ></img>
          <h2><Link to="/">uFlossy</Link></h2>
          {/* <div className="col m12">
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li onClick= {this.props.handleLoginModal}>Sign In</li>
            <li onClick= {this.props.handleSignUpModal}>Sign In</li>
          </ul>
        </div> */}
        </nav>
      );
    }
  }
}

export default Navbar;
