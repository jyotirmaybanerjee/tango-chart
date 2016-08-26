import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import PieChart from '../src/pie/Pie';
import Donut from '../src/pie/Donut';
import BarChart from '../src/bar/BarChart';
import ScatteredPlot from '../src/scattered/ScatteredPlot';

/* For Scattered Plot */

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

export default class Examples extends Component {

  constructor(props) {
    super(props);
    this.state = { data: randomDataSet() };
  }

  randomizeData() {
    this.setState({ data: randomDataSet() });
  }

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
            <article>
              <h4>ScatteredPlot</h4>
            </article>
            <ScatteredPlot {...this.state} {...styles} title="Scattered Plot" />
            <div className="controls">
              <button className="btn randomize" onClick={() => this.randomizeData()}>
                Randomize Data
              </button>
            </div>
        </div>
    );
  }
}

render(<Examples />, document.getElementById('app'))
