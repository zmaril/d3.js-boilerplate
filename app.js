var app, change, express, g, gs, i, length, port, time;

express = require("express");

app = express.createServer(express.logger());

app.use("/", express.static(__dirname));

g = function(n) {
  return -(Math.pow(Math.sin(n / 2), 2) + Math.pow(Math.cos(n * 3), 10)) / 2;
};

length = 1000;

gs = (function() {
  var _results;
  _results = [];
  for (i = 0; 0 <= length ? i <= length : i >= length; 0 <= length ? i++ : i--) {
    _results.push({
      id: i,
      x: 2 * Math.PI * i / length,
      y: g(i / length)
    });
  }
  return _results;
})();

time = 0;

change = function() {
  var d, i, _len;
  for (i = 0, _len = gs.length; i < _len; i++) {
    d = gs[i];
    gs[i].y = g(d.x + time);
  }
  return time += 0.002;
};

setInterval(change, 10);

app.get('/data', function(req, res) {
  return res.send(JSON.stringify(gs));
});

port = process.env.PORT || 5000;

app.listen(port);
