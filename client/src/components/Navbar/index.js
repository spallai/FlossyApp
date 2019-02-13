import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./assets/logo.png";




class Navbar extends React.Component {
  state = {
  };

  render() {
    return (
      <nav className="navbar" >
      <a href="#" class="brand-logo" alt="logo"></a>
      <img class="logo" src={logo} ></img>
      <h2><Link to= "/">uFlossy</Link></h2>
      <div className="col m12">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to= "/"> Sign In/Sign up</Link></li>
          <li><Link to="/newsfeed">Newsfeed</Link></li>
          <li><Link to="/browse">Browse</Link></li>
          <li><Link to= "/"> Logout</Link></li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default Navbar;
