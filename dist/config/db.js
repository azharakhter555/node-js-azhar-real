"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _sequelize = _interopRequireDefault(require("sequelize"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config({
  path: '.env'
});
var config = require('./config')[process.env.NODE_ENV];
var db = config.use_env_variable ? new _sequelize["default"](process.env[config.use_env_variable], config) : new _sequelize["default"](config.database, config.username, config.password, config);
module.exports = db;