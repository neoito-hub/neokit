"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

var _react = _interopRequireWildcard(require("react"));

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ProgressIndicators = _ref => {
  let {
    values,
    onChange,
    selectedIndex,
    appearance,
    size,
    spacing
  } = _ref;
  const count = 1;
  const [buttonStyle, setButtonStyle] = (0, _react.useState)(" ");
  const dots = ""; //   const setDots = (index) => {
  //     setButtonState(index);
  //     onChange(index);
  //   };
  //   if(value) valueCount(value);
  //   else  valueCount(count);

  (0, _react.useEffect)(() => {}, []);

  const getActive = () => {
    if (appearance && appearance.trim() === "primary") return " bg-blue-600 ";else if (appearance && appearance.trim() === "help") return " bg-purple-600 ";else if (appearance && appearance.trim() === "inverted") return " bg-white ";else return " bg-black ";
  };

  const getInActive = () => {
    if (appearance && appearance.trim() === "primary") return " bg-blue-300 ";else if (appearance && appearance.trim() === "help") return " bg-purple-300 ";else if (appearance && appearance.trim() === "inverted") return " bg-gray-400 ";else return " bg-gray-400 ";
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex  w-auto ".concat((spacing === null || spacing === void 0 ? void 0 : spacing.trim()) === 'comfortable' ? 'gap-2.5' : (spacing === null || spacing === void 0 ? void 0 : spacing.trim()) === 'cozy' ? ' gap-1 ' : (spacing === null || spacing === void 0 ? void 0 : spacing.trim()) === 'compact' ? ' gap-0.5 ' : ' gap-2 ')
  }, values && values.length > 0 ? values.map((elementInArray, index) => /*#__PURE__*/_react.default.createElement("li", {
    className: "",
    key: index,
    onClick: () => onChange(index + 1)
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat((size === null || size === void 0 ? void 0 : size.trim()) === 'small' ? 'h-1.5 w-1.5' : (size === null || size === void 0 ? void 0 : size.trim()) === 'large' ? ' h-3 w-3 ' : ' h-2 w-2 ', "  rounded-full border border-gray-400  cursor-pointer ").concat(selectedIndex === index + 1 ? getActive() : getInActive())
  }, " "))) : [...Array(count)].map((elementInArray, index) => /*#__PURE__*/_react.default.createElement("li", {
    className: "",
    key: index,
    onClick: () => onChange(index + 1)
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat((size === null || size === void 0 ? void 0 : size.trim()) === 'small' ? 'h-1.5 w-1.5' : (size === null || size === void 0 ? void 0 : size.trim()) === 'large' ? ' h-3 w-3 ' : ' h-2 w-2 ', "  rounded-full border border-gray-400  cursor-pointer ").concat(selectedIndex === index + 1 ? getActive() : getInActive())
  }, " ")))));
};

var _default = ProgressIndicators;
exports.default = _default;