graphic = new Object

graphic.create = ()->
  width = $("#graphic").width()
  size = width
  graphic.svg = d3.select("#graphic")
    .append("svg")
      .attr("width",size)
      .attr("height",size)

  g = graphic.svg.append("g")

  circles = 40
  for i in _.range(size/(2*circles)).reverse()
    graphic.svg.append("circle")
      .attr("fill",if i%2 is 0 then "black" else "white")
      .attr("r",i*circles)
      .attr("transform","translate(#{size/2},#{size/2})")

graphic.update = ()->

graphic.destroy = ()->
  graphic.svg.remove()
  delete graphic.svg

$(document).ready ()->
  graphic.create()

  $(window).resize ()->
    graphic.destroy()
    graphic.create()
