"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PageData = _ref => {
  let {
    title,
    description,
    subTitle,
    subDescription
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "lg:text-3xl md:text-2xl text-xl text-primary font-normal"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-normal lg:text-base text-sm text-secondary py-3 text-left"
  }, description), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "lg:text-xl md:text-lg text-base text-primary font-normal ".concat(subTitle !== null && subTitle !== void 0 && subTitle.length ? "py-2 pb-4" : "")
  }, subTitle), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-normal lg:text-base text-sm text-secondary  text-left ".concat(subDescription !== null && subDescription !== void 0 && subDescription.length ? "pt-1 pb-2" : "")
  }, subDescription)));
};

var _default = PageData;
exports.default = _default;