import React from "react";

class Artistbooking extends React.Component {
  state = {
  };

  render() {
    return (
      <div classNameName="container">
      <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate"/>
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="tel" type="tel" className="validate"/>
            <label for="tel">Phone #</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate"/>
            <label for="email">Email</label>
          </div>
        </div>
      </form>
    </div>
    </div>
    );
  }
}

export default Artistbooking;
