'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridStackItem = function (_React$Component) {
  _inherits(GridStackItem, _React$Component);

  function GridStackItem(props) {
    _classCallCheck(this, GridStackItem);

    return _possibleConstructorReturn(this, (GridStackItem.__proto__ || Object.getPrototypeOf(GridStackItem)).call(this, props));
  }

  _createClass(GridStackItem, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return GridStackItem;
}(_react2.default.Component);

exports.default = GridStackItem;


GridStackItem.propTypes = {
  autoPosition: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.node,
  height: _react2.default.PropTypes.number,
  id: _react2.default.PropTypes.string.isRequired,
  maxHeight: _react2.default.PropTypes.number,
  maxWidth: _react2.default.PropTypes.number,
  minHeight: _react2.default.PropTypes.number,
  minWidth: _react2.default.PropTypes.number,
  onShouldUpdate: _react2.default.PropTypes.func,
  width: _react2.default.PropTypes.number,
  x: _react2.default.PropTypes.number,
  y: _react2.default.PropTypes.number
};

GridStackItem.defaultProps = {
  onShouldUpdate: function onShouldUpdate() {
    return false;
  }
};