import React, { Component } from 'react';
import './Good.css';

export default class Good extends Component {
  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <img src={this.props.picture} alt="" />
        <div>
          <span>{this.props.price}</span>
          <button>add to cart</button>
        </div>
      </div>
    );
  }
}
