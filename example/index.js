import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import PieChart from '../src/pie/Pie';
import Donut from '../src/pie/Donut';
import BarChart from '../src/bar/BarChart';

export default class Examples extends Component {

  render() {

    let data = [
      {name: 'Apples', count: 10, color: '#FD9827'},
      {name: 'Oranges', count: 20, color: '#DA3B21'},
      {name: 'Bananas', count: 5, color: '#3669C9'},
      {name: 'Blueberries', count: 42, color: '#1D9524'},
      {name: 'mangoes ', count: 29, color: '#971497'}
    ];
    return (
        <div>
            <article>
              <h4>Pie Chart</h4>
            </article>
            <PieChart data={data} title="Sample Fruits" legend={true}/>
            <article>
              <h4>Donut</h4>
            </article>
            <Donut data={data} title="Sample Fruits" />
            <article>
              <h4>BarChart</h4>
            </article>
            <BarChart data={[ 30, 10, 5, 8, 15, 10 ]} title="Simple Bar" />
        </div>
    );
  }
}

render(<Examples />, document.getElementById('app'))
