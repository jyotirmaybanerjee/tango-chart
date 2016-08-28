import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import PieChart from '../src/pie/Pie';
import Donut from '../src/pie/Donut';
import BarChart from '../src/bar/BarChart';
import StackedBarChart from '../src/bar/stacked/StackedBarChart';
import ScatteredPlot from '../src/scattered/ScatteredPlot';
import LineChart from '../src/line/LineChart';

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
      {label: 'Apples', value: 10, color: '#FD9827'},
      {label: 'Oranges', value: 20, color: '#DA3B21'},
      {label: 'Bananas', value: 5, color: '#3669C9'},
      {label: 'Blueberries', value: 42, color: '#1D9524'},
      {label: 'mangoes ', value: 29, color: '#971497'}
    ];

    let stackData = [
      { 'data': [ 30, 10, 5, 8, 15, 10 ], 'label': 'series1', 'color': '#FD9827' },
      { 'data': [ 5, 20, 12, 4, 6, 2 ], 'label': 'series2', 'color': '#DA3B21' },
      { 'data': [ 5, 8, 2, 4, 6, 2 ], 'label': 'series3', 'color': '#1D9524' }
    ];

    let lineData = [
      { 'data': [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ], 'label': 'series1', 'color': '#FD9827' },
      { 'data': [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ], 'label': 'series2', 'color': '#DA3B21' },
      { 'data': [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ], 'label': 'series3', 'color': '#1D9524' },
      { 'data': [ { x: 0, y: 5 }, { x: 1, y: 8 }, { x: 2, y: 9 }, { x: 3, y: 4 }, { x: 4, y: 8 }, { x: 5, y: 2 }, { x: 6, y: 12 } ], 'label': 'series4', 'color': '#971497' }
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
            <BarChart data={data} color="cornflowerblue"/>
            <article>
              <h4>Multicolor BarChart</h4>
            </article>
            <BarChart data={data}/>
            <article>
              <h4>StackedBarChart</h4>
            </article>
            <StackedBarChart data={stackData} />
            <article>
              <h4>ScatteredPlot</h4>
            </article>
            <ScatteredPlot {...this.state} {...styles} title="Scattered Plot" />
            <div className="controls">
              <button className="btn randomize" onClick={() => this.randomizeData()}>
                Randomize Data
              </button>
              <article>
                <h4>LineChart</h4>
              </article>
              <LineChart data={lineData} />
            </div>
        </div>
    );
  }
}

render(<Examples />, document.getElementById('app'))
