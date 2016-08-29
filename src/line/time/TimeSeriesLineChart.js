import React, {PropTypes, Component} from 'react';
import d3 from 'd3';
import Grid from './Grid';
import Axis from './Axis';
import Dots from './Dots';
import ToolTip from './ToolTip';
import Chart from '../../Chart';

export default class LineChart extends Component {

  static propTypes = {
    width:React.PropTypes.number,
    height:React.PropTypes.number,
    chartId:React.PropTypes.string
  }

  static defaultProps = {
    width: 800,
    height: 300,
    chartId: 'ln_chart_1'
  }

  constructor(props) {
    super(props);
    this.state = {
      tooltip: { display:false,data:{key:'',value:''}},
      width: 0
    }
  }

  showToolTip = (e) => {
    e.target.setAttribute('fill', '#FFFFFF');

    this.setState({tooltip:{
      display: true,
      data: {
        key: e.target.getAttribute('data-key'),
        value: e.target.getAttribute('data-value')
      },
      pos: {
        x: e.target.getAttribute('cx'),
        y: e.target.getAttribute('cy')
      }
    }});
  }

  hideToolTip = (e) => {
    e.target.setAttribute('fill', '#7dc7f4');
    this.setState({tooltip:{ display:false,data:{key:'',value:''}}});
  }

  render() {
    let data = this.props.data;
    let margin = {top: 5, right: 50, bottom: 20, left: 50};
    let w = this.props.width - (margin.left + margin.right);
    let h = this.props.height - (margin.top + margin.bottom);

    let parseDate = d3.time.format('%m-%d-%Y').parse;
    data.forEach(function (d) {
    //   d.x = parseDate(d.x);
      d.date = parseDate(d.x);
    });

    let x = d3.time.scale()
      .domain(d3.extent(data, function (d) {
        return d.date;
      }))
      .rangeRound([0, w]);

    let y = d3.scale.linear()
      .domain([0, d3.max(data,function(d){
        return d.y+100;
      })])
      .range([h, 0]);

    let yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(5);

    let xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom')
      .tickValues(data.map(function(d,i){
        if(i>0)
          return d.date;
      }).splice(1))
      .ticks(4);

    let xGrid = d3.svg.axis()
      .scale(x)
      .orient('bottom')
      .ticks(5)
      .tickSize(-h, 0, 0)
      .tickFormat('');

    let yGrid = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(5)
      .tickSize(-w, 0, 0)
      .tickFormat('');


    let interpolations = [
      'linear',
      'step-before',
      'step-after',
      'basis',
      'basis-closed',
      'cardinal',
      'cardinal-closed'];

    let line = d3.svg.line()
      .x(function (d) {
        return x(d.date);
      })
      .y(function (d) {
        return y(d.y);
      }).interpolate(interpolations[5]);

    let transform='translate(' + margin.left + ',' + margin.top + ')';

    return (
      <Chart id={this.props.chartId} width={this.props.width} height={this.props.height}>
        <g transform={transform}>
          <Grid h={h} grid={yGrid} gridType="y"/>
          <Axis h={h} axis={yAxis} axisType="y" />
          <Axis h={h} axis={xAxis} axisType="x"/>
          <path className="line shadow" d={line(data)} strokeLinecap="round"/>
          <Dots data={data} x={x} y={y} showToolTip={this.showToolTip} hideToolTip={this.hideToolTip}/>
          <ToolTip tooltip={this.state.tooltip}/>
        </g>
      </Chart>
    );
  }
}
