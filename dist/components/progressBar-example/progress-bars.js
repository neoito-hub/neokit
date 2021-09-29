"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ProgressBars = _ref => {
  let {
    value,
    isIndeterminate
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "relative pt-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-gray-300"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: value || !isIndeterminate ? value + '%' : '100%'
    },
    class: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-700 ".concat(isIndeterminate ? 'progress-bar-value' : '')
  })));
};

var _default = ProgressBars;
exports.default = _default;