import React from "react";
import "./style.css"

class Footer extends React.Component {
  state = {
  };

  render() {
    return (
      <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            uFlossy© 2019
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;