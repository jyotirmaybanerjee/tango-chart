import d3 from 'd3';

/*
 * Returns the largest X coordinate from the data set
 */
const xMax   = (data)  => d3.max(data, (d) => d[0]);

/*
 * Returns the higest Y coordinate from the data set
 */
const yMax   = (data)  => d3.max(data, (d) => d[1]);

/*
 * Returns a function that "scales" X coordinates from the data to fit the chart
 */
const xScale = (padding, width, data) => {
  return d3.scale.linear()
    .domain([0, xMax(data)])
    .range([padding, width - padding * 2]);
};

/*
 * Returns a function that "scales" Y coordinates from the data to fit the chart
 */
const yScale = (padding, height, data) => {
  return d3.scale.linear()
    .domain([0, yMax(data)])
    .range([height - padding, padding]);
};

export {xMax, yMax, xScale, yScale};
