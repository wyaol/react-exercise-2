import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class Good extends Component {
  static propTypes = {
    className: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    handleAddToCart: PropTypes.func,
  };

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
