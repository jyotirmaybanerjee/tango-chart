import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import LineChartDemo from './line/LineChartDemo';
import PieChartDemo from './pie/PieChartDemo';
import BarChartDemo from './bar/BarChartDemo';
import ScatteredPlotDemo from './scattered/ScatteredPlotDemo';

export default class Examples extends Component {

  render() {
    return (
        <div>
            <div className="alert alert-success" role="alert">More charts are coming soon.</div>
            <PieChartDemo />
            <BarChartDemo />
            <ScatteredPlotDemo />
            <LineChartDemo />
        </div>
    );
  }
}

render(<Examples />, document.getElementById('app'))
