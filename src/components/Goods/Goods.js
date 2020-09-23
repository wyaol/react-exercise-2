/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './Goods.css';
import Good from '../Good/Good';

export default class Goods extends Component {
  render() {
    return (
      <div className="goods">
        <h2>{this.props.classify}</h2>
        <div className="goods-list">
          {this.props.goods.map((good, index) => (
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
