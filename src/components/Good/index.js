/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './index.css';

export default class Good extends Component {
  render() {
    const { className, picture, price, name, handleAddToCart } = this.props;

    return (
      <div className={className}>
        <h4>{name}</h4>
        <img src={picture} alt="" />
        <div className="price">
          <span>{price}</span>
          <div className="button">
            <button onClick={handleAddToCart}>add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}
