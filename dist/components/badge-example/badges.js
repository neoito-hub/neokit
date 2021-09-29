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

const Badges = _ref => {
  let {
    children,
    appearance,
    max
  } = _ref;
  const [badgeColor, setBadgeColor] = (0, _react.useState)("");
  const [badgeBGColor, setBadgeBGColor] = (0, _react.useState)("");
  const [badgeValue, setBadgeValue] = (0, _react.useState)("0");
  (0, _react.useEffect)(() => {
    getProps();
  }, []);

  const getProps = () => {
    if (appearance === "default" || !appearance) {
      setBadgeColor("text-grey-600");
      setBadgeBGColor(" bg-gray-200 ");
      setBadgeValue(children);
    } else if (appearance === "primary") {
      setBadgeColor("text-gray-200");
      setBadgeBGColor(" bg-blue-700");
      setBadgeValue(children);
    } else if (appearance === "primaryInverted") {
      setBadgeColor(" text-blue-500 ");
      setBadgeBGColor(" bg-white");
      setBadgeValue(children);
    } else if (appearance === "important") {
      setBadgeColor(" text-gray-200");
      setBadgeBGColor(" bg-red-500");
      setBadgeValue(children);
    } else if (appearance === "added") {
      setBadgeColor(" text-green-700 ");
      setBadgeBGColor(" bg-green-100 ");

      if (max && max < children) {
        return setBadgeValue(max + "+");
      } else if (max) return setBadgeValue(children + "+");else setBadgeValue(children);
    } else if (appearance === "removed") {
      setBadgeColor(" text-red-700 ");
      setBadgeBGColor(" bg-red-100 ");
      setBadgeValue(children);
    } //  else if(appearance === 'removed'){
    //     setBadgeColor(' text-red-700 ')
    //     setBadgeBGColor(' bg-red-100 ');
    //  }

  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col px-10 ".concat(appearance === "primaryInverted" ? "w-full py-4 bg-blue-700  " : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm leading-none font-normal rounded-full px-2 py-1 w-max flex items-center justify-center " + badgeColor + badgeBGColor
  }, badgeValue));
};

var _default = Badges;
exports.default = _default;