"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPages = createPages;

function createPages(pages, pagesCount, currentPage) {
  if (pagesCount > 10) {
    if (currentPage > 5) {
      for (var i = currentPage - 4; i <= currentPage + 5; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    } else {
      for (var _i = 1; _i <= 10; _i++) {
        pages.push(_i);
        if (_i == pagesCount) break;
      }
    }
  } else {
    for (var _i2 = 1; _i2 <= pagesCount; _i2++) {
      pages.push(_i2);
    }
  }
}