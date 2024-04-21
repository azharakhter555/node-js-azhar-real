"use strict";

var _express = _interopRequireDefault(require("express"));
var _requestLogger = _interopRequireDefault(require("../utils/middleware/request-logger"));
var _authenticate = _interopRequireDefault(require("../utils/middleware/authenticate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var usersRouter = _express["default"].Router();
var _require = require('../controllers'),
  UserController = _require.UserController;
usersRouter.post('/signup', function () {
  return UserController.createUser.apply(UserController, arguments);
}, _requestLogger["default"].logger);
usersRouter.post('/login', function () {
  return UserController.LoginUser.apply(UserController, arguments);
}, _requestLogger["default"].logger);
usersRouter.get('/get-user', _authenticate["default"], function () {
  return UserController.getUser.apply(UserController, arguments);
}, _requestLogger["default"].logger);
usersRouter.put('/update-user', _authenticate["default"], function () {
  return UserController.updateUser.apply(UserController, arguments);
}, _requestLogger["default"].logger);
module.exports = usersRouter;