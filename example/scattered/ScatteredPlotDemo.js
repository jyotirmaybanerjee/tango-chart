import React, { Component, PropTypes } from 'react';

import ScatteredPlot from '../../src/scattered/ScatteredPlot';
import CompTemplate from '../CompTemplate';

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

const styles = {
  width   : 800,
  height  : 400,
  padding : 30,
};

export default class ScatteredPlotDemo extends Component {

  constructor(props) {
    super(props);
    this.state = { data: randomDataSet() };
  }

  randomizeData() {
    this.setState({ data: randomDataSet() });
  }

  render() {
    return (
        <div className="container">
            <h3>ScatteredPlot Charts</h3>
            <p>
                Add <code>{'title="Any title"'}</code> for title.
                <br /><br />
                Data will be in below format -
                <code>{`[
                  [int, int],
                  [int, int],
                  [int, int]
                 ]`}</code>
                 <br /><br />
                 You may pass the style attributes in below format -
                 <code>
                  {`
                      {
                        width   : 500,
                        height  : 300,
                        padding : 30,
                      }
                  `}
                </code>
            </p>
            <div className="container">
                <div className="col-md-12">
                    <CompTemplate label={'ScatteredPlot Chart'} code={'<ScatteredPlot {...this.state} {...styles} title="Scattered Plot" />'}>
                        <div className="controls pull-right">
                          <button className="btn randomize" onClick={() => this.randomizeData()}>
                            Randomize Data
                          </button>
                        </div>
                        <ScatteredPlot {...this.state} {...styles} title="Scattered Plot" />
                    </CompTemplate>
                </div>
            </div>
        </div>

    );
  }
}
