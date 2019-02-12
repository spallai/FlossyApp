import React, { Component } from 'react';
import 'whatwg-fetch';
import {Redirect} from 'react-router-dom';

import {
  getFromStorage,
  setInStorage,
} from '../../../app/utils/storage';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmail: '',
      signUpPassword: '',
      redirect: false

    };


    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
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



  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }

  onSignUp() {
    // Grab state
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true
    });

    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpFirstName: '',
            signUpLastName: '',
            signUpEmail: '',
            signUpPassword: '',
            redirect: true
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  

  render() {
    const {
      isLoading,
      token,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpError,
      redirect
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
    if (redirect) {
      console.log('hit redirect');
      return <Redirect to='/newsfeed'/>; 
    }
    if (!token) {
      if (this.props.type === 'login') {
        return (
          <div>
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
            <p>Sign Up</p>
            <input
              type="text"
              placeholder="First name"
              value={signUpFirstName}
              onChange={this.onTextboxChangeSignUpFirstName}
            /><br />
            <input
              type="text"
              placeholder="Last name"
              value={signUpLastName}
              onChange={this.onTextboxChangeSignUpLastName}
            /><br />
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
            /><br />
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}
            /><br />
            <a onClick={this.onSignUp}class="waves-effect waves-light btn-large text-white  landingBttn"><i class="material-icons supervisor_account left"></i>Submit</a>
          </div>
      );
      }
    }
  }
}

export default SignUp;