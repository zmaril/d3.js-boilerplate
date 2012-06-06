graphic = new Object
radius = 10
size = 0
delta = 10
route = null

graphic.create = ()->
  width = $(document).width()/2
  height = $(document).height()*.85
  size = d3.min([width,height])

  graphic.svg = d3.select("#graphic")
    .append("svg")
      .attr("width",size)
      .attr("height",size)

  graphic.g = graphic.svg.append("g")
    .attr("transform","translate(#{size/2},#{size/2})")

  graphic.circ = graphic.g.append("circle")
    .attr("fill","black")
    .attr("r",radius)

  graphic.slider = $("#slider").slider(
      value : radius
      min : 1
      max : size
      step: 0.01
      slide : (event,ui)-> route.navigate("//#{ui.value}",{trigger: true, replace: true}))


graphic.update = ()->
  console.log radius
  graphic.circ.attr("r",radius)
  graphic.slider.slider("value",radius)

graphic.destroy = ()->
  graphic.svg.remove()
  delete graphic.svg

HashBangs = Backbone.Router.extend({
    "routes":
      "": "default"
      ":radius" : "radius"

    "default": ()->

    "radius": (r)->

      radius = r
      graphic.update()
  })

start_backbone = ()->
  route = new HashBangs()
  Backbone.history.start()

#  Backbone.history.start()
$(document).ready ()->
  graphic.create()
  start_backbone()
  $(window).resize ()->
    graphic.destroy()
    graphic.create()
