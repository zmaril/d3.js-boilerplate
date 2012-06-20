var XY, XYList, XYView, XYs, app;

XY = Backbone.Model.extend({
  defaults: {
    title: "Empty XY",
    x: 1,
    y: 1
  },
  initialize: function() {
    if (!this.get("title")) {
      return this.set({
        "title": this.x + this.y
      });
    }
  }
});

XYList = Backbone.Collection.extend({
  model: XY,
  url: "/data"
});

XYs = new XYList;

XYView = Backbone.View.extend({
  el: $("#graphic"),
  initialize: function() {
    var width,
      _this = this;
    XYs.bind("add", this.update, this);
    XYs.bind("all", this.update, this);
    width = this.$el.parent().width();
    this.svg = d3.select(this.el).append("svg").attr("height", width).attr("width", width);
    this.g = this.svg.append("g");
    this.x = d3.scale.linear().domain([0, Math.PI * 2]).range([0, width]);
    this.y = d3.scale.linear().domain([-1, 1]).range([width / 4, width * 3 / 4]);
    this.line = d3.svg.line().x(function(d) {
      return _this.x(d.attributes.x);
    }).y(function(d) {
      return _this.y(d.attributes.y);
    }).interpolate("cardinal");
    return setInterval(XYs.fetch.bind(XYs), 100);
  },
  update: function() {
    var path;
    path = this.g.selectAll("path").data([XYs.models]);
    path.enter().append("path");
    return path.transition(1000).attr("d", this.line);
  }
});

app = new XYView;
