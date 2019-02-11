import React from "react";

class Footer extends React.Component {
  state = {
  };

  render() {
    return (
      <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Flossy</h5>
            <p className="grey-text text-lighten-4">2019 Copyright©</p>
                      </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
              
            </ul>
          </div>
        </div>
      </div>
  
    </footer>
    );
  }
}

export default Footer;
