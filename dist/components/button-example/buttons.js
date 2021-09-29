"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _link = _interopRequireDefault(require("next/link"));

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Buttons = _ref => {
  let {
    children,
    appearance,
    href,
    isDisabled,
    isSelected,
    isLoading,
    shouldFitContainer,
    icon,
    position
  } = _ref;
  const [buttonColor, setButtonColor] = (0, _react.useState)("");
  const [buttonBGColor, setButtonBGColor] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    getProps();
    getAttributes();
    console.log(isSelected);
  }, []);

  const getProps = () => {
    if (appearance === "default" || !appearance) {
      setButtonColor(" text-gray-700 ");
      setButtonBGColor(" bg-gray-200 hover:bg-gray-300 ");
    } else if (appearance === "primary") {
      setButtonColor(" text-white");
      setButtonBGColor(" bg-blue-700 hover:opacity-70 ");
    } else if (appearance === ("subtle" || "secondary")) {
      setButtonColor(" text-gray-700 ");
      setButtonBGColor("bg-transparent hover:bg-gray-200 ");
    } else if (appearance === "link") {
      setButtonColor(" text-blue-700 ");
      setButtonBGColor(" bg-transparent hover:underline ");
    } else if (appearance === ("subtle-link" || "secondary-link")) {
      setButtonColor(" text-gray-500");
      setButtonBGColor(" bg-transparent hover:underline ");
    } else if (appearance === "warning") {
      setButtonColor(" text-gray-700");
      setButtonBGColor(" bg-yellow-400 hover:opacity-70 ");
    } else if (appearance === "danger") {
      setButtonColor(" text-white");
      setButtonBGColor(" bg-red-500 hover:opacity-70 ");
    }
  };

  const getAttributes = () => {
    if (isDisabled) {
      setButtonColor(" text-gray-700 cursor-not-allowed ");
      setButtonBGColor(" bg-gray-300 opacity-60 ");
    } else if (isSelected) {
      setButtonColor(" text-white");
      setButtonBGColor(" bg-blue-900 hover:opacity-100  sijo");
    } else if (isLoading) {}
  };

  const buttonClick = () => {};

  return /*#__PURE__*/_react.default.createElement("div", null, appearance && appearance === "link" || appearance === ("subtle-link" || "secondary-link") ? /*#__PURE__*/_react.default.createElement("a", {
    href: href
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    tabIndex: "0",
    onClick: () => buttonClick(),
    className: "focus:outline-none rounded items-baseline inline-flex px-2.5  w-auto align-middle cursor-pointer truncate text-center  font-medium py-1.5 text-sm tracking-wide  ".concat(isDisabled ? 'text-gray-700 cursor-not-allowed  bg-gray-300 opacity-60 ' : '', "  ") + buttonColor + buttonBGColor
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "flex-grow flex-shrink my-0 mx-0.5 truncate transition "
  }, children))) : /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    tabIndex: "0",
    onClick: () => buttonClick(),
    className: "rounded items-baseline inline-flex px-2.5   align-middle  truncate text-center  font-medium py-1.5 text-sm tracking-wide focus:outline-none ".concat(isLoading ? " cursor-default" : "cursor-pointer ", "  ").concat(shouldFitContainer ? " w-full" : " w-auto ", "  ").concat(isDisabled ? 'text-gray-700 cursor-not-allowed  bg-gray-300 opacity-60 ' : '', " ") + buttonColor + buttonBGColor,
    style: {
      opacity: isLoading && "100%"
    },
    disabled: isDisabled
  }, isLoading ? /*#__PURE__*/_react.default.createElement("span", {
    className: " w-20 h-5 flex items-center justify-center"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "animate-spin h-5 w-5 text-white",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-center gap-1 ".concat(icon && position === 'after' ? 'flex-row-reverse' : 'flex-row', " ")
  }, icon && /*#__PURE__*/_react.default.createElement("img", {
    src: icon,
    className: "h-full w-full max-w-max"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "flex flex-grow flex-shrink my-0 mx-0.5 truncate transition  "
  }, children))));
};

var _default = Buttons;
exports.default = _default;