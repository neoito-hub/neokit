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

const Checkboxes = _ref => {
  let {
    checked,
    onChange,
    label,
    id,
    name,
    defaultChecked,
    isDisabled,
    size
  } = _ref;
  const [val, setVal] = (0, _react.useState)(false);
  const [control, setcontrol] = (0, _react.useState)(false);
  const [checkboxSize, setCheckboxSize] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (checked && !defaultChecked) {
      setcontrol(true);
    }

    if (defaultChecked) {
      setVal(true);
    }

    setCheckBoxSize();
  }, []);

  const setCheckBoxSize = () => {
    switch (size) {
      case "small":
        {
          setCheckboxSize("w-3 h-3");
          break;
        }

      case "medium":
        {
          setCheckboxSize("w-4 h-4");
          break;
        }

      case "large":
        {
          setCheckboxSize("w-6 h-6");
          break;
        }

      case "xlarge":
        {
          setCheckboxSize("w-8 h-8");
          break;
        }

      default:
        setCheckboxSize("w-4 h-4");
        break;
    }
  };

  const handleChange = () => {
    console.log("enter");

    if (control) {
      console.log("enter ds");
      onChange(!checked);
    } else {
      console.log("enter");
      setVal(!val);
      onChange(!val);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal text-gray-700 "
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "flex gap-3 items-center  ".concat(isDisabled ? " cursor-not-allowed  opacity-50" : " cursor-pointer ")
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "".concat(checkboxSize),
    type: "checkbox",
    checked: checked && !defaultChecked ? checked : val,
    id: id,
    name: name,
    disabled: isDisabled,
    onChange: () => handleChange()
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(size === 'small' ? ' text-xs ' : size === 'large' ? ' text-base ' : size === 'xlarge' ? ' text-lg ' : 'text-sm')
  }, " ", label)));
};

var _default = Checkboxes;
exports.default = _default;