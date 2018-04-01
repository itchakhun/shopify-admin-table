'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(_ref) {
  var rows = _ref.rows,
      renderColumn = _ref.renderColumn,
      headers = _ref.headers,
      onRowClick = _ref.onRowClick;

  return _react2.default.createElement(
    'tbody',
    null,
    rows.map(function (row) {
      return _react2.default.createElement(
        'tr',
        { onClick: function onClick(ev) {
            return console.log(ev.target);
          }, key: row.id },
        headers.map(function (header) {
          return _react2.default.createElement(
            'td',
            { key: header.access },
            renderColumn(row[header.access])
          );
        })
      );
    })
  );
};

Body.propTypes = {
  rows: _propTypes2.default.array.isRequired,
  renderColumn: _propTypes2.default.func.isRequired
};

exports.default = Body;