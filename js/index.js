var HashBangs, delta, graphic, radius, route, size, start_backbone;

graphic = new Object;

radius = 10;

size = 0;

delta = 10;

route = null;

graphic.create = function() {
  var height, width;
  width = $(document).width() / 2;
  height = $(document).height() * .85;
  size = d3.min([width, height]);
  graphic.svg = d3.select("#graphic").append("svg").attr("width", size).attr("height", size);
  graphic.g = graphic.svg.append("g").attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");
  graphic.circ = graphic.g.append("circle").attr("fill", "black").attr("r", radius);
  graphic.slider = $("#slider").slider({
    value: radius,
    min: 1,
    max: size,
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
  console.log(radius);
  graphic.circ.attr("r", radius);
  return graphic.slider.slider("value", radius);
};

graphic.destroy = function() {
  graphic.svg.remove();
  return delete graphic.svg;
};

HashBangs = Backbone.Router.extend({
  "routes": {
    "": "default",
    ":radius": "radius"
  },
  "default": function() {},
  "radius": function(r) {
    radius = r;
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
