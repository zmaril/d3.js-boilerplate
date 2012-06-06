var graphic;

graphic = new Object;

graphic.create = function() {
  var circles, g, i, size, width, _i, _len, _ref, _results;
  width = $("#graphic").width();
  size = width;
  graphic.svg = d3.select("#graphic").append("svg").attr("width", size).attr("height", size);
  g = graphic.svg.append("g");
  circles = 40;
  _ref = _.range(size / (2 * circles)).reverse();
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    i = _ref[_i];
    _results.push(graphic.svg.append("circle").attr("fill", i % 2 === 0 ? "black" : "white").attr("r", i * circles).attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")"));
  }
  return _results;
};

graphic.update = function() {};

graphic.destroy = function() {
  graphic.svg.remove();
  return delete graphic.svg;
};

$(document).ready(function() {
  graphic.create();
  return $(window).resize(function() {
    graphic.destroy();
    return graphic.create();
  });
});
