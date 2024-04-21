"use strict";

// middleware/authenticate.js
var jwt = require('jsonwebtoken');
var _require = require('../generate-message'),
  generateMessages = _require.generateMessages;
var authenticateJWT = function authenticateJWT(req, res, next) {
  var token = req.headers.authorization;
  if (token) {
    jwt.verify(token.replace('Bearer ', ''), process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        console.error('Error verifying token:', err.message);
        throw generateMessages('INVALID_TOKEN');
      }
      req.userId = decoded.userId;
      next();
    });
  } else {
    throw generateMessages('INVALID_TOKEN');
  }
};
module.exports = authenticateJWT;