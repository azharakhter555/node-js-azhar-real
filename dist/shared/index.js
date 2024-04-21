"use strict";

var _helper = _interopRequireDefault(require("./helper"));
var _baseRepository = _interopRequireDefault(require("./base-repository"));
var _http = _interopRequireDefault(require("./http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
module.exports = {
  Helper: _helper["default"],
  BaseRepository: _baseRepository["default"],
  Http: new _http["default"]()
};