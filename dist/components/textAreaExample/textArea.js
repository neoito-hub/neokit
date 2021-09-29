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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TextArea = _ref => {
  let {
    name,
    id,
    value,
    rows,
    cols,
    placeholder,
    resize,
    maxHeight,
    onChange
  } = _ref;
  const [textareaSize, setTextareaSize] = (0, _react.useState)({
    row: "2",
    col: "50"
  });
  const [textareaStyle, setTextareaStyle] = (0, _react.useState)(false);
  const [textareaDefault, setTextareaDefault] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    setTextareaStyle(resize === null || resize === void 0 ? void 0 : resize.trim());

    if (!resize || resize.trim() === "smart" || resize.trim() === "default") {
      setTextareaDefault("max-content");
      setTextareaStyle(true);
    } else {
      setTextareaDefault(maxHeight);
      setTextareaStyle(false);
    }

    getProps();
  }, []);

  const getProps = () => {
    if (rows) {
      setTextareaSize(_objectSpread(_objectSpread({}, textareaSize), {}, {
        row: rows,
        col: cols
      }));
    }
  };

  const handleChange = event => {
    onChange(event.target.value);

    if (!resize || resize.trim() === "smart" || resize.trim() === "default") {
      event.target.style.height = "inherit";
      event.target.style.height = "".concat(event.target.scrollHeight, "px");
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex w-full flex-col"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    className: "focus:outline-none p-3 ".concat(textareaStyle ? " overflow-hidden resize-none " : resize === "vertical" ? "resize-y" : resize === "horizontal" ? "resize-x" : resize === "auto" ? "resize" : resize === "none" ? "resize-none" : "resize-none"),
    style: {
      maxHeight: textareaDefault,
      height: "auto"
    },
    name: name,
    id: id,
    value: value,
    placeholder: placeholder,
    rows: textareaSize.row,
    cols: textareaSize.col,
    onChange: event => handleChange(event)
  }));
};

var _default = TextArea;
exports.default = _default;