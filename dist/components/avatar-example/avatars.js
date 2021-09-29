"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

var _avatar = _interopRequireDefault(require("../../assets/images/avatar.svg"));

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Avatars = _ref => {
  let {
    width,
    height,
    path,
    status,
    position,
    color,
    statusImage,
    size
  } = _ref;
  // const [statusPosition , setStatusPosition] = useState("")
  // const [number , setnumber] = useState(0)
  // const WordCount =(str) =>{
  //     const word = str.trim();
  //     console.log();
  //     return  word.split('').length;
  //   }
  const [avatarWidth, setWidth] = (0, _react.useState)("50");
  const [avatarHeight, setHeight] = (0, _react.useState)("50");
  const [avatarpath, setPath] = (0, _react.useState)(_avatar.default);
  const [avatarStatus, setStatus] = (0, _react.useState)(false);
  const [avatarPosition, setPosition] = (0, _react.useState)("top-1 right-1");
  const [avatarColor, setColor] = (0, _react.useState)("green");
  (0, _react.useEffect)(() => {
    getProps();
  }, []);

  const getProps = () => {
    if (size) {
      switch (size) {
        case "small":
          {
            setWidth("15");
            setHeight("15");
            break;
          }

        case "medium":
          {
            setWidth("25");
            setHeight("25");
            break;
          }

        case "large":
          {
            setWidth("50");
            setHeight("50");
            break;
          }

        case "xlarge":
          {
            setWidth("75");
            setHeight("75");
            break;
          }

        case "xxlarge":
          {
            setWidth("100");
            setHeight("100");
            break;
          }

        default:
          setWidth("20");
          setHeight("20");
          break;
      }
    } else {
      width ? setWidth(width) : " ";
      height ? setHeight(height) : "";
    }

    path ? setPath(path) : "";
    status ? setStatus(status) : "";
    color ? setColor(color) : "";
  };

  const getPropsStyle = () => {
    if (position) {
      let str = [];

      if ((position.trim() && position.split(" ")).length <= 2) {
        if (position.includes("top")) str.push(" top-1 ");
        if (position.includes("right")) str.push(" right-1 ");
        if (position.includes("left")) str.push(" left-1 ");
        if (position.includes("bottom")) str.push(" bottom-1");
        return str.join("");
      }
    } else {
      return avatarPosition;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col h-auto w-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-full relative "
  }, status && (statusImage && /*#__PURE__*/_react.default.createElement("span", {
    className: "w-4 h-4  rounded-full border-3 bg-gray-300  border-white absolute flex items-center justify-center ".concat(getPropsStyle())
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: statusImage,
    className: "h-full w-full max-w-max"
  })) || !statusImage && /*#__PURE__*/_react.default.createElement("span", {
    className: "w-4 h-4  rounded-full border-3  border-white   absolute ".concat(getPropsStyle()),
    style: {
      backgroundColor: avatarColor
    }
  })), /*#__PURE__*/_react.default.createElement("img", {
    src: avatarpath,
    width: avatarWidth,
    height: avatarHeight,
    className: "max-w-max object-cover"
  })));
};

var _default = Avatars;
exports.default = _default;