var display, domain, funcs, graph, h, p, rate, redrawLines, slider, svgLine, vis, w, x, xRules, y, yRules;

w = 482;

h = 482;

p = 20;

domain = _.range(100);

rate = 1;

funcs = {
  top: function(x) {
    return (1 + 2 * Math.atan(x / rate) / Math.PI) / 2;
  },
  bottom: function(x) {
    return (1 - 2 * Math.atan(x / (100 * rate)) / Math.PI) / 2;
  },
  constant: function(x) {
    return 0.3;
  },
  curve: function(x) {
    return Math.pow(2, x / 100) - 0.8;
  }
};

display = $("<div>").attr("id", "rate-value").text("Rate Value: " + rate);

slider = $("<div>").attr("id", "rate-slider").slider({
  value: rate,
  min: 0.01,
  max: 10,
  step: 0.01,
  slide: function(event, ui) {
    rate = ui.value;
    $("#rate-value").text("Rate Value: " + rate);
    return redrawLines();
  }
});

$("#main").append(slider, display);

vis = d3.select('#main').append('svg').attr("width", w + p * 2).attr("height", h + p * 2).append('g').attr("transform", "translate(" + p + "," + p + ")");

x = d3.scale.linear().domain([-3, 110]).range([0, w]);

y = d3.scale.linear().domain([-0.1, 1.1]).range([h, 0]);

svgLine = d3.svg.line().x(function(d) {
  return x(d.x);
}).y(function(d) {
  return y(d.y);
});

xRules = vis.append("g").attr("class", "axis").append("line").attr("x1", x(0)).attr("x2", x(0)).attr("y1", y(0)).attr("y2", y(1));

yRules = vis.append("g").attr("class", "axis").append("line").attr("x1", x(0)).attr("x2", x(_.max(domain))).attr("y1", y(0)).attr("y2", y(0));

vis.append("foreignObject").attr("transform", "translate(" + (x(-7)) + "," + (y(0.45)) + "),rotate(-90)").attr("height", 100).attr("width", 100).append("xhtml:body").html("\\( {\\Large p_m(i)y} \\)");

vis.append("foreignObject").attr("transform", "translate(" + (x(0.5)) + "," + (y(0.55)) + "),rotate(0)").attr("height", 100).attr("width", 100).append("xhtml:body").html("\\( {\\Large \\theta y} \\)");

vis.append("foreignObject").attr("transform", "translate(" + (x(50)) + "," + (y(-0.01)) + "),rotate(0)").attr("height", 100).attr("width", 100).append("xhtml:body").html("\\( {\\Large i} \\)");

vis.append("foreignObject").attr("transform", "translate(" + (x(-4)) + "," + (y(1.03)) + "),rotate(0)").attr("height", 100).attr("width", 100).append("xhtml:body").html("\\(1\\)");

vis.append("foreignObject").attr("transform", "translate(" + (x(-4)) + "," + (y(0.04)) + "),rotate(0)").attr("height", 100).attr("width", 100).append("xhtml:body").html("\\(0\\)");

vis.append("foreignObject").attr("transform", "translate(" + (x(100)) + "," + (y(0.34)) + "),rotate(0)").attr("height", 100).attr("width", 100).append("xhtml:body").html("\\( {\\Large U } \\)");

vis.append("foreignObject").attr("transform", "translate(" + (x(80)) + "," + (y(1.05)) + "),rotate(0)").attr("height", 100).attr("width", 100).append("xhtml:body").html("\\(C(i)\\)");

graph = function(f) {
  var all;
  all = _.map(domain, function(x) {
    return {
      x: x,
      y: f(x)
    };
  });
  return _.filter(all, function(pair) {
    return pair.y < 1;
  });
};

vis.append("g").data([graph(funcs.top)]).append("path").attr("class", "top line").attr("d", svgLine);

vis.append("g").data([graph(funcs.bottom)]).append("path").attr("class", "bottom line").attr("d", svgLine);

vis.append("g").data([graph(funcs.constant)]).append("path").attr("class", "constant line").attr("d", svgLine);

vis.append("g").data([graph(funcs.curve)]).append("path").attr("class", "curve line").attr("d", svgLine);

redrawLines = function() {
  vis.selectAll(".top").data([graph(funcs.top)]).transition().duration(20).attr("d", svgLine);
  return vis.selectAll(".bottom").data([graph(funcs.bottom)]).transition().duration(20).attr("d", svgLine);
};
