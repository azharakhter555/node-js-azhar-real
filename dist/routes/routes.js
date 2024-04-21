"use strict";

var _express = _interopRequireDefault(require("express"));
var _users = _interopRequireDefault(require("./users.routes"));
var _room = _interopRequireDefault(require("./room.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.use("/user", _users["default"]);
router.use("/room", _room["default"]);
module.exports = router;