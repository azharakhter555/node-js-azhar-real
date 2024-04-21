"use strict";

var _express = _interopRequireDefault(require("express"));
var _requestLogger = _interopRequireDefault(require("../utils/middleware/request-logger"));
var _authenticate = _interopRequireDefault(require("../utils/middleware/authenticate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var fs = require('fs');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    // Define the destination directory (relative to the root of your project)
    var uploadDir = './uploads'; // Example: 'uploads'

    // Ensure the destination directory exists
    fs.mkdirSync(uploadDir, {
      recursive: true
    });
    cb(null, uploadDir);
  },
  filename: function filename(req, file, cb) {
    // Define a custom file name if needed
    cb(null, file.originalname);
  }
});

// Create an instance of multer with the specified configuration
var upload = multer({
  storage: storage
});
var roomRouter = _express["default"].Router();
var _require = require('../controllers'),
  RoomController = _require.RoomController;
roomRouter.post('/add-room', upload.single('images'), function () {
  return RoomController.addRoomByUser.apply(RoomController, arguments);
}, _requestLogger["default"].logger);
roomRouter.post('/book-room', function () {
  return RoomController.bookRoomByUser.apply(RoomController, arguments);
}, _requestLogger["default"].logger);
roomRouter.get('/get-room', function () {
  return RoomController.getRoomByUser.apply(RoomController, arguments);
}, _requestLogger["default"].logger);
roomRouter.put('/update-room', function () {
  return RoomController.updateRoomByUser.apply(RoomController, arguments);
}, _requestLogger["default"].logger);
roomRouter["delete"]('/delete-rooms', function () {
  return RoomController.deleteRoomByUser.apply(RoomController, arguments);
}, _requestLogger["default"].logger);
module.exports = roomRouter;