"use strict";

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _styles = require("@material-ui/core/styles");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { _defaults(o, p); return o; }; return _setPrototypeOf(o, p); }

var styles = {
  wrapper: {
    textAlign: 'center',
    marginTop: '20px'
  }
};
var GenericError = (_dec = (0, _styles.withStyles)(styles), _dec(_class = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(GenericError, _React$Component);

  function GenericError() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = GenericError.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        classes = _this$props.classes,
        error = _this$props.error;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.wrapper
    }, /*#__PURE__*/_react["default"].createElement(_Error["default"], null));
  };

  return GenericError;
}(_react["default"].Component)) || _class);
exports["default"] = GenericError;