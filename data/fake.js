var d3, data, i;

d3 = require("./d2p/index");

data = (function() {
  var _results;
  _results = [];
  for (i = 0; i <= 100; i++) {
    _results.push({
      x: i,
      y: i + 1
    });
  }
  return _results;
})();

d3.write("fake.json", JSON.stringify(data));
