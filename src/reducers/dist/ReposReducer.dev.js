"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reposReducer;
exports.setCount = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_COUNT = "SET_COUNT";
var defaultState = {
  // Будем получать сюда репозитории с Github
  items: [],
  // Будет true, если будут приходить данные
  isFetching: true,
  count: 0
};

function reposReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_COUNT:
      return _objectSpread({}, state, {
        count: action.payload
      });
      break;

    default:
      return state;
  }
}

var setCount = function setCount(count) {
  return {
    type: SET_COUNT,
    payload: count
  };
};

exports.setCount = setCount;