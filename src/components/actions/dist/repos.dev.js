"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRepos = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _ReposReducer = require("../../reducers/ReposReducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getRepos = function getRepos() {
  var searchQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "stars:%3E1";

  if (searchQuery == "") {
    searchQuery = "stars:%3E1";
  }

  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch((0, _ReposReducer.setIsFetching)(true));
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get("https://api.github.com/search/repositories?q=".concat(searchQuery, "&sort=stars")));

          case 3:
            response = _context.sent;
            dispatch((0, _ReposReducer.setRepos)(response.data));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.getRepos = getRepos;