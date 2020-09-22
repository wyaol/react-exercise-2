import React, { Component } from 'react';
import './Store.css';
import Goods from '../Goods/Goods';
import axios from 'axios';
import goodImg from '../../assets/product_image_placeholder.png';

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifies: [],
      count: 0,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/products').then((response) => {
      const goods = response.data;
      let res = {};
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
      let result = [];
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

  handleAddToCart(that) {
    // const that = this;
    // console.log(that.state);
    that.setState({
      count: that.state.count + 1,
    });
  }

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
              count={this}
            />
          ))}
        </main>
      </div>
    );
  }
}
