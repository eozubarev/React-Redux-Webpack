"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reposReducer;
exports.setIsFetching = exports.setRepos = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_REPOS = 'SET_REPOS';
var SET_IS_FETCHING = 'SET_IS_FETCHING';
var defaultState = {
  // Будем получать сюда репозитории с Github
  items: [],
  // Будет true, если будут приходить данные
  isFetching: true
};

function reposReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_REPOS:
      return _objectSpread({}, state, {
        items: action.payload.items,
        isFetching: false
      });

    case SET_IS_FETCHING:
      return _objectSpread({}, state, {
        isFetching: action.payload
      });

    default:
      return state;
  }
}

var setRepos = function setRepos(repos) {
  return {
    type: SET_REPOS,
    payload: repos
  };
};

exports.setRepos = setRepos;

var setIsFetching = function setIsFetching(bool) {
  return {
    type: SET_IS_FETCHING,
    payload: bool
  };
};

exports.setIsFetching = setIsFetching;