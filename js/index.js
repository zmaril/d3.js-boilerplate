var HashBangs, delta, graphic, ratio, route, size, start_backbone;

graphic = new Object;

ratio = 0.5;

size = 0;

delta = 10;

route = null;

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
      return route.navigate("//" + ui.value, {
        trigger: true,
        replace: true
      });
    }
  });
  return $("#main").append(graphic.slider);
};

graphic.update = function() {
  var phi, s;
  s = size * ratio;
  phi = ratio * Math.PI * 2 * 100;
  graphic.rect.transition(delta).attr("height", s).attr("width", s);
  graphic.g.transition(delta).attr("transform", "translate(" + (s / 2) + "," + (s / 2) + "),rotate(" + phi + ")");
  return graphic.slider.slider("value", ratio);
};

graphic.destroy = function() {
  graphic.svg.remove();
  return delete graphic.svg;
};

HashBangs = Backbone.Router.extend({
  "routes": {
    "": "default",
    ":ratio": "ratio"
  },
  "default": function() {},
  "ratio": function(r) {
    ratio = r;
    return graphic.update();
  }
});

start_backbone = function() {
  route = new HashBangs();
  return Backbone.history.start();
};

$(document).ready(function() {
  graphic.create();
  start_backbone();
  return $(window).resize(function() {
    graphic.destroy();
    return graphic.create();
  });
});
