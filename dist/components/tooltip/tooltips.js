"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

var _react = _interopRequireWildcard(require("react"));

var _core = require("@popperjs/core");

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Tooltips = _ref => {
  let {
    color,
    children,
    content,
    position,
    component,
    truncate
  } = _ref;
  const [tooltipShow, setTooltipShow] = (0, _react.useState)(false);

  const btnRef = /*#__PURE__*/_react.default.createRef();

  const tooltipRef = /*#__PURE__*/_react.default.createRef();

  const openTooltip = () => {
    (0, _core.createPopper)(btnRef.current, tooltipRef.current, {
      placement: position ? position.trim() : "bottom"
    });
    setTooltipShow(true);
  };

  const closeTooltip = () => {
    setTooltipShow(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: " w-max outline-none focus:outline-none ease-linear transition-all duration-150",
    onMouseEnter: openTooltip,
    onMouseLeave: closeTooltip,
    ref: btnRef
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    onMouseEnter: openTooltip,
    onMouseLeave: closeTooltip,
    className: (tooltipShow ? "" : "hidden ") + " cursor-default border-0 mb-3 block z-50 font-medium leading-normal text-xs max-w-xs text-left no-underline break-words rounded  ",
    ref: tooltipRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "m-1 rounded",
    style: {
      backgroundColor: color ? color : "rgba(0, 0, 0, 0.8);"
    }
  }, component ? /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white  "
  }, component) : /*#__PURE__*/_react.default.createElement("div", {
    className: (truncate ? " truncate " : " ") + " text-white p-1 px-2  "
  }, content)))));
};

var _default = Tooltips;
exports.default = _default;