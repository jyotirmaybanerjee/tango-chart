import React, {PropTypes, Component} from 'react';
import d3 from 'd3';

export default class DonutSector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      opacity:'arc'
    }
  }

  onMouseOver = () => {
    this.setState({text: '', opacity:'arc-hover'});
    var percent = (this.props.data.value/this.props.total)*100;
    percent = percent.toFixed(1);
    this.setState({text: percent + ' %'});
  }

  onMouseOut = () => {
    this.setState({text: '', opacity:'arc'});
  }

  onClick = () => {
    console.log('You clicked ' + this.props.name);
  }

  render() {
    let outerRadius = this.props.width/2.2;
    let innerRadius = this.props.width/8;
    let arc = d3.svg.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);
    let data = this.props.data;
    let center = 'translate(' + arc.centroid(data) + ')';
    let percentCenter = 'translate(0,3)';
    // let color = this.props.color;
    return (
      <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.onClick}>
        <path className={this.state.opacity} fill={this.props.color} d={arc(this.props.data)}></path>
        <text fill="white" transform={center} textAnchor="middle" fontSize="15px">{data.value}</text>
        <text fill={this.props.color} stroke={this.props.color} fontSize="15px" transform={percentCenter} textAnchor="middle">{this.state.text}</text>
      </g>
    );
  }
}
