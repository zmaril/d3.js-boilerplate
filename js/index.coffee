(()->

  ########
  #
  # Constant parameters
  #
  ########

  #Width of svg graphic
  w = 482

  #Height of svg grahic
  h = 482

  #Padding of svg graphic
  p = 20

  # The domain over which the functions will be mapped
  domain = _.range(100)


  ########
  #
  # Changing variables
  #
  ########

  #The "rate" at which the functions approach 0 or 1.
  rate = 1

  #Object that holds onto the functions
  funcs =
    top : (x) -> (1+2*Math.atan(x/rate)/Math.PI)/2
    bottom: (x) -> (1-2*Math.atan(x/(100*rate))/Math.PI)/2
    constant: (x) -> 0.3
    curve: (x) -> Math.pow(2,(x/100))-0.8


  ########
  #
  # Creating the interface
  #
  ########

  display =  $("<div>").attr("id","rate-value")
   .text("Rate Value: #{rate}")

  slider = $("<div>").attr("id","rate-slider")
    .slider(
      value : rate
      min : 0.01
      max : 10
      step: 0.01
      slide : (event,ui)-> #This tells the slider the function to
                           #callduring a change
        rate = ui.value
        $("#rate-value").text("Rate Value: #{rate}")
        redrawLines()
    )

  $("#main").append(slider,display)

  ########
  #
  # d3.js charting objects
  #
  ########

  #Setting up the object that represents the main "canvas"
  vis = d3.select('#main')
    .append('svg')
      .attr("width",w+p*2)
      .attr("height",h+p*2)
    .append('g')
      .attr("transform","translate(#{p},#{p})")

  #Setting up the scaling function for x
  x=d3.scale.linear()
    .domain([-3,110])
    .range([0, w])

  #Setting up the scaling function for y
  y=d3.scale.linear()
    .domain([-0.1,1.1])
    .range([h, 0])

  #Function which draws a line.
  #Used many times so pulled out.
  svgLine = d3.svg.line()
      .x((d)-> x(d.x))
      .y((d)-> y(d.y))

  ########
  #
  # Set up the chart with initial data
  #
  ########


  #Draw the horizontal x axis
  xRules = vis.append("g")
    .attr("class", "axis")
    .append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y1", y(0))
    .attr("y2", y(1))

  #Draw the vertical y axis
  yRules = vis.append("g")
     .attr("class", "axis")
     .append("line")
     .attr("x1", x(0))
     .attr("x2", x(_.max(domain)))
     .attr("y1", y(0))
     .attr("y2", y(0))


  # This appends latex code as html and MathJax then comes in and
  # reformats everything so that it looks nice.

  #Y axis label
  vis.append("foreignObject")
    .attr("transform","translate(#{x(-7)},#{y(0.45)}),rotate(-90)")
    .attr("height",100)
    .attr("width",100)
    .append("xhtml:body")
    .html("\\( {\\Large p_m(i)y} \\)")

  #Theta y
  vis.append("foreignObject")
    .attr("transform","translate(#{x(0.5)},#{y(0.55)}),rotate(0)")
    .attr("height",100)
    .attr("width",100)
    .append("xhtml:body")
    .html("\\( {\\Large \\theta y} \\)")

  #X Axis Label
  vis.append("foreignObject")
    .attr("transform","translate(#{x(50)},#{y(-0.01)}),rotate(0)")
    .attr("height",100)
    .attr("width",100)
    .append("xhtml:body")
    .html("\\( {\\Large i} \\)")

  # 1
  vis.append("foreignObject")
    .attr("transform","translate(#{x(-4)},#{y(1.03)}),rotate(0)")
    .attr("height",100)
    .attr("width",100)
    .append("xhtml:body")
    .html("\\(1\\)")

  # 0
  vis.append("foreignObject")
    .attr("transform","translate(#{x(-4)},#{y(0.04)}),rotate(0)")
    .attr("height",100)
    .attr("width",100)
    .append("xhtml:body")
    .html("\\(0\\)")

  # U. Note \underline{U} resets the svg in chrome and moves
  # the outputted svg places it shouldn't be within the page. Works fine
  # in firefox though.
  vis.append("foreignObject")
    .attr("transform","translate(#{x(100)},#{y(0.34)}),rotate(0)")
    .attr("height",100)
    .attr("width",100)
    .append("xhtml:body")
    .html("\\( {\\Large U } \\)")

  # C.
  vis.append("foreignObject")
    .attr("transform","translate(#{x(80)},#{y(1.05)}),rotate(0)")
    .attr("height",100)
    .attr("width",100)
    .append("xhtml:body")
    .html("\\(C(i)\\)")

  # Create an array of xy objects to graph.
  # Filter out the C(i) function so that it doesn't
  # go outside the graph
  graph = (f) ->
    all = _.map(domain, (x)-> x: x,y: f(x))
    _.filter(all, (pair)-> pair.y < 1)

  #Create the graph of funcs.top and then plot it.
  vis.append("g")
    .data([graph(funcs.top)])
    .append("path")
    .attr("class","top line")
    .attr("d", svgLine)

  #Create the graph of funcs.bottom and then plot it.
  vis.append("g")
    .data([graph(funcs.bottom)])
    .append("path")
    .attr("class","bottom line")
    .attr("d", svgLine)

  #etc
  vis.append("g")
    .data([graph(funcs.constant)])
    .append("path")
    .attr("class","constant line") #Class defines the dashed effect.
    .attr("d", svgLine)

  #etc
  vis.append("g")
    .data([graph(funcs.curve)])
    .append("path")
    .attr("class","curve line")
    .attr("d", svgLine)


  ########
  #
  # Redraw that which needs to change
  #
  ########

  #Goes in and selects the lines to be redrawn by class.
  #The functions change as rate changes.
  #Closure doesn't happen here on the rate variable.
  redrawLines = ()->
    vis.selectAll(".top")
      .data([graph(funcs.top)])
      .transition()
        .duration(20)
        .attr("d", svgLine)

    vis.selectAll(".bottom")
      .data([graph(funcs.bottom)])
      .transition()
        .duration(20)
        .attr("d", svgLine)
)()