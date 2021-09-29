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

const Toggler = _ref => {
  let {
    color,
    name,
    id,
    onChange,
    value,
    disabled,
    icon
  } = _ref;
  const [toggleActive, setToggleActive] = (0, _react.useState)(false);
  const [toggleColor, setToggleColor] = (0, _react.useState)("");

  const getColor = () => {
    return color ? color : "#00FF7F";
  };

  const handleChange = () => {
    setToggleActive(!toggleActive);
    if (onChange) onChange(!toggleActive);
  };

  (0, _react.useEffect)(() => {
    if (value) setToggleActive(value);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    name: name,
    id: id,
    class: "flex justify-between items-center w-max relative  ".concat(disabled ? "  opacity-40 cursor-not-allowed" : " cursor-pointer", " ") // onClick={() => {setToggleActive(!toggleActive); onChange();}}
    ,
    onClick: e => {
      disabled ? e.stopPropagation() : handleChange();
    } // onChange={(value) => setValues(value)}

  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "absolute  top-2 ".concat(toggleActive ? 'left-1.5' : 'right-1.5 -ml-1 ', " ")
  }, icon && toggleActive && /*#__PURE__*/_react.default.createElement("img", {
    src: "assets/tick.svg",
    width: "10",
    height: "10",
    className: " max-w-max"
  }), icon && !toggleActive && /*#__PURE__*/_react.default.createElement("img", {
    src: "assets/close.svg",
    width: "8",
    height: "8",
    className: " max-w-max"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "w-11 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out\" ".concat(toggleActive ? "bg-green-400" : "", " "),
    style: {
      backgroundColor: toggleActive ? getColor() : "#C0C0C0"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out\" ".concat(toggleActive ? "translate-x-5" : "")
  }))));
};

var _default = Toggler;
exports.default = _default;