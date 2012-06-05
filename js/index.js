var delta, graphic, ratio, size;

graphic = new Object;

ratio = 0.5;

size = 0;

delta = 10;

graphic.create = function() {
  var height, width;
  width = $(document).width() / 2;
  height = $(document).height() * .85;
  size = d3.min([width, height]);
  graphic.svg = d3.select("#graphic").append("svg").attr("width", size).attr("height", size);
  graphic.g = graphic.svg.append("g").attr("transform", "translate(" + (size / 2 * ratio) + "," + (size / 2 * ratio) + ")");
  graphic.rect = graphic.g.append("rect").attr("height", size * ratio).attr("width", size * ratio).attr("fill", "black");
  graphic.slider = $("#slider").slider({
    value: ratio,
    min: 0.01,
    max: 1,
    step: 0.01,
    slide: function(event, ui) {
      ratio = ui.value;
      return graphic.update();
    }
  });
  return $("#main").append(graphic.slider);
};

graphic.update = function() {
  var phi, s;
  s = size * ratio;
  phi = ratio * Math.PI * 2 * 100;
  graphic.rect.transition(delta).attr("height", s).attr("width", s);
  return graphic.g.transition(delta).attr("transform", "translate(" + (s / 2) + "," + (s / 2) + "),rotate(" + phi + ")");
};

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
