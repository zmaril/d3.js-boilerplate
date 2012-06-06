graphic = new Object
ratio = 0.5
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
    .attr("transform","translate(#{size/2*ratio},#{size/2*ratio})")

  graphic.rect = graphic.g.append("rect")
    .attr("height",size*ratio)
    .attr("width",size*ratio)
    .attr("fill","black")

  graphic.slider = $("#slider").slider(
      value : ratio
      min : 0.01
      max : 1
      step: 0.01
      slide : (event,ui)-> route.navigate("//#{ui.value}",{trigger: true, replace: true}))

  $("#main").append(graphic.slider)

graphic.update = ()->
    s = size*ratio
    phi = ratio*Math.PI*2*100

    graphic.rect.transition(delta)
      .attr("height",s)
      .attr("width",s)

    graphic.g.transition(delta)
    .attr("transform",
      "translate(#{s/2},#{s/2}),rotate(#{phi})")

    graphic.slider.slider("value",ratio)

graphic.destroy = ()->
  graphic.svg.remove()
  delete graphic.svg

HashBangs = Backbone.Router.extend({
    "routes":
      "": "default"
      ":ratio" : "ratio"

    "default": ()->

    "ratio": (r)->
      ratio = r
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
