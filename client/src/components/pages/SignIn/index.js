import React, { Component } from 'react';
import 'whatwg-fetch';
import { Redirect } from 'react-router-dom';
import "./style.css"

import {
  getFromStorage,
  setInStorage,
} from '../../../app/utils/storage';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      redirect: false

    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('../../../app/utils/storage');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        localStorage.setItem('userData', JSON.stringify(json));
        this.props.history.push('/newsfeed');
      });
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      redirect
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p><br></br><img src="https://cdn.dribbble.com/users/731791/screenshots/3172297/final.gif"></img></div>);
    }

    if (redirect) {
      console.log('hit redirect');
      return <Redirect to='/newsfeed' />;
    }
    if (!token) {
      if (this.props.type === 'login') {
        return (
          <div>
          <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <h3 style={{color:"black"}} >Sign In</h3>
          
            <div className="input-field" >
              <input className="validate" id="email" type="email" value={signInEmail}
                 onChange={this.onTextboxChangeSignInEmail}/><label id="placeholdertext" htmlFor="email">Email:</label></div>

            <div className="input-field" >
              <input className="validate" id="password" type="password" value={signInPassword}
                 onChange={this.onTextboxChangeSignInPassword}/><label id="placeholdertext" htmlFor="password">Password:</label></div>

            <br />
            <a onClick={this.onSignIn} className="waves-effect waves-light btn-large text-white  landingBttn"><i className="material-icons supervisor_account left"></i>Submit</a>
          </div>
          </div>
        )
      }

    }
  }
}

export default SignIn;