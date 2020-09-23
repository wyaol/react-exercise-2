/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './index.css';
import Good from '../Good';

export default class Goods extends Component {
  render() {
    const { classify, goods } = this.props;

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
              handleAddToCart={this.props.handleAddToCart}
            />
          ))}
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}
