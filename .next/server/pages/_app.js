(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rangeslider */ "react-rangeslider");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-scroll-position */ "use-scroll-position");
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_skin_skin_3_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/skin/skin-3.css */ "./css/skin/skin-3.css");
/* harmony import */ var _css_skin_skin_3_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_3_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/switcher.css */ "./styles/switcher.css");
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Owner\\Desktop\\Datatech-new\\datatech-new-et-design\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 //import "../css/skin/skin-1.css";
//import "../css/skin/skin-2.css";






function MyApp({
  Component,
  pageProps
}) {
  const {
    0: toggle1,
    1: setToggle1
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: body_,
    1: setbody_
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: layout,
    1: setLayout
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("wide");
  const {
    0: header,
    1: setHeader
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("fixed");
  const {
    0: header_,
    1: setHeader_
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: sliderValu,
    1: setSliderValu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default()();

  function toggle() {
    setToggle1(!toggle1);
  }

  const layoutChange = name => {
    setLayout(name);
    body_.className = name;
  };

  const backGroundChage = value => {
    if (value === "color_1") {
      body_.style.backgroundColor = "rgb(137, 110, 255)";
    } else if (value === "color_2") {
      body_.style.backgroundColor = "rgb(245, 95, 141)";
    } else if (value === "color_3") {
      body_.style.backgroundColor = "rgb(239, 20, 110)";
    }
  };

  const backGroundImage = value => {
    body_.style.backgroundImage = `url(${value})`;
    body_.style.backgroundSize = "auto";
  };

  const chageHeader = value => {
    setHeader(value);

    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = value => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

  header === "fixed" && scrollPosition > 10 ? header_ && header_[0].classList.add("is-fixed") : header_ && header_[0].classList.remove("is-fixed");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "page-wraper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://1.envato.market/VLMVO",
      target: "_blank",
      className: "bt-buy-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "ti-shopping-cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Buy Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "https://w3itexperts.ticksy.com",
      target: "_blank",
      className: "bt-support-now theme-btn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "ti-headphone-alt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "scroltop icon-up",
        type: "button",
        style: {
          display: "inline-block"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./css/skin/skin-3.css":
/*!*****************************!*\
  !*** ./css/skin/skin-3.css ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-rangeslider":
/*!************************************!*\
  !*** external "react-rangeslider" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-rangeslider");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "use-scroll-position":
/*!**************************************!*\
  !*** external "use-scroll-position" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("use-scroll-position");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1hci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QtcmFuZ2VzbGlkZXJcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwidXNlLXNjcm9sbC1wb3NpdGlvblwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidG9nZ2xlMSIsInNldFRvZ2dsZTEiLCJ1c2VTdGF0ZSIsImJvZHlfIiwic2V0Ym9keV8iLCJsYXlvdXQiLCJzZXRMYXlvdXQiLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJoZWFkZXJfIiwic2V0SGVhZGVyXyIsInNsaWRlclZhbHUiLCJzZXRTbGlkZXJWYWx1IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbFBvc2l0aW9uIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJ0b2dnbGUiLCJsYXlvdXRDaGFuZ2UiLCJuYW1lIiwiY2xhc3NOYW1lIiwiYmFja0dyb3VuZENoYWdlIiwidmFsdWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tHcm91bmRJbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiY2hhZ2VIZWFkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbkNoYW5nZSIsInBhZGRpbmciLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVD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LEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkY7QUFBQSxrQkFERjtBQWlDRDs7QUFFRCwrREFBZXZDLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXJhbmdlc2xpZGVyXCI7XHJcbmltcG9ydCBcInJlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcInVzZS1zY3JvbGwtcG9zaXRpb25cIjtcclxuLy9pbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTEuY3NzXCI7XHJcbi8vaW1wb3J0IFwiLi4vY3NzL3NraW4vc2tpbi0yLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N3aXRjaGVyLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt0b2dnbGUxLCBzZXRUb2dnbGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm9keV8sIHNldGJvZHlfXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xheW91dCwgc2V0TGF5b3V0XSA9IHVzZVN0YXRlKFwid2lkZVwiKTtcclxuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoXCJmaXhlZFwiKTtcclxuICBjb25zdCBbaGVhZGVyXywgc2V0SGVhZGVyX10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzbGlkZXJWYWx1LCBzZXRTbGlkZXJWYWx1XSA9IHVzZVN0YXRlKDIwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldGJvZHlfKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcclxuICAgIHNldEhlYWRlcl8oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tYmFyLXdyYXBlclwiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBsZXQgc2Nyb2xsUG9zaXRpb24gPSB1c2VTY3JvbGxQb3NpdGlvbigpO1xyXG4gIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgIHNldFRvZ2dsZTEoIXRvZ2dsZTEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGF5b3V0Q2hhbmdlID0gKG5hbWUpID0+IHtcclxuICAgIHNldExheW91dChuYW1lKTtcclxuICAgIGJvZHlfLmNsYXNzTmFtZSA9IG5hbWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFja0dyb3VuZENoYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiY29sb3JfMVwiKSB7XHJcbiAgICAgIGJvZHlfLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDEzNywgMTEwLCAyNTUpXCI7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImNvbG9yXzJcIikge1xyXG4gICAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNDUsIDk1LCAxNDEpXCI7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImNvbG9yXzNcIikge1xyXG4gICAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMzksIDIwLCAxMTApXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFja0dyb3VuZEltYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dmFsdWV9KWA7XHJcbiAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiYXV0b1wiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYWdlSGVhZGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRIZWFkZXIodmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZpeGVkXCIpIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2xpZGVyVmFsdSh2YWx1ZSk7XHJcbiAgICBib2R5Xy5zdHlsZS5wYWRkaW5nID0gdmFsdWUgKyBcInB4XCI7XHJcbiAgfTtcclxuXHJcbiAgaGVhZGVyID09PSBcImZpeGVkXCIgJiYgc2Nyb2xsUG9zaXRpb24gPiAxMFxyXG4gICAgPyBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcImlzLWZpeGVkXCIpXHJcbiAgICA6IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcGVyXCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vMS5lbnZhdG8ubWFya2V0L1ZMTVZPXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0LWJ1eS1ub3cgdGhlbWUtYnRuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXNob3BwaW5nLWNhcnRcIiAvPlxyXG4gICAgICAgIDxzcGFuPkJ1eSBOb3c8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93M2l0ZXhwZXJ0cy50aWNrc3kuY29tXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0LXN1cHBvcnQtbm93IHRoZW1lLWJ0blwiXHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1oZWFkcGhvbmUtYWx0XCIgLz5cclxuICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjdG9wXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2x0b3AgaWNvbi11cFwiXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy11cFwiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmFuZ2VzbGlkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXNjcm9sbC1wb3NpdGlvblwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==