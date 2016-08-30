import React, { Component, PropTypes } from 'react';

import PieChart from '../../src/pie/Pie';
import Donut from '../../src/pie/Donut';
import CompTemplate from '../CompTemplate';

export default class PieChartDemo extends Component {

  render() {

    let data = [
      {label: 'Apples', value: 10, color: '#FD9827'},
      {label: 'Oranges', value: 20, color: '#DA3B21'},
      {label: 'Bananas', value: 5, color: '#3669C9'},
      {label: 'Blueberries', value: 42, color: '#1D9524'},
      {label: 'mangoes ', value: 29, color: '#971497'}
    ];
    return (
        <div className="container">
            <h3>Pie Charts</h3>
            <p>
                Add <code>{'legend={true}'}</code>, <code>{'title="Any title"'}</code> for legend and title.<br />
                Data will be in this format -
                <code>{`[
                  {label: 'Apples', value: 10, color: '#FD9827'},
                  {....},
                  {....}
                 ]`}</code>
            </p>
            <div className="container">
                <div className="col-md-6">
                    <CompTemplate label={'Pie Chart'} code={'<PieChart data={data} title="Sample Fruits"/>'}>
                        <PieChart data={data} title="Sample Fruits"/>
                    </CompTemplate>
                </div>
                <div className="col-md-6">
                    <CompTemplate label={'Pie Chart with legend'} code={'<PieChart data={data} title="Sample Fruits" legend={true}/>'}>
                        <PieChart data={data} title="Sample Fruits" legend={true}/>
                    </CompTemplate>
                </div>
            </div>
            <div className="container">
                <div className="col-md-6">
                    <CompTemplate label={'Donut Chart'} code={'<Donut data={data} title="Sample Fruits" />'}>
                        <Donut data={data} title="Sample Fruits" />
                    </CompTemplate>
                </div>
                <div className="col-md-6">
                    <CompTemplate label={'Donut Chart with legend'} code={'<Donut data={data} title="Sample Fruits" legend={true} />'}>
                        <Donut data={data} title="Sample Fruits" legend={true} />
                    </CompTemplate>
                </div>
            </div>


        </div>

    );
  }
}
