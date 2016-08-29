import React, {PropTypes, Component} from 'react';
import Chart from '../../Chart';
import DataSeries from './DataSeries';
import Axis from './Axis';
import Grid from './Grid';
import Dots from './Dots';
import ToolTip from './ToolTip';

export default class LineChart extends Component {

  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
  }

  static defaultProps = {
    height: 400,
    width: 600
  }

  constructor(props) {
    super(props);
    this.state = {
      tooltip: { display:false,data:{key:'', value:''}}
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
    let size = { width: w, height: h };
    let lineCharts = [];
    let max = 0;

    data.forEach(function(element, index, array) {
      element.data.forEach(function(component, index, array) {
        if(component.y > max) {
          max = component.y;
        }
      });
    });

    let xScale = d3.scale.linear()
      .domain([0, 6])
      .range([0, w]);

    let yScale = d3.scale.linear()
      .domain([0, max])
      .range([h, 0]);

    let yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .ticks(5);

    let xGrid = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .ticks(5)
      .tickSize(-h, 0, 0)
      .tickFormat('');

    let yGrid = d3.svg.axis()
      .scale(yScale)
      .orient('left')
      .ticks(5)
      .tickSize(-w, 0, 0)
      .tickFormat('');

    let xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .tickValues(data[0].data.map(function(d,i){
        if(i>0)
          return d.x;
      }).splice(1))
      .ticks(5);

    data.forEach(function(element, index, array) {
      lineCharts.push(<DataSeries data={element.data} size={size} xScale={xScale} yScale={yScale} key={element.label} ref={element.label} color={element.color} />);
    });
    let transform='translate(' + margin.left + ',' + margin.top + ')';

    return (
      <Chart width={this.props.width} height={this.props.height}>
        <g transform={transform}>
          <Grid h={h} grid={yGrid} gridType="y"/>
          <Grid h={h} grid={xGrid} gridType="x"/>
          <Axis h={h} axis={yAxis} axisType="y" />
          <Axis h={h} axis={xAxis} axisType="x"/>
          {lineCharts}
          {/*<Dots data={data} x={xScale} y={yScale} showToolTip={this.showToolTip} hideToolTip={this.hideToolTip}/>
          <ToolTip tooltip={this.state.tooltip}/>*/}
        </g>
      </Chart>
    );
  }
}
