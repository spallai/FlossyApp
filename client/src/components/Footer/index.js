import React from "react";

class Footer extends React.Component {
  state = {
  };

  render() {
    return (
      <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Flossy</h5>
            <p class="grey-text text-lighten-4">2019 Copyright©</p>
                      </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">FAQ</a></li>
              
            </ul>
          </div>
        </div>
      </div>
  
    </footer>
    );
  }
}

export default Footer;
