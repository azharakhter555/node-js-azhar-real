"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _shared = require("../shared");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _utils = require("../utils");
var _models = require("../models");
var _sequelize = require("sequelize");
var _excluded = ["user_id", "advance_rent", "contact_person_number", "description", "rent_of_room", "room_name"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /**
 * import all the dependices for the user serives 
 * 
 * In the services file we write the login and interact with the model thorugh repositer using sigelton pattern structure
 * all the service with repo is on the contructor in index file 
 * 
 * service => repo => model => database table 
 */
require('dotenv').config({
  path: '../../env'
});
var path = require('path');
var jwt = require('jsonwebtoken');
var RoomService = /*#__PURE__*/function (_Helper) {
  _inherits(RoomService, _Helper);
  function RoomService(UserRepository, RoomRepository, RoomImageRepository, RoomFeatureRepository, RoomBookingRepository) {
    var _this;
    _classCallCheck(this, RoomService);
    _this = _callSuper(this, RoomService);
    _this._userRepo = UserRepository;
    _this._repo = RoomRepository;
    _this._imageRepo = RoomImageRepository;
    _this._featureRepo = RoomFeatureRepository;
    _this._bookingRepo = RoomBookingRepository;
    return _this;
  }
  /**
   * create new user by getting value from the signup form 
   * @param {*}  
   */
  _createClass(RoomService, [{
    key: "addRoomByUser",
    value: (function () {
      var _addRoomByUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, body, _transactionForCreation) {
        var _data$file;
        var user_id, advance_rent, contact_person_number, description, rent_of_room, room_name, featureDate, roomInfo, newRoomPost, roomFeature, featureOfRoom, serverAddress, imageUrl, imageInfo, imageSave;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              //getting value of the room in different objects
              // const { userId, roomInfo, roomFeature, roomImagesUrls } = body;
              user_id = body.user_id, advance_rent = body.advance_rent, contact_person_number = body.contact_person_number, description = body.description, rent_of_room = body.rent_of_room, room_name = body.room_name, featureDate = _objectWithoutProperties(body, _excluded);
              if (data !== null && data !== void 0 && data.file) {
                _context.next = 3;
                break;
              }
              throw Error('No file found!');
            case 3:
              roomInfo = {
                user_id: user_id,
                room_name: room_name,
                contact_person_number: contact_person_number,
                rent_of_room: rent_of_room,
                advance_rent: advance_rent
              }; //upload to s3 butkets image 
              if (!(!roomInfo || Object.keys(roomInfo).length === 0)) {
                _context.next = 6;
                break;
              }
              throw (0, _utils.generateMessages)('INTERNAL_SERVER_ERROR');
            case 6:
              _context.t0 = this;
              _context.next = 9;
              return this._repo.create(roomInfo);
            case 9:
              _context.t1 = _context.sent;
              _context.t2 = _transactionForCreation;
              newRoomPost = _context.t0.shallowCopy.call(_context.t0, _context.t1, _context.t2);
              roomFeature = _objectSpread({
                room_id: newRoomPost === null || newRoomPost === void 0 ? void 0 : newRoomPost.id,
                descriptions: description
              }, featureDate);
              if (!(!roomFeature || Object.keys(roomFeature).length === 0)) {
                _context.next = 15;
                break;
              }
              throw (0, _utils.generateMessages)('INTERNAL_SERVER_ERROR');
            case 15:
              _context.t3 = this;
              _context.next = 18;
              return this._featureRepo.create(_objectSpread({}, roomFeature));
            case 18:
              _context.t4 = _context.sent;
              _context.t5 = _transactionForCreation;
              featureOfRoom = _context.t3.shallowCopy.call(_context.t3, _context.t4, _context.t5);
              serverAddress = process.env.SERVER; // Replace with your server address
              imageUrl = "".concat(serverAddress, "/").concat(data === null || data === void 0 || (_data$file = data.file) === null || _data$file === void 0 ? void 0 : _data$file.path);
              imageInfo = {
                room_id: newRoomPost === null || newRoomPost === void 0 ? void 0 : newRoomPost.id,
                image_url: imageUrl
              };
              _context.t6 = this;
              _context.next = 27;
              return this._imageRepo.create(_objectSpread({}, imageInfo));
            case 27:
              _context.t7 = _context.sent;
              _context.t8 = _transactionForCreation;
              imageSave = _context.t6.shallowCopy.call(_context.t6, _context.t7, _context.t8);
              return _context.abrupt("return", {
                newRoomPost: newRoomPost,
                featureOfRoom: featureOfRoom,
                imageSave: imageSave
              });
            case 31:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function addRoomByUser(_x, _x2, _x3) {
        return _addRoomByUser.apply(this, arguments);
      }
      return addRoomByUser;
    }())
  }, {
    key: "bookRoomByUser",
    value: function () {
      var _bookRoomByUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(body, _transactionForCreation) {
        var bookRoom, bookRoomReqest;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              bookRoom = body.bookRoom;
              _context2.t0 = this;
              _context2.next = 4;
              return this._bookingRepo.create(bookRoom);
            case 4:
              _context2.t1 = _context2.sent;
              _context2.t2 = _transactionForCreation;
              bookRoomReqest = _context2.t0.shallowCopy.call(_context2.t0, _context2.t1, _context2.t2);
              return _context2.abrupt("return", {
                bookRoomReqest: bookRoomReqest
              });
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function bookRoomByUser(_x4, _x5) {
        return _bookRoomByUser.apply(this, arguments);
      }
      return bookRoomByUser;
    }()
    /**
    * getting the user date
    * @param {*} body 
    * @returns 
    */
  }, {
    key: "GetRoomByUser",
    value: (function () {
      var _GetRoomByUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(query) {
        var page, per_page, order, order_by, roomId, rent_of_room, check_in_data, check_out_data, orderBy, where, whereClauseForFeature, options, _yield$this$_repo$pag, docs, pages, total;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              page = query.page, per_page = query.per_page, order = query.order, order_by = query.order_by, roomId = query.roomId, rent_of_room = query.rent_of_room, check_in_data = query.check_in_data, check_out_data = query.check_out_data;
              orderBy = order_by ? order_by : 'ASC';
              order = order ? order : 'id';
              where = {};
              if (roomId) {
                where = {
                  id: roomId
                };
              }
              if (rent_of_room) {
                where.rent_of_room = _defineProperty({}, _sequelize.Op.eq, rent_of_room);
              }
              whereClauseForFeature = {
                deleted_at: null
              };
              if (check_in_data) {
                // If check_in_data is provided, filter for exact match
                whereClauseForFeature.to_avaible_date = _defineProperty({}, _sequelize.Op.and, [_defineProperty({}, _sequelize.Op.gt, new Date(check_in_data))]);
              }

              // Check if check_out_data is provided
              if (check_out_data) {
                if (check_in_data) {
                  // If both check_in_data and check_out_data are provided, filter between check_in_data and check_out_data
                  whereClauseForFeature.to_avaible_date = _defineProperty({}, _sequelize.Op.between, [new Date(check_in_data), new Date(check_out_data)]);
                } else {
                  // If only check_out_data is provided, filter for exact match
                  whereClauseForFeature.from_end_date = _defineProperty({}, _sequelize.Op.and, [_defineProperty({}, _sequelize.Op.gt, new Date(check_out_data))]);
                }
              }
              options = {
                page: page ? parseInt(page) : 1,
                paginate: per_page ? parseInt(per_page) : 10,
                order: [["".concat(order), "".concat(orderBy)]],
                include: [{
                  model: _models.room_images,
                  as: 'roomImages'
                }, {
                  model: _models.room_features,
                  as: 'roomFeatures',
                  where: whereClauseForFeature
                }, {
                  model: _models.booking_room,
                  as: 'roombooking'
                }],
                where: where
              };
              _context3.next = 12;
              return this._repo.pagination(options);
            case 12:
              _yield$this$_repo$pag = _context3.sent;
              docs = _yield$this$_repo$pag.docs;
              pages = _yield$this$_repo$pag.pages;
              total = _yield$this$_repo$pag.total;
              return _context3.abrupt("return", {
                data: docs,
                pages: pages,
                total: total
              });
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function GetRoomByUser(_x6) {
        return _GetRoomByUser.apply(this, arguments);
      }
      return GetRoomByUser;
    }()
    /**
     * to login user
     * @param {*} body 
     * @returns 
     */
    )
  }, {
    key: "UpdateRoomByUser",
    value: (function () {
      var _UpdateRoomByUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(body, _transactionForUpdation) {
        var userId, roomInfo, roomFeature, roomImagesUrls, userExist, roomPostExist;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              //getting value of the room in different objects
              userId = body.userId, roomInfo = body.roomInfo, roomFeature = body.roomFeature, roomImagesUrls = body.roomImagesUrls; //check if the user does not  exist in our users table
              _context4.t0 = this;
              _context4.next = 4;
              return this._userRepo.findOne({
                id: userId,
                deleted_at: null
              });
            case 4:
              _context4.t1 = _context4.sent;
              userExist = _context4.t0.shallowCopy.call(_context4.t0, _context4.t1);
              _context4.t2 = this;
              _context4.next = 9;
              return this._repo.findOne({
                id: roomInfo === null || roomInfo === void 0 ? void 0 : roomInfo.id,
                deleted_at: null
              });
            case 9:
              _context4.t3 = _context4.sent;
              roomPostExist = _context4.t2.shallowCopy.call(_context4.t2, _context4.t3);
              if (userExist) {
                _context4.next = 13;
                break;
              }
              throw (0, _utils.generateMessages)('USER_NOT_FOUND');
            case 13:
              if (roomPostExist) {
                _context4.next = 15;
                break;
              }
              throw (0, _utils.generateMessages)('ROOM_NOT_FOUND');
            case 15:
              _context4.next = 17;
              return Promise.all([roomInfo !== null && roomInfo !== void 0 && roomInfo.id ? this._repo.update(roomInfo.id, roomInfo, _transactionForUpdation) : Promise.resolve(), roomFeature !== null && roomFeature !== void 0 && roomFeature.id ? this._featureRepo.update(roomFeature === null || roomFeature === void 0 ? void 0 : roomFeature.id, roomFeature, _transactionForUpdation) : Promise.resolve()]);
            case 17:
              return _context4.abrupt("return", {
                userId: userId
              });
            case 18:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function UpdateRoomByUser(_x7, _x8) {
        return _UpdateRoomByUser.apply(this, arguments);
      }
      return UpdateRoomByUser;
    }()
    /**
     * update the user information
     * @param {*} body 
     * @returns 
     */
    )
  }, {
    key: "deleteRoomByUser",
    value: (function () {
      var _deleteRoomByUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(body, _transactionForUpdation) {
        var roomIds, roomPostsIds;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              roomIds = body.roomIds; // Fetch room ids
              _context5.next = 3;
              return this._repo.findAll({
                id: roomIds
              });
            case 3:
              roomPostsIds = _context5.sent.map(function (roomPost) {
                return roomPost.id;
              });
              if (roomPostsIds.length > 0) {
                _context5.next = 6;
                break;
              }
              throw (0, _utils.generateMessages)('ROOM_NOT_FOUND');
            case 6:
              _context5.next = 8;
              return Promise.all([this._repo.updateByIds(roomPostsIds, {
                deleted_at: new Date()
              }, _transactionForUpdation), this._featureRepo.updateByReferenceIds({
                room_id: roomPostsIds
              }, {
                deleted_at: new Date()
              }, _transactionForUpdation)]);
            case 8:
              return _context5.abrupt("return", {
                roomPostsIds: roomPostsIds
              });
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function deleteRoomByUser(_x9, _x10) {
        return _deleteRoomByUser.apply(this, arguments);
      }
      return deleteRoomByUser;
    }())
  }]);
  return RoomService;
}(_shared.Helper); //exports single object of the userService s
module.exports = RoomService;