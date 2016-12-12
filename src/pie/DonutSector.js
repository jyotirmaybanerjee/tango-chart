import React, {PropTypes, Component} from 'react';
import d3 from 'd3';

export default class DonutSector extends Component {

  static propTypes = {
    color: PropTypes.string,
    data: PropTypes.object,
    label: PropTypes.string,
    total: PropTypes.number,
    width: PropTypes.number
  }

  state = {
    text: '',
    opacity: 'arc'
  }

  onBlur = () => {
    console.log('On Blur ' + this.props.label);
  }

  onFocus = () => {
    console.log('On Focus ' + this.props.label);
  }

  onMouseOver = () => {
    this.setState({text: '', opacity: 'arc-hover'});
    const percent = ((this.props.data.value / this.props.total) *
      100).toFixed(1);
    this.setState({text: percent + ' %'});
  }

  onMouseOut = () => {
    this.setState({text: '', opacity: 'arc'});
  }

  onClick = () => {
    console.log('You clicked ' + this.props.label);
  }

  render() {
    const outerRadius = this.props.width / 2.2;
    const innerRadius = this.props.width / 5;
    const arc = d3.svg.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);
    const data = this.props.data;
    const center = 'translate(' + arc.centroid(data) + ')';
    const percentCenter = 'translate(0,3)';
    return (
      <g
        onMouseOver={this.onMouseOver}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onMouseOut={this.onMouseOut}
        onClick={this.onClick}
      >
        <path
          className={this.state.opacity}
          fill={this.props.color}
          d={arc(this.props.data)}
        />
        <text
          fill="white"
          transform={center}
          textAnchor="middle"
          fontSize="15px"
        >
          {data.value}
        </text>
        <text
          fill={this.props.color}
          stroke={this.props.color}
          fontSize="15px"
          transform={percentCenter}
          textAnchor="middle"
        >
          {this.state.text}
        </text>
      </g>
    );
  }
}
