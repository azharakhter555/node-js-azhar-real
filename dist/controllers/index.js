"use strict";

var _user = _interopRequireDefault(require("./user.controller"));
var _room = _interopRequireDefault(require("./room.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
module.exports = {
  UserController: new _user["default"](),
  RoomController: new _room["default"]()
};