import React from "react";

class Navbar extends React.Component {
  state = {
  };

  render() {
    return (
      <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/newsfeed">Newsfeed</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">Upload</a></li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default Navbar;
