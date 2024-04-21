"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _helper = _interopRequireDefault(require("./helper"));
var _sequelize = _interopRequireDefault(require("sequelize"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Op = _sequelize["default"].Op;

// import { Op } from Sequelize;
var BaseRepository = /*#__PURE__*/function (_Http) {
  _inherits(BaseRepository, _Http);
  function BaseRepository(model) {
    var _this;
    _classCallCheck(this, BaseRepository);
    _this = _callSuper(this, BaseRepository);
    _this.model = model;
    return _this;
  }

  /**
   * Insert multiple records
   * @param {*} data 
   * @param {*} transaction 
   */
  _createClass(BaseRepository, [{
    key: "bulkCreate",
    value: (function () {
      var _bulkCreate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, transaction) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.model.bulkCreate(data, {
                individualHooks: true,
                transaction: transaction
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function bulkCreate(_x, _x2) {
        return _bulkCreate.apply(this, arguments);
      }
      return bulkCreate;
    }()
    /**
     * Insert multiple records
     * @param {*} data 
     * @param {*} transaction 
     */
    )
  }, {
    key: "bulkUpdate",
    value: (function () {
      var _bulkUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, transaction, fields, updateOnDuplicate) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.model.bulkCreate(data, {
                fields: fields,
                updateOnDuplicate: updateOnDuplicate,
                transaction: transaction
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function bulkUpdate(_x3, _x4, _x5, _x6) {
        return _bulkUpdate.apply(this, arguments);
      }
      return bulkUpdate;
    }()
    /**
     * Insert single record
     * @param {*} data 
     * @param {*} transaction 
     */
    )
  }, {
    key: "create",
    value: (function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, transaction) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.model.create(data, {
                individualHooks: true,
                transaction: transaction
              }));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function create(_x7, _x8) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
    /**
     * Remove records
     * @param {*} id 
     * @param {*} _where 
     * @param {*} transaction 
     */
    )
  }, {
    key: "destroy",
    value: (function () {
      var _destroy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id, _where, transaction) {
        var where;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!id && !_where)) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return", null);
            case 2:
              where = id ? {
                id: id
              } : _where;
              return _context4.abrupt("return", this.model.destroy({
                where: where,
                individualHooks: true,
                transaction: transaction
              }));
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function destroy(_x9, _x10, _x11) {
        return _destroy.apply(this, arguments);
      }
      return destroy;
    }()
    /**
     * Checks the existence of record
     * @param {*} id 
     * @param {*} where 
     */
    )
  }, {
    key: "exists",
    value: (function () {
      var _exists = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id, where) {
        var _records, records;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!id) {
                _context5.next = 5;
                break;
              }
              _context5.next = 3;
              return this.findById(id);
            case 3:
              _records = _context5.sent;
              return _context5.abrupt("return", _records && Object.keys(_records).length ? true : false);
            case 5:
              _context5.next = 7;
              return this.model.findAll({
                where: _objectSpread({}, where)
              });
            case 7:
              records = _context5.sent;
              return _context5.abrupt("return", records && records.length ? true : false);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function exists(_x12, _x13) {
        return _exists.apply(this, arguments);
      }
      return exists;
    }()
    /**
     * Fetch all records
     * @param {*} filter 
     * @param {*} options 
     * @param {*} transaction 
     */
    )
  }, {
    key: "findAll",
    value: (function () {
      var _findAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(filter, options, transaction) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.model.findAll(_objectSpread(_objectSpread({
                where: _objectSpread({}, filter)
              }, options), {}, {
                transaction: transaction
              })));
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function findAll(_x14, _x15, _x16) {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
    /**
     * Fetch record by projections
     * @param {*} projections 
     * @param {*} options 
     */
    )
  }, {
    key: "findOne",
    value: (function () {
      var _findOne = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(projections, options, transaction) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.model.findOne(_objectSpread(_objectSpread({
                where: _objectSpread({}, projections)
              }, options), {}, {
                transaction: transaction
              })));
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function findOne(_x17, _x18, _x19) {
        return _findOne.apply(this, arguments);
      }
      return findOne;
    }()
    /**
     * Fetch record by ID
     * @param {*} identifier 
     * @param {*} options 
     */
    )
  }, {
    key: "findById",
    value: (function () {
      var _findById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(identifier, options, transaction) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.model.findByPk(identifier, _objectSpread({}, options), transaction));
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function findById(_x20, _x21, _x22) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
    /**
     * Update Record
     * @param {*} id 
     * @param {*} obj 
     * @param {*} transaction 
     */
    )
  }, {
    key: "update",
    value: (function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id, obj, transaction) {
        var _yield$this$model$upd, _yield$this$model$upd2, number;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.model.update(_objectSpread({}, obj), {
                where: {
                  id: id
                },
                individualHooks: true,
                transaction: transaction
              });
            case 2:
              _yield$this$model$upd = _context9.sent;
              _yield$this$model$upd2 = _slicedToArray(_yield$this$model$upd, 1);
              number = _yield$this$model$upd2[0];
              return _context9.abrupt("return", number ? this.findById(id, {
                transaction: transaction
              }) : null);
            case 6:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function update(_x23, _x24, _x25) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
    /**
     * Update Record By Specific columns
     * @param {*} target 
     * @param {*} obj 
     * @param {*} transaction 
     */
    )
  }, {
    key: "updateByColumnMatched",
    value: (function () {
      var _updateByColumnMatched = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(target, obj, transaction) {
        var _yield$this$model$upd3, _yield$this$model$upd4, number;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.model.update(_objectSpread({}, obj), {
                where: _objectSpread({}, target),
                individualHooks: true,
                transaction: transaction
              });
            case 2:
              _yield$this$model$upd3 = _context10.sent;
              _yield$this$model$upd4 = _slicedToArray(_yield$this$model$upd3, 1);
              number = _yield$this$model$upd4[0];
              return _context10.abrupt("return", number);
            case 6:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function updateByColumnMatched(_x26, _x27, _x28) {
        return _updateByColumnMatched.apply(this, arguments);
      }
      return updateByColumnMatched;
    }()
    /**
     * Update Record By Ids
     * @param {*} id 
     * @param {*} obj 
     * @param {*} transaction 
     */
    )
  }, {
    key: "updateByIds",
    value: (function () {
      var _updateByIds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(ids, obj, transaction) {
        var _yield$this$model$upd5, _yield$this$model$upd6, number;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.model.update(_objectSpread({}, obj), {
                where: {
                  id: _defineProperty({}, Op["in"], _toConsumableArray(ids))
                },
                transaction: transaction
              });
            case 2:
              _yield$this$model$upd5 = _context11.sent;
              _yield$this$model$upd6 = _slicedToArray(_yield$this$model$upd5, 1);
              number = _yield$this$model$upd6[0];
              return _context11.abrupt("return", number ? this.findAll({
                id: _defineProperty({}, Op["in"], ids)
              }) : null);
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function updateByIds(_x29, _x30, _x31) {
        return _updateByIds.apply(this, arguments);
      }
      return updateByIds;
    }()
    /**
    * Update Record By reference ids
    * @param {*} ids
    * @param {*} obj 
    * @param {*} transaction 
    */
    )
  }, {
    key: "updateByReferenceIds",
    value: (function () {
      var _updateByReferenceIds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(ids, obj, transaction) {
        var _yield$this$model$upd7, _yield$this$model$upd8, number;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this.model.update(_objectSpread({}, obj), {
                where: _objectSpread({}, ids),
                transaction: transaction
              });
            case 2:
              _yield$this$model$upd7 = _context12.sent;
              _yield$this$model$upd8 = _slicedToArray(_yield$this$model$upd7, 1);
              number = _yield$this$model$upd8[0];
              return _context12.abrupt("return", number ? this.findAll(_objectSpread({}, ids)) : null);
            case 6:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function updateByReferenceIds(_x32, _x33, _x34) {
        return _updateByReferenceIds.apply(this, arguments);
      }
      return updateByReferenceIds;
    }()
    /**
     * Upsert Record
     * @param {*} values 
     * @param {*} options 
     */
    )
  }, {
    key: "upsert",
    value: (function () {
      var _upsert = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(obj) {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", this.model.upsert(_objectSpread({}, obj), {
                returning: true
              }));
            case 1:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function upsert(_x35) {
        return _upsert.apply(this, arguments);
      }
      return upsert;
    }()
    /**
     * Paginated Record
     * @param {*} page 
     * @param {*} per_page 
     * @param {*} include 
     * @param {*} where 
     * @param {*} attributes 
     * @param {*} order_by 
     * @param {*} order 
     */
    )
  }, {
    key: "pagination",
    value: (function () {
      var _pagination = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(options) {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", this.model.paginate(_objectSpread({}, options)));
            case 1:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function pagination(_x36) {
        return _pagination.apply(this, arguments);
      }
      return pagination;
    }()
    /**
    * raw query 
    * @param {*} sql
    */
    )
  }, {
    key: "executeRawQuery",
    value: (function () {
      var _executeRawQuery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(sql) {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", this.model.sequelize.query(sql));
            case 1:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function executeRawQuery(_x37) {
        return _executeRawQuery.apply(this, arguments);
      }
      return executeRawQuery;
    }()
    /**
    * get count of records 
    * @param {*} column
    * @param {*} where
    * @param {*} include
    */
    )
  }, {
    key: "count",
    value: (function () {
      var _count = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(column, where, include) {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", this.model.count(_objectSpread({
                col: column,
                where: _objectSpread({}, where),
                distinct: true
              }, include)));
            case 1:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function count(_x38, _x39, _x40) {
        return _count.apply(this, arguments);
      }
      return count;
    }()
    /**
    * increment column value by  
    * @param {*} column
    * @param {*} by
    * @param {*} where
    */
    )
  }, {
    key: "increment",
    value: (function () {
      var _increment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(column, by, where, transaction) {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              return _context17.abrupt("return", this.model.increment(column, {
                by: by,
                where: _objectSpread({}, where),
                transaction: transaction
              }));
            case 1:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function increment(_x41, _x42, _x43, _x44) {
        return _increment.apply(this, arguments);
      }
      return increment;
    }())
  }]);
  return BaseRepository;
}(_helper["default"]);
module.exports = BaseRepository;