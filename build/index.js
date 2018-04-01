'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  table {\n    border-spacing: 0;\n    border-collapse: collapse;\n    width: 100%;\n    font-family: -apple-system, \'BlinkMacSystemFont\', \'San Francisco\', \'Roboto\',\n      \'Segoe UI\', \'Helvetica Neue\', sans-serif;\n    font-size: 1.4rem;\n    color: #1a1919;\n\n    tbody {\n      tr {\n        :nth-child(odd) {\n          background: #fafbfc;\n        }\n        :last-child td {\n          border-bottom-width: 0;\n        }\n        :hover {\n          background-color: #eee;\n        }\n        :active {\n          background-color: #ddd;\n        }\n      }\n    }\n\n    th,\n    td {\n      padding: 1.2rem 1.5rem;\n      text-align: left;\n    }\n    th {\n      font-weight: normal;\n      border-bottom: 0.1rem solid #d3dbe2;\n    }\n    tr:hover,\n    th:hover {\n      cursor: pointer;\n    }\n    th:empty:hover {\n      cursor: default;\n    }\n    td .icon-image {\n      float: left;\n      display: inline-block;\n      min-width: 2.4rem;\n      min-height: 2.4rem;\n    }\n    td .icon-image:after {\n      min-width: 2.4rem;\n      min-height: 2.4rem;\n      background-size: 24px 24px;\n      /* IE requires pixels. Using cover/contain/rem values cause blurry edges */\n      vertical-align: middle;\n      display: inline-block;\n    }\n    &.results tr td {\n      padding-top: 0.8rem;\n      padding-bottom: 0.8rem;\n    }\n    &.summary th {\n      padding: 0 0 2rem 0;\n      border: 0;\n      font-size: 1.2rem;\n      font-weight: 600;\n      text-transform: uppercase;\n    }\n    &.summary th:hover {\n      cursor: auto;\n      background-color: transparent;\n      color: inherit;\n    }\n    &.summary th span {\n      float: right;\n      color: #707070;\n      text-transform: none;\n      font-weight: 300;\n    }\n    &.summary tr:hover {\n      background-color: transparent;\n    }\n    &.summary tr td {\n      padding: 0.4rem 0;\n      border: 0;\n    }\n    &.summary tr td:first-child {\n      width: 67%;\n    }\n    &.summary tr td:last-child {\n      text-align: right;\n      color: #95a7b7;\n    }\n  }\n'], ['\n  table {\n    border-spacing: 0;\n    border-collapse: collapse;\n    width: 100%;\n    font-family: -apple-system, \'BlinkMacSystemFont\', \'San Francisco\', \'Roboto\',\n      \'Segoe UI\', \'Helvetica Neue\', sans-serif;\n    font-size: 1.4rem;\n    color: #1a1919;\n\n    tbody {\n      tr {\n        :nth-child(odd) {\n          background: #fafbfc;\n        }\n        :last-child td {\n          border-bottom-width: 0;\n        }\n        :hover {\n          background-color: #eee;\n        }\n        :active {\n          background-color: #ddd;\n        }\n      }\n    }\n\n    th,\n    td {\n      padding: 1.2rem 1.5rem;\n      text-align: left;\n    }\n    th {\n      font-weight: normal;\n      border-bottom: 0.1rem solid #d3dbe2;\n    }\n    tr:hover,\n    th:hover {\n      cursor: pointer;\n    }\n    th:empty:hover {\n      cursor: default;\n    }\n    td .icon-image {\n      float: left;\n      display: inline-block;\n      min-width: 2.4rem;\n      min-height: 2.4rem;\n    }\n    td .icon-image:after {\n      min-width: 2.4rem;\n      min-height: 2.4rem;\n      background-size: 24px 24px;\n      /* IE requires pixels. Using cover/contain/rem values cause blurry edges */\n      vertical-align: middle;\n      display: inline-block;\n    }\n    &.results tr td {\n      padding-top: 0.8rem;\n      padding-bottom: 0.8rem;\n    }\n    &.summary th {\n      padding: 0 0 2rem 0;\n      border: 0;\n      font-size: 1.2rem;\n      font-weight: 600;\n      text-transform: uppercase;\n    }\n    &.summary th:hover {\n      cursor: auto;\n      background-color: transparent;\n      color: inherit;\n    }\n    &.summary th span {\n      float: right;\n      color: #707070;\n      text-transform: none;\n      font-weight: 300;\n    }\n    &.summary tr:hover {\n      background-color: transparent;\n    }\n    &.summary tr td {\n      padding: 0.4rem 0;\n      border: 0;\n    }\n    &.summary tr td:first-child {\n      width: 67%;\n    }\n    &.summary tr td:last-child {\n      text-align: right;\n      color: #95a7b7;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('./components');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headers = _props.headers,
          body = _props.body;

      return _react2.default.createElement(
        TableWrap,
        null,
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(_components.Header, { headers: headers }),
          _react2.default.createElement(_components.Body, _extends({}, body, { headers: headers }))
        )
      );
    }
  }]);

  return Table;
}(_react.Component);

var TableWrap = _styledComponents2.default.div(_templateObject);

exports.default = Table;