import React, { Component } from 'react';
import 'whatwg-fetch';
<<<<<<< HEAD
import { Redirect } from 'react-router-dom';
=======
import {Redirect} from 'react-router-dom';
import "./style.css"
>>>>>>> 7062795a7cc7fee63888f2a5f6ef4779adc57f4c

import {
  getFromStorage,
  setInStorage,
} from '../../../app/utils/storage';

class SignOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      redirect: false

    };



    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('../../../App.js');
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

  logout() {

  }

  render() {
    const {
      redirect
    } = this.state;
    if (redirect) {
      console.log('hit redirect');
      return <Redirect to='/' />;
    }
    return (
      <div>
        <p>Account</p>
        <button  onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default SignOut;