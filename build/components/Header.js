'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHead = function TableHead(_ref) {
  var headers = _ref.headers;
  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      null,
      headers.map(function (header) {
        return _react2.default.createElement(
          'th',
          { key: header.access },
          header.title
        );
      })
    )
  );
};

exports.default = TableHead;