import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './../input/Input';
import Button from './../button/Button';
import './SignUp.scss';

class SignUp extends Component {
  constructor(props) {
    super();
    this.state = {
      validUser: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      validUser: true
    })
    localStorage.setItem("user-"+event.target.querySelector("button").id, JSON.stringify(this.state));
    event.target.reset();
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: {
        id: [event.target.id].toString(),
        value: [event.target.value].toString()
      }
    })
  }

  render() {
    const { validUser } = this.state;

    return (
      <div className="SignUp">
        <h1>SignUp</h1>
        <form action="#" method="get" onSubmit={this.handleSubmit}>
          <div className="inputWrap">
            <Input  id={"name"}
                    type={"text"}
                    name={"name"}
                    placeholder={"name"}
                    required={true}
                    onChange={this.handleChange}
            />
            <Input  id={"password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"password"}
                    required={true}
                    onChange={this.handleChange}
            />
            <Input  id={"email"}
                    type={"email"}
                    name={"email"}
                    placeholder={"email"}
                    required={true}
                    onChange={this.handleChange}
            />
            <Input  id={"file"}
                    type={"file"}
                    name={"file"}
                    required={true}
                    onChange={this.handleChange}
            />
            <Input  id={"city"}
                    type={"city"}
                    name={"city"}
                    placeholder={"city"}
                    required={true}
                    onChange={this.handleChange}
            />
            <Button id={Math.random().toString(36).substring(7)}
                    type={"submit"}
                    name={"register"}
                    value={"register"}
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

export default SignUp;
