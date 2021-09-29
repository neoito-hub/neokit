"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Ranges = _ref => {
  let {
    step,
    min,
    max,
    onChange,
    value,
    isDisabled
  } = _ref;
  const [val, setVal] = (0, _react.useState)(50);

  const handleChange = event => {
    if (onChange) onChange(event.target.value);else setVal(event.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: " ".concat(isDisabled ? "cursor-not-allowed" : "cursor-pointer", "  w-full "),
    id: "typeinp",
    type: "range",
    disabled: isDisabled,
    min: min,
    max: max,
    value: onChange ? value : val,
    onChange: event => handleChange(event),
    step: step
  })));
};

var _default = Ranges;
exports.default = _default;