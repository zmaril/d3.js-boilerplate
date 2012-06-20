d3 = require("./d2p/index")

data = ({x: i, y: i+1} for i in [0..100])

d3.write("fake.json",JSON.stringify(data))