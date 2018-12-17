import React, { Component } from 'react'

export class Button extends Component {
  render() {
      const {type = 'button', children, className = '', onClick} = this.props;
    return (
      <div>
        <button
            type = {type}
            className = {className}
            onClick={onClick}
        >
            {children}
        </button>
      </div>
    )
  }
}

export default Button
