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
      const res = {};
      for (const goodIndex in goods) {
        if (goods[goodIndex].category in res) {
          res[goods[goodIndex].category].push({
            name: goods[goodIndex].name,
            price: goods[goodIndex].price,
            picture: goodImg,
          });
        } else {
          res[goods[goodIndex].category] = [
            {
              name: goods[goodIndex].name,
              price: goods[goodIndex].price,
              picture: goodImg,
            },
          ];
        }
      }

      const temp = Object.keys(res);
      const result = [];
      temp.forEach((element) => {
        result.push({
          category: element,
          goods: res[element],
        });
      });

      this.setState({
        classifies: result,
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
              classify={classify.category}
              goods={classify.goods}
              handleAddToCart={this.handleAddToCart}
            />
          ))}
        </main>
      </div>
    );
  }
}