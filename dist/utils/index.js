"use strict";

var _generateMessage = require("./generate-message");
var _authenticate = _interopRequireDefault(require("./middleware/authenticate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
module.exports = {
  generateMessages: _generateMessage.generateMessages,
  authenticateJWT: _authenticate["default"]
};