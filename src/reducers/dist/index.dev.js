"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _ReposReducer = _interopRequireDefault(require("./ReposReducer"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Сам по React синхронный но тк будем работать с ассинхрон. запросами, эту задачу помогает решить thunk
var rootReducer = (0, _redux.combineReducers)({
  repos: _ReposReducer["default"]
});
var store = (0, _redux.createStore)(rootReducer, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"])));
exports.store = store;