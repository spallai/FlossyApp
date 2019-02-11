import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  state = {
  };

  render() {
    return (
      <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to= "/login"> Sign In/Sign up</Link></li>
          <li><Link to="/newsfeed">Newsfeed</Link></li>
          <li><Link to="/browse">Browse</Link></li>
          <li><Link to= "/upload"> Upload</Link></li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default Navbar;
