import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Good from '../Good';

export default class Goods extends Component {
  static propTypes = {
    classify: PropTypes.string,
    goods: PropTypes.array,
    handleAddToCart: PropTypes.func,
  };

  render() {
    const { classify, goods, handleAddToCart } = this.props;

    return (
      <div className="goods">
        <h2>{classify}</h2>
        <div className="goods-list">
          {goods.map((good, index) => (
            <Good
              className="good"
              key={index}
              name={good.name}
              picture={good.picture}
              price={good.price}
              handleAddToCart={handleAddToCart}
            />
          ))}
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}
