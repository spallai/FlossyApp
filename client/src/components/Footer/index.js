import React from "react";
import "./style.css"

class Footer extends React.Component {
  state = {
  };

  render() {
    return (
      <footer className="page-footer" id="footer">
      
        <div className="row footer">
          <div className="col l6 s12">
            <h5 className="white-text center">Flossy</h5>
            <p className="grey-text text-lighten-4 center">2019 Copyright©</p>
                      </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3 center" href="#!">Contact Us</a></li>
              <li><a className="grey-text text-lighten-3 center" href="#!">FAQ</a></li>
              
            </ul>
          </div>
        </div>
      
  
    </footer>
    );
  }
}

export default Footer;
