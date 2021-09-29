"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BreadcrumbsItem = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "pr-2"
  }, "/"), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: props.href
  }, props.text)));
};

var _default = BreadcrumbsItem;
exports.default = _default;