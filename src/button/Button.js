import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <button id={this.props.id}
                type={this.props.type}
                name={this.props.name}
                to={this.props.redirectPage}
        >{this.props.value}</button>
      </div>
    );
  }
}

export default Button;
