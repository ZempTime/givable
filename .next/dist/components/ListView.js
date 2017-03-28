'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chris/code/givable/components/ListView.js';


var ListView = function (_Component) {
  (0, _inherits3.default)(ListView, _Component);

  function ListView() {
    (0, _classCallCheck3.default)(this, ListView);

    return (0, _possibleConstructorReturn3.default)(this, (ListView.__proto__ || (0, _getPrototypeOf2.default)(ListView)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement('ol', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, 'First Item'), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'Second Item')), _react2.default.createElement(_link2.default, { href: '/items/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, '+ Add an Item')));
    }
  }]);

  return ListView;
}(_react.Component);

exports.default = ListView;