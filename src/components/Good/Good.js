import React, { Component } from 'react';
import './Good.css';

export default class Good extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h4>{this.props.name}</h4>
        <img src={this.props.picture} alt="" />
        <div className="price">
          <span>￥{this.props.price}</span>
          <div className="button">
            <button>add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}
