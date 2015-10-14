var data1 = [
    {score: 0.7, row: 0, col: 0,text:"val"},
    {score: 0.1, row: 0, col: 1,text:"val"},
    {score: 0.2, row: 1, col: 0,text:"val"},
    {score: 0.9, row: 1, col: 1,text:"val"},
    {score: 0.3, row: 1, col: 2,text:"val"},
    {score: 0.2, row: 0, col: 2,text:"val"},
    {score: 0.1, row: 2, col: 0,text:"val"},
    {score: 0.2, row: 2, col: 1,text:"val"},
    {score: 0.6, row: 2, col: 2,text:"val"}
];

//height of each row in the heatmap
//width of each column in the heatmap
var gridSize = 150,
    h = gridSize,
    w = gridSize,
    rectPadding = 60;

var colorLow = 'blue', colorMed = 'blue', colorHigh = 'red';

var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 640 - margin.left - margin.right,
    height = 640 - margin.top - margin.bottom;

var colorScale = d3.scale.linear()
     .domain([-1, 0, 1])
     .range([colorLow, colorMed, colorHigh]);

var svg1 = d3.select("#heatmap").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var heatMap = svg1.selectAll(".heatmap")
    .data(data1, function(d) { return d.col + ':' + d.row; })
  .enter().append("svg:rect")
    .attr("x", function(d) { return d.row * w; })
    .attr("y", function(d) { return d.col * h; })
    .attr("width", function(d) { return w; })
    .attr("height", function(d) { return h; })
    .style("fill", function(d) { return colorScale(d.score); })
  .append("text")
     .text(function(d) {return d.text;})
     .attr('x', function(d) { return d.row * w; })
     .attr('y', function(d) { return d.col * h; });
