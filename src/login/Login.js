import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './../input/Input';
import Button from './../button/Button';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      validUser: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    for (let key in localStorage) {
      if(key.indexOf("user-") >= 0) {
        const data = JSON.parse(localStorage.getItem(key));

        (
          data.name.value === event.target.querySelector("input#userName").value &&
          data.password.value === event.target.querySelector("input#userPassword").value
        ) ? (
            this.setState({
              validUser: true,
              user: data
           }),
           event.target.reset()
        ) : null
      }
    }
  }

  render() {
    const { validUser } = this.state;

    return (
      <div className="Login">
        <h1>Login</h1>
        <form action="#" method="get" onSubmit={this.handleSubmit} autoComplete="off">
          <div className="inputWrap">
            <Input  id={"userName"}
                    type={"text"}
                    name={"name"}
                    placeholder={"name"}
                    required={true}
            />
            <Input  id={"userPassword"}
                    type={"password"}
                    name={"password"}
                    placeholder={"password"}
                    required={true}
            />
            <Button id={Math.random().toString(36).substring(7)}
                    type={"submit"}
                    name={"Login"}
                    value={"Login"}
                    redirectPage={"/topic"}
                    onChange={this.handleChange}
            />
          </div>
        </form>
        {validUser && (<Redirect to={{
          pathname: "/user",
          state: { from: this.state }
        }}/>)}
      </div>
    );
  }
}

export default Login;
