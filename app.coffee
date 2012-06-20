express = require("express")

app = express.createServer()

app.use("/",express.static(__dirname))

length = 1000

f = (n)->
  (Math.pow(Math.sin(n/2),2)+Math.pow(Math.cos(n*3),10))/2

fs = ({id: i, x: 2*Math.PI*i/length, y: f(i/length)} for i in [0..length])

g = (n)->
  -(Math.pow(Math.sin(n/2),2)+Math.pow(Math.cos(n*3),10))/2

gs = ({id: i, x: 2*Math.PI*i/length, y: g(i/length)} for i in [0..length])

time = 0

change = ()->
  for d,i in fs
    fs[i].y = f(d.x+time)

  for d,i in fs
    gs[i].y = g(d.x+time)

  time+= 0.002

setInterval(change,10)

app.get('/data', (req,res)->
    res.send(JSON.stringify(gs))
)

app.listen(8000)