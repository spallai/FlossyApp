import React from "react";
import "./style.css";
import Navbar from "../Navbar";

class Post extends React.Component {
  state = {
  };

  logout = () => {
    console.log(this.props)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Navbar logout = {this.logout} />
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="user" type="text" className="validate"/>
          <label for="user">USER</label>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s12">
          <input id="message" type="text" className="validate"/>
          <label for="message">MESSAGE</label>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s12">
          <input id="url" type="text" className="validate"/>
          <label for="url">URL/LINK</label>
          <a onClick={this.onPost} className="waves-effect waves-light btn-large text-white  landingBttn"><i className="material-icons supervisor_account left"></i>POST</a>
        </div>
        </div>
    </form>
  </div>
  </div>
    );
  }
}

export default Post;