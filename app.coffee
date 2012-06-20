#Setting up and using express
express = require("express")
app = express.createServer(express.logger())
app.use("/",express.static(__dirname))

#Some function
g = (n)->
  -(Math.pow(Math.sin(n/2),2)+Math.pow(Math.cos(n*3),10))/2

#A collecton of the results of some function
length = 1000
gs = ({id: i, x: 2*Math.PI*i/length, y: g(i/length)} for i in [0..length])

# "Changing" the models on the backend.
time = 0
change = ()->
  for d,i in gs
    gs[i].y = g(d.x+time)

  time+= 0.002

setInterval(change,10)

#Providing a way for backbone to get a look at the data.
app.get('/data', (req,res)->
    res.send(JSON.stringify(gs))
)

port = process.env.PORT || 5000

app.listen(port)