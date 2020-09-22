import React, { Component } from 'react';
import './Goods.css';
import Good from '../Good/Good';
import goodImg from '../../assets/product_image_placeholder.png';

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        {
          name: 'iPhone11',
          picture: goodImg,
          price: 5999,
        },
        {
          name: 'iPhone11',
          picture: goodImg,
          price: 5999,
        },
        {
          name: 'iPhone11',
          picture: goodImg,
          price: 5999,
        },
      ],
    };
  }

  render() {
    return (
      <div className="goods">
        <h2>{this.props.classify}</h2>
        <div className="goods-list">
          {this.state.goods.map((good, index) => (
            <Good
              className="good"
              key={index}
              name={good.name}
              picture={good.picture}
              price={good.price}
            />
          ))}
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}
