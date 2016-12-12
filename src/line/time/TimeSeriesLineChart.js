import React, {PropTypes, Component} from 'react';
import d3 from 'd3';
import Grid from './Grid';
import Axis from './Axis';
import Dots from './Dots';
import ToolTip from './ToolTip';
import Chart from '../../Chart';

export default class LineChart extends Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    chartId: PropTypes.string
  }

  static defaultProps = {
    width: 800,
    height: 300,
    chartId: 'ln_chart_1'
  }

  state = {
    tooltip: {display: false, data: {key: '', value: ''}},
    width: 0
  }

  showToolTip = (e) => {
    e.target.setAttribute('fill', '#FFFFFF');

    this.setState({
      tooltip: {
        display: true,
        data: {
          key: e.target.getAttribute('data-key'),
          value: e.target.getAttribute('data-value')
        },
        pos: {
          x: e.target.getAttribute('cx'),
          y: e.target.getAttribute('cy')
        }
      }
    });
  }

  hideToolTip = (e) => {
    e.target.setAttribute('fill', '#7dc7f4');
    this.setState({tooltip: {display: false, data: {key: '', value: ''}}});
  }

  render() {
    const data = this.props.data;
    const margin = {top: 5, right: 50, bottom: 20, left: 50};
    const w = this.props.width - (margin.left + margin.right);
    const h = this.props.height - (margin.top + margin.bottom);

    const parseDate = d3.time.format('%m-%d-%Y').parse;
    data.forEach((d) => {
      d.date = parseDate(d.x);
    });

    const x = d3.time.scale()
      .domain(d3.extent(data, (d) => {
        return d.date;
      }))
      .rangeRound([0, w]);

    const y = d3.scale.linear()
      .domain([0, d3.max(data, (d) => {
        return d.y + 100;
      })])
      .range([h, 0]);

    const yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(5);

    const xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom')
      .tickValues(data.map((d, i) => {
        if (i > 0)
          return d.date;
      }).splice(1))
      .ticks(4);

    const xGrid = d3.svg.axis()
      .scale(x)
      .orient('bottom')
      .ticks(5)
      .tickSize(-h, 0, 0)
      .tickFormat('');

    const yGrid = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(5)
      .tickSize(-w, 0, 0)
      .tickFormat('');

    const interpolations = [
      'linear',
      'step-before',
      'step-after',
      'basis',
      'basis-closed',
      'cardinal',
      'cardinal-closed'];

    const line = d3.svg.line()
      .x((d) => {
        return x(d.date);
      })
      .y((d) => {
        return y(d.y);
      }).interpolate(interpolations[5]);

    const transform = 'translate(' + margin.left + ',' + margin.top + ')';

    return (
      <Chart
        id={this.props.chartId}
        width={this.props.width}
        height={this.props.height}
      >
        <g transform={transform}>
          <Grid h={h} grid={yGrid} gridType="y" />
          <Axis h={h} axis={yAxis} axisType="y" />
          <Axis h={h} axis={xAxis} axisType="x" />
          <path className="line shadow" d={line(data)} strokeLinecap="round" />
          <Dots
            data={data}
            x={x}
            y={y}
            showToolTip={this.showToolTip}
            hideToolTip={this.hideToolTip}
          />
          <ToolTip tooltip={this.state.tooltip} />
        </g>
      </Chart>
    );
  }
}
