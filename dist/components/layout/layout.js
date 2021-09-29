"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _router = require("next/router");

require("../../assets/styles/css/tailwind.css");

require("../../assets/styles/css/Home.module.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Layout = _ref => {
  let {
    children
  } = _ref;
  // onClick ={setProfile(false)}
  const router = (0, _router.useRouter)();
  console.log(router);
  const [sidebarOpen, setSidebarOpen] = (0, _react.useState)(false);
  const [profileView, setProfileView] = (0, _react.useState)(false);
  const [theme, setTheme] = (0, _react.useState)(false);
  const [themeColor, setThemeColor] = (0, _react.useState)('indigo-600');

  const getLocation = currentLocation => {
    return currentLocation.includes(router.pathname) ? "text-white bg-" + themeColor : "";
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "layout-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex h-screen bg-gray-200"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setSidebarOpen(false),
    className: "".concat(sidebarOpen ? 'block' : 'hidden', " fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in', " fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-center mt-8"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    className: "h-6 w-6 stroke-current  text-" + themeColor,
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
  }))), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-gray-900  text-2xl mx-2 font-semibold"
  }, "NEO-KIT")), /*#__PURE__*/_react.default.createElement("nav", {
    className: "mt-10 px-5 side-nav overflow-y-hidden hover:overflow-y-auto custom-scroll-bar pb-10 "
  }, /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/avatar"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/avatar") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Avatar"), " ")), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/badge"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/badge",
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/badge") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Badge"), " ")), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/banner"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/banner",
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/banner") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Banner"), " ")), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/breadcrumb"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/breadcrumbs",
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/breadcrumbs") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Breadcrumbs"))), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/button"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/button",
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/button") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Button"))), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/checkbox"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/checkbox",
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/checkbox") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Checkbox"))), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/progress-bar"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/progress-bar") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Progress bar"), " ")), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/progress-indicator"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/progress-indicator") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Progress indicator"), " ")), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/range"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/range") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Range"), " ")), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/tag"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/tag") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Tag"), " ")), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/textarea"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/textarea") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Text area"), " ")), /*#__PURE__*/_react.default.createElement(_link.default, {
    href: "/toggle"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "flex items-center mt-4 py-2 px-6  bg-opacity-25  rounded ".concat(getLocation("/toggle") + ' text-' + themeColor, " ")
  }, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-3"
  }, "Toggle"), " ")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 flex flex-col overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "flex justify-between items-center py-4 px-6 bg-white border-b-4  ".concat('border-' + themeColor)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setSidebarOpen(true),
    className: "text-gray-500 focus:outline-none lg:hidden"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4 6H20M4 12H20M4 18H11",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative mx-4 lg:mx-0"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      setTheme(!theme);
      setProfileView(false);
    },
    className: "flex mx-4 text-gray-600 focus:outline-none cursor-pointer z-30"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    "fill-opacity": ".76",
    d: "M0 20h24v4H0z",
    className: "fill-current text-" + themeColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setTheme(false),
    className: "".concat(theme ? 'fixed' : 'hidden', " inset-0 h-full w-full z-10 ")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(theme ? 'absolute' : 'hidden', " right-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-10 ")
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => {
      setThemeColor('purple-600');
      setTheme(false);
    },
    className: "flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2 cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "w-5 h-5 rounded-full bg-purple-600 mr-2 border-2 border-white"
  }, " "), "   Purple"), /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => {
      setThemeColor('green-600 ');
      setTheme(false);
    },
    className: "flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2 cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "w-5 h-5 rounded-full  bg-green-600 mr-2 border-2 border-white"
  }, " "), "Green"), /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => {
      setThemeColor('pink-600');
      setTheme(false);
    },
    className: "flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2 cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "w-5 h-5 rounded-full bg-pink-600 mr-2 border-2 border-white"
  }, " "), "Pink"), /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => {
      setThemeColor('indigo-600');
      setTheme(false);
    },
    className: "flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2 cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "w-5 h-5 rounded-full bg-indigo-600 mr-2 border-2 border-white"
  }, " "), "Indigo")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none z-20",
    onClick: () => {
      setProfileView(!profileView);
      setTheme(false);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "h-full w-full object-cover",
    src: "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80",
    alt: "Your avatar"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(profileView ? 'fixed' : 'hidden', " inset-0 h-full w-full z-10 "),
    onClick: () => setProfileView(false)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(profileView ? 'absolute' : 'hidden', " right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10")
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-none"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white",
    onClick: () => setProfileView(false)
  }, "Profile"), /*#__PURE__*/_react.default.createElement("li", {
    className: "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white",
    onClick: () => setProfileView(false)
  }, "Appearence"), /*#__PURE__*/_react.default.createElement("li", {
    className: "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white",
    onClick: () => setProfileView(false)
  }, "Logout")))))), /*#__PURE__*/_react.default.createElement("main", {
    className: "flex-1  bg-gray-200 "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: " layout-height overflow-x-hidden overflow-y-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white shodow rounded h-auto p-8 m-6 "
  }, " ", children))))));
};

var _default = Layout;
exports.default = _default;