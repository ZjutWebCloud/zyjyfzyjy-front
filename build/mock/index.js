const context = require('../../src/context');
module.exports = function (app) {
  app.post(`${context}/BrowseFuzzy.adub`, require('./BrowseFuzzy.adub'));
  app.post(`${context}/QueryBasic.adub`, require('./QueryBasic.adub'));
}