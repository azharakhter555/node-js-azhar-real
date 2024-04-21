"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import { loggerService } from './aws-logger';

_dotenv["default"].config({
  path: '../.env'
});
var errorHandler = exports.errorHandler = function errorHandler(error, req, res, next) {
  var body = req.body,
    query = req.query,
    headers = req.headers;
  var additionalInfo = {
    body: body,
    headers: headers,
    query: query,
    response: {
      message: error.errors || error.message || error.name || error,
      errors: error,
      status: 406
    }
  };
  if (process.env.NODE_ENV !== 'production') {
    console.log('error', error);
  }
  if (error.errors && Array.isArray(error.errors)) {
    // loggerService.logToCloudWatch(req, 'validation-error', additionalInfo);

    return res.status(406).json({
      message: error.errors[0],
      errors: process.env.NODE_ENV === 'production' ? null : error.errors
    });
  }

  // loggerService.logToCloudWatch(req, 'error', additionalInfo);

  // logger.log('error', `Error response while requesting ${method} ${originalUrl}`, { tags: 'http', additionalInfo: { body, query, headers, response: { status: error.status || 500, message: error.message || error.name || error } }});
  return res.status(error.status || 406).json({
    message: error.message || error.name || error,
    errors: process.env.NODE_ENV === 'production' ? null : error
  });
};