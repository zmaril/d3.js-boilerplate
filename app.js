var app, change, express, f, fs, g, gs, i, length, time;

express = require("express");

app = express.createServer();

app.use("/", express.static(__dirname));

length = 1000;

f = function(n) {
  return (Math.pow(Math.sin(n / 2), 2) + Math.pow(Math.cos(n * 3), 10)) / 2;
};

fs = (function() {
  var _results;
  _results = [];
  for (i = 0; 0 <= length ? i <= length : i >= length; 0 <= length ? i++ : i--) {
    _results.push({
      id: i,
      x: 2 * Math.PI * i / length,
      y: f(i / length)
    });
  }
  return _results;
})();

g = function(n) {
  return -(Math.pow(Math.sin(n / 2), 2) + Math.pow(Math.cos(n * 3), 10)) / 2;
};

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
  var d, i, _len, _len2;
  for (i = 0, _len = fs.length; i < _len; i++) {
    d = fs[i];
    fs[i].y = f(d.x + time);
  }
  for (i = 0, _len2 = fs.length; i < _len2; i++) {
    d = fs[i];
    gs[i].y = g(d.x + time);
  }
  return time += 0.002;
};

setInterval(change, 10);

app.get('/data', function(req, res) {
  return res.send(JSON.stringify(gs));
});

app.listen(8000);
