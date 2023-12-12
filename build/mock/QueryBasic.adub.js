var source = require('../../static/jsonfile/index/frontclass.json');
module.exports = function(req, res) {
  var id = req.params.checkedInfo;
  var result;
  for (var i = 0; i < source.frontClass.length; i++) {
    if (id == source.frontClass[i].id) {
      result = {
        output: source.frontClass[i],
      };
      res.json(result);
      return;
    }
  }
  res.json({
    output: source.frontClass[2]
  })
};
