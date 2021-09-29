"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactCodeBlocks = require("react-code-blocks");

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Snipet = props => {
  const [language, changeLanguage] = (0, _react.useState)("jsx"); // const [languageDemo, changeDemo] = useState(props.code["jsx"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "py-3"
  }, /*#__PURE__*/_react.default.createElement(_reactCodeBlocks.CopyBlock, {
    language: language,
    text: props.code,
    showLineNumbers: true,
    theme: _reactCodeBlocks.dracula,
    wrapLines: true,
    codeBlock: true
  }));
};

var _default = Snipet;
exports.default = _default;