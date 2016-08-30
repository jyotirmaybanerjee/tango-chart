import React, { Component, PropTypes } from 'react';

import BarChart from '../../src/bar/BarChart';
// import StackedBarChart from '../../src/bar/stacked/StackedBarChart';
import CompTemplate from '../CompTemplate';

export default class BarChartDemo extends Component {

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

    return (
        <div className="container">
            <h3>Bar Charts</h3>
            <p>
                Add <code>{'xaxis={true}'}</code>, <code>{'yaxis={true}'}</code>, <code>{'xgrid={true}'}</code>, or <code>{'ygrid={true}'}</code> for axis and grids.
                <br /><br />
                Bar with individual colors will need data in this format -
                <code>{`[
                  {label: 'Apples', value: 10, color: '#FD9827'},
                  {....},
                  {....}
              ]`}</code>
              {/*<br /><br />
              Stacked Bar will need data in this format -
              <code>{`[
                    { 'data': [ 30, 10, 5, 8, 15, 10 ], 'label': 'series1', 'color': '#FD9827' },
                    { 'data': [ 5, 20, 12, 4, 6, 2 ], 'label': 'series2', 'color': '#DA3B21' },
                    { 'data': [ 5, 8, 2, 4, 6, 2 ], 'label': 'series3', 'color': '#1D9524' }
                 ]`}</code>*/}
            </p>
            <div className="container">
                <div className="col-md-6">
                    <CompTemplate label={'Bar Chart'} code={'<BarChart data={data} color="cornflowerblue"/>'}>
                        <BarChart data={data} color="cornflowerblue"/>
                    </CompTemplate>
                </div>
                <div className="col-md-6">
                    <CompTemplate label={'Bar Chart with multiple colors'} code={'<BarChart data={data}/>'}>
                        <BarChart data={data}/>
                    </CompTemplate>
                </div>
                {/*<div className="col-md-9">
                    <CompTemplate label={'Stacked Bar Chart'} code={'<StackedBarChart data={stackData} />'}>
                        <StackedBarChart data={stackData} />
                    </CompTemplate>
                </div>*/}
            </div>
        </div>
    );
  }
}
