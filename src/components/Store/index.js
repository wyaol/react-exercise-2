import React, { Component } from 'react';
import './index.css';
import Goods from '../Goods';
import axios from 'axios';
import goodImg from '../../assets/product_image_placeholder.png';

export default class Store extends Component {
  state = {
    classifies: [],
    count: 0,
  };

  componentDidMount() {
    axios.get('http://localhost:3000/products').then((response) => {
      const goods = response.data;
      const result = {};
      goods.forEach((good) => {
        good.picture = goodImg;
        if (good.category in result) result[good.category].push(good);
        else result[good.category] = [good];
      });

      this.setState({
        classifies: Object.entries(result),
      });
    });
  }

  handleAddToCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="body">
        <header>
          <span>Store</span>
          <div className="car">
            <i className="fa fa-shopping-cart" />
            <div className="divright">{this.state.count}</div>
          </div>
        </header>
        <main>
          {this.state.classifies.map((classify, index) => (
            <Goods
              key={index}
              classify={classify[0]}
              goods={classify[1]}
              handleAddToCart={this.handleAddToCart}
            />
          ))}
        </main>
      </div>
    );
  }
}
