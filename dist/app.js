"use strict";

var _express = _interopRequireDefault(require("express"));
var _helmet = _interopRequireDefault(require("helmet"));
var _cors = _interopRequireDefault(require("cors"));
var _http = _interopRequireDefault(require("http"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _connectTimeout = _interopRequireDefault(require("connect-timeout"));
var _routes = _interopRequireDefault(require("./routes/routes.js"));
var _db = _interopRequireDefault(require("./config/db.js"));
var _errorHandler = require("./utils/error-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * module dependencies
 * 
 */

/**
 * 
 * Database connection
 * 
 */

_db["default"].authenticate().then(function () {
  return console.log('%s Database connected successfully!');
})["catch"](function (error) {
  console.log('Database authenticaion error...', error);
  process.exit();
});

/**
 * Load enviornment variables from .env file where api keys and password are configure
 */
_dotenv["default"].config({
  path: ".env"
});

/**
 *  Create Express server
 */
var app = (0, _express["default"])();

//funcation for the time out of the request

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}
app.use('/uploads', _express["default"]["static"]('uploads'));

//user middle ware to configure the timeout function
app.use((0, _connectTimeout["default"])(12000000));
app.use(haltOnTimedout);

//express configuration

app.set('host', '0.0.0.0');
app.set('port', 8080);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])({
  origin: ['http://react-js-bucket-azhar.s3-website-us-east-1.amazonaws.com', '*']
}));

// //midlle ware for the api routes 
app.use("/api", _routes["default"]);
app.get("/", function (request, response) {
  return response.send("\n        <br />\n        <br />\n        <center>\n            <h1>\n                Hello \uD83D\uDC4B from AWS EC2\n            </h1>\n        </center>\n    ");
});

//error handler  middler ware
app.use(_errorHandler.errorHandler);

//create http server for the fast response the express server
var server = _http["default"].createServer(app);
server.listen(app.get('port'), function () {
  console.log('%s App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});