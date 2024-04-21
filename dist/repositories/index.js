"use strict";

var _user = _interopRequireDefault(require("./user.repository"));
var _room = _interopRequireDefault(require("./room.repository"));
var _contactUs = _interopRequireDefault(require("./contact-us.repository"));
var _roomBooking = _interopRequireDefault(require("./room-booking.repository"));
var _roomFeature = _interopRequireDefault(require("./room-feature.repository"));
var _roomImage = _interopRequireDefault(require("./room-image.repository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
module.exports = {
  UserRepository: new _user["default"](),
  RoomRepository: new _room["default"](),
  ContactUsRepository: new _contactUs["default"](),
  RoomBookingRepository: new _roomBooking["default"](),
  RoomFeatureRepository: new _roomFeature["default"](),
  RoomImageRepository: new _roomImage["default"]()
};