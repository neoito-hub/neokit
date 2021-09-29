"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _warning = _interopRequireDefault(require("../../assets/images/warning.svg"));

var _error = _interopRequireDefault(require("../../assets/images/error.svg"));

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Banners = _ref => {
  let {
    children,
    color,
    appearance,
    icon
  } = _ref;
  const [bannerColor, setBannerColor] = (0, _react.useState)('');
  const [bannerBGColor, setBannerBGColor] = (0, _react.useState)('');
  const [bannerIcon, setBannerIcon] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {
    getProps();
  }, []);

  const getProps = () => {
    if (appearance === 'warning' || !appearance) {
      color ? setBannerColor(color) : setBannerColor('#253858');
      icon ? setBannerIcon(icon) : setBannerIcon(_warning.default);
      setBannerBGColor(' bg-yellow-400 ');
    } else if (appearance === 'error') {
      color ? setBannerColor(color) : setBannerColor('#FFF');
      icon ? setBannerIcon(icon) : setBannerIcon(_error.default);
      setBannerBGColor(' bg-red-500 ');
    } else if (appearance === 'announcement') {
      color ? setBannerColor(color) : setBannerColor('#FFF');
      setBannerBGColor(' bg-gray-500 ');
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-center  hover:overflow-auto h-12 px-10 rounded" + bannerBGColor
  }, appearance != 'announcement' && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-base"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: bannerIcon,
    alt: appearance,
    className: " max-w-max"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "p-1 truncate  flex-initial text-sm font-medium tracking-wide  ".concat(appearance === 'announcement' ? 'hover:whitespace-normal hover:mt-10' : ''),
    style: {
      color: bannerColor
    }
  }, children)));
};

var _default = Banners;
exports.default = _default;