var graphic;

graphic = new Object;

graphic.create = function() {
  var g, height, i, size, width, _i, _len, _ref, _results;
  width = $(document).width() / 2;
  height = $(document).height() * .85;
  size = d3.min([width, height]);
  graphic.svg = d3.select("#graphic").append("svg").attr("width", size).attr("height", size);
  g = graphic.svg.append("g");
  _ref = _.range(size / 10);
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    i = _ref[_i];
    _results.push(graphic.svg.append("rect").attr("width", size - i * 10).attr("height", size - i * 10).attr("fill", i % 2 === 0 ? "black" : "white"));
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
