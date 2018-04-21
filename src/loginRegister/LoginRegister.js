import React, { Component } from 'react';
import Login from './../login/Login';
import SignUp from './../signUp/SignUp';
import './LoginRegister.scss';

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }
  render() {
    return (
      <div>
        <SignUp />
        <Login />
      </div>
    )
  }
};

export default LoginRegister
