import React, { Component } from 'react';
import './Goods.css';
import Good from '../Good/Good';

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        {
          name: 'iPhone11',
          picture: 'xx',
          price: 5999,
        },
        {
          name: 'iPhone11',
          picture: 'xx',
          price: 5999,
        },
        {
          name: 'iPhone11',
          picture: 'xx',
          price: 5999,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <span>{this.props.classify}</span>
        {this.state.goods.map((good, index) => (
          <Good
            key={index}
            name={good.name}
            picture={good.picture}
            price={good.price}
          />
        ))}
      </div>
    );
  }
}
