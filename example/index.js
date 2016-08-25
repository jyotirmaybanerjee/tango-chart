import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import PieChart from '../src/pie/Pie';
import Donut from '../src/pie/Donut';

export default class Examples extends Component {

  render() {

    let data = [
      {name: 'Apples', count: 10},
      {name: 'Oranges', count: 20},
      {name: 'Bananas', count: 5},
      {name: 'Blueberries', count: 42},
      {name: 'mangoes ', count: 29}
    ];

    return (
        <div>
            <article>
              <h4>NavBar</h4>
            </article>
            <PieChart data={data} title="Sample Fruits" />
            <article>
              <h4>Donut</h4>
            </article>
            <Donut data={data} title="Sample Fruits" />
        </div>
    );
  }
}

render(<Examples />, document.getElementById('app'))
