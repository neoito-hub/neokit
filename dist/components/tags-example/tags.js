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

const Tags = _ref => {
  let {
    children,
    href,
    removable,
    position,
    rounded,
    color
  } = _ref;
  const [tagsState, setTagsState] = (0, _react.useState)("");
  const [tagsRemove, setTagRemove] = (0, _react.useState)(true);
  const [tagsColors, setTagColor] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {
    getProps();
    getTagsColor();
  }, []);

  const getProps = () => {
    if (href) setTagsState("cursor-pointer hover:bg-gray-200");else setTagsState("cursor-default");
  };

  const getTagsColor = () => {
    console.log('enyer');

    if ((!color || color) === "standard") {
      setTagColor('');
    } else if (color === "black") {
      setTagColor('white');
    } else {
      setTagColor('black');
    }

    console.log(tagsColors);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, tagsRemove && /*#__PURE__*/_react.default.createElement("button", {
    class: "text-sm font-medium inline-flex items-center justify-center py-1 px-2  rounded  text-gray-600 bg-gray-100  focus:outline-none  ".concat(removable ? 'hover:text-red-400 pointer-events-none hover:bg-red-100 ' : '', " , ").concat(removable && href ? 'hover:text-gray-500 pointer-events-auto' : '', " ").concat(rounded ? ' rounded-3xl' : 'rounded-sm', " ") + tagsState,
    style: {
      backgroundColor: color ? color : '',
      color: tagsColors ? tagsColors : ''
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    className: " flex items-center justify-center gap-1 ".concat(href ? "hover:underline text-blue-500 " : "no-underline", " ").concat(!position || position === 'before' ? 'flex-row' : 'flex-row-reverse'),
    style: {
      color: tagsColors ? tagsColors : ''
    }
  }, children), removable && /*#__PURE__*/_react.default.createElement("button", {
    className: "text-sm leading-none px-1 focus:outline-none pointer-events-auto hover:text-gray-500",
    onClick: () => setTagRemove(false)
  }, "\xD7")));
};

var _default = Tags;
exports.default = _default;