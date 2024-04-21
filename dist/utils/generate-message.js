"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMessages = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _codes = _interopRequireDefault(require("../config/codes.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config({
  path: '../.env'
});

/**
 * 
 * @param {string} code 
 * @param {boolean} validator 
 * @returns {string}
 */
var generateMessages = exports.generateMessages = function generateMessages(code, validator) {
  return _codes["default"]["".concat(process.env.NODE_ENV)]["".concat(process.env.ENV_LANG)]["".concat(code)];
};