XY = Backbone.Model.extend
  defaults:
    title: "Empty XY"
    x: 1
    y: 1
  initialize: ()->
    if not @.get "title"
      @.set("title": @x+@y)

XYList = Backbone.Collection.extend
    model: XY
    url: "/data"

XYs = new XYList

XYView = Backbone.View.extend
  el: $("#graphic")
  initialize: ()->
    XYs.bind("add",@update,this)
    XYs.bind("all",@update,this)

    width = @$el.parent().width()
    @svg = d3.select(@el).append("svg")
      .attr("height",width)
      .attr("width",width)

    @g = @svg.append("g")

    @x = d3.scale.linear().domain([0,Math.PI*2]).range([0,width])
    @y = d3.scale.linear().domain([-1,1]).range([width/4,width*3/4])

    @line = d3.svg.line()
      .x((d)=> @x(d.attributes.x))
      .y((d)=> @y(d.attributes.y))
      .interpolate("cardinal")

    setInterval(XYs.fetch.bind(XYs),100)

  update: ()->
    path = @g.selectAll("path").data([XYs.models])

    path.enter().append("path")

    path.transition(1000)
     .attr("d",@line)

app = new XYView