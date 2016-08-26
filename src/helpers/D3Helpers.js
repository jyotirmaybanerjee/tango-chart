import d3 from 'd3';
class D3Helpers {

  /*
   * Returns the largest X coordinate from the data set
   */
  xMax(data) {
    return d3.max(data, (d) => d[0]);
  }

  /*
   * Returns the higest Y coordinate from the data set
   */
  yMax(data) {
    return d3.max(data, (d) => d[1]);
  }

  /*
   * Returns a function that "scales" X coordinates from the data to fit the chart
   */
  xScale(props) {
    return d3.scale.linear()
      .domain([0, this.xMax(props.data)])
      .range([props.padding, props.width - props.padding * 2]);
  }

  /*
   * Returns a function that "scales" Y coordinates from the data to fit the chart
   */
  yScale(props) {
    return d3.scale.linear()
      .domain([0, this.yMax(props.data)])
      .range([props.height - props.padding, props.padding]);
  }
}

module.exports = D3Helpers();
