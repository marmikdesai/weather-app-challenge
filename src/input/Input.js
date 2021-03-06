import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <div className="inputWrap">
          <input  id={this.props.id}
                  type={this.props.type}
                  name={this.props.name}
                  value={this.props.value}
                  placeholder={this.props.placeholder}
                  required={this.props.required}
                  onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
};

export default Input;
