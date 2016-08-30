import React, { Component, PropTypes } from 'react';

import TimeSeriesLineChart from '../../src/line/time/TimeSeriesLineChart';
import LineChart from '../../src/line/full/LineChart';
import CompTemplate from '../CompTemplate';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

export default class LineChartDemo extends Component {

  render() {

    let multipleLineData = [
      { 'data': [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ], 'label': 'series1', 'color': '#FD9827' },
      { 'data': [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ], 'label': 'series2', 'color': '#DA3B21' },
      { 'data': [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ], 'label': 'series3', 'color': '#1D9524' },
      { 'data': [ { x: 0, y: 5 }, { x: 1, y: 8 }, { x: 2, y: 9 }, { x: 3, y: 4 }, { x: 4, y: 8 }, { x: 5, y: 2 }, { x: 6, y: 12 } ], 'label': 'series4', 'color': '#971497' }
    ];

    let timeSeriesLineData = [
        {x:'02-11-2016', y:180},
        {x:'02-12-2016', y:250},
        {x:'02-13-2016', y:150},
        {x:'02-14-2016', y:496},
        {x:'02-15-2016', y:140},
        {x:'02-16-2016', y:380},
        {x:'02-17-2016', y:100},
        {x:'02-18-2016', y:150}
    ];

    let singleLineData = [
      { 'data': [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ], 'label': 'series1', 'color': '#FD9827' }
    ];

    return (
        <div className="container">
            <h3>Line Charts</h3>
            <p>
                Add <code>{'xaxis={true}'}</code>, <code>{'yaxis={true}'}</code>, <code>{'xgrid={true}'}</code>, or <code>{'ygrid={true}'}</code> for axis and grids.
                <br /><br />
                Data for Line chart -
                <code>{`
                    [
                      { 'data': [ { x: 0, y: 20 }, { ... }, { .... }], 'label': 'series1', 'color': '#FD9827' },
                      {....},
                      {....}
                    ]
                 `}</code>
                 <br /><br />
                 Data for Time series Line chart -
                 <code>
                  {`
                      [
                          {x:'02-11-2016', y:180},
                          {x:'02-12-2016', y:250},
                          {....}
                      ]
                  `}
                </code>
            </p>
            <div className="container">
                <div className="col-md-12">
                    <CompTemplate label={'Single LineChart'} code={'<LineChart data={singleLineData} />'}>
                        <LineChart data={singleLineData} />
                    </CompTemplate>
                </div>
                <div className="col-md-12">
                    <CompTemplate label={'Multiple LineChart'} code={'<LineChart data={multipleLineData} />'}>
                        <LineChart data={multipleLineData} />
                    </CompTemplate>
                </div>
                <div className="col-md-12">
                    <CompTemplate label={'Multiple LineChart with Axis'} code={'<LineChart data={multipleLineData} axisX={true} axisY={true}/>'}>
                        <LineChart data={multipleLineData} axisX={true} axisY={true}/>
                    </CompTemplate>
                </div>
                <div className="col-md-12">
                    <CompTemplate label={'Multiple LineChart with Grid'} code={'<LineChart data={multipleLineData} gridX={true} gridY={true}/>'}>
                        <LineChart data={multipleLineData} gridX={true} gridY={true}/>
                    </CompTemplate>
                </div>
                <div className="col-md-12">
                    <CompTemplate label={'Multiple LineChart with Axis and Grid'} code={'<LineChart data={multipleLineData} axisX={true} axisY={true} gridX={true} gridY={true}/>'}>
                        <LineChart data={multipleLineData} axisX={true} axisY={true} gridX={true} gridY={true}/>
                    </CompTemplate>
                </div>
                <div className="col-md-12">
                    <CompTemplate label={'Time Series Line Chart'} code={'<TimeSeriesLineChart data={timeSeriesLineData} />'}>
                        <TimeSeriesLineChart data={timeSeriesLineData} />
                    </CompTemplate>
                </div>
            </div>
        </div>
    );
  }
}
