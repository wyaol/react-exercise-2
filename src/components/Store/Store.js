import React, { Component } from 'react';
import './Store.css';
import Goods from '../Goods/Goods';

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifies: [
        {
          name: 'iPhone',
        },
        {
          name: 'HUAWEI',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <header>
          <span>Span</span>
          <img alt="" />
        </header>
        <main>
          {this.state.classifies.map((classify, index) => (
            <Goods key={index} classify={classify.name} />
          ))}
        </main>
      </div>
    );
  }
}
