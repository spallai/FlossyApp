import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./assets/logo.png";
import axios from 'axios';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  handleLogOut = () => {
    console.log(this.props)
    console.log('hit');
    localStorage.clear();
    axios.get("/logout").then(()=>{
      console.log(this)
      this.props.logout();
    })
  }

  render() {
<<<<<<< HEAD
    if (JSON.parse(localStorage.getItem("userData"))){
      return (
        <nav className="navbar" >
        <a href="#" class="brand-logo" alt="logo"></a>
        <img class="logo" src={logo} ></img>
        <h2><Link to= "/">uFlossy</Link></h2>
        <div className="col m12">
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/newsfeed">Newsfeed</Link></li>
            <li><Link to="/browse">Browse</Link></li>
           <button onClick={this.handleLogOut}>
             log out
           </button>
          </ul>
        </div>
      </nav>
      );
    } else {
      return (
        <nav className="navbar" >
        <a href="#" class="brand-logo" alt="logo"></a>
        <img class="logo" src={logo} ></img>
        <h2><Link to= "/">uFlossy</Link></h2>
        {/* <div className="col m12">
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li onClick= {this.props.handleLoginModal}>Sign In</li>
            <li onClick= {this.props.handleSignUpModal}>Sign In</li>
          </ul>
        </div> */}
      </nav>
      );
    }
   
=======
    return (
      <nav className="navbar" >
      <a href="#" className="brand-logo" alt="logo"></a>
      <img className="logo" alt="logo" src={logo} ></img>
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
>>>>>>> fec0cefcad660ff988b91479dad4373d52550360
  }
}

export default Navbar;
