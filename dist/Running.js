/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/modal.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/modal.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Modal Styles */\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 200;\r\n  inset: 0;\r\n  overflow: auto;\r\n  background-color: rgba(193, 199, 208, 0.85);\r\n  backdrop-filter: blur(6px);\r\n}\r\n\r\n.overlay.open {\r\n  display: block;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 90vw;\r\n  min-width: 21em;\r\n  max-width: 60rem;\r\n  min-height: 10rem;\r\n  max-height: 90vh;\r\n  background: #fff;\r\n  z-index: 300;\r\n  border-radius: 0.25rem;\r\n  padding: 1rem;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.modal.open {\r\n  display: block;\r\n}\r\n\r\n.modal__close-icon {\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal__body {\r\n  padding: 2rem 1rem;\r\n  max-width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.modal__artwork__comment__avatar > span {\r\n  color: #fff;\r\n}\r\n\r\n.modal__body span {\r\n  color: #000;\r\n}\r\n\r\n.modal__artwork {\r\n  width: 100%;\r\n}\r\n\r\n.modal__artwork__stats {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.modal__artwork__stat {\r\n  display: flex;\r\n  gap: 0.75rem;\r\n}\r\n\r\n.modal__artwork__stat__title {\r\n  font-weight: 600;\r\n}\r\n\r\n.modal__artwork__stat > div {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.modal__exhibition-history > span {\r\n  font-weight: 600;\r\n  display: block;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.modal__artwork__comment__date span {\r\n  color: rgb(83, 82, 81);\r\n}\r\n\r\n.modal__exhibition-history__item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n/* Artwork's Comments */\r\n.modal__artwork__comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n\r\n.modal__artwork__comments__header {\r\n  padding-top: 1rem;\r\n}\r\n\r\n.modal__artwork__comment {\r\n  width: 100%;\r\n  min-width: 360px;\r\n  max-width: 40rem;\r\n  min-height: 120px;\r\n  padding: 1.25rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  box-shadow: 2px 3px 9px 1px rgba(0, 0, 0, 0.13);\r\n}\r\n\r\n.modal__artwork__comment__header {\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n}\r\n\r\n.modal__artwork__comment__avatar {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  background: #e18128;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 1.15rem;\r\n}\r\n\r\n.modal__artwork__comment__username {\r\n  font-weight: 600;\r\n}\r\n\r\n.modal__artwork__comment__date {\r\n  margin-left: auto;\r\n}\r\n\r\n.modal__artwork__comment__body {\r\n  line-height: 1.5;\r\n}\r\n\r\n/* Add Comment Section  */\r\n\r\n.add-comment-sec {\r\n  max-width: 40rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.add-comment__form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  max-width: 50rem;\r\n}\r\n\r\n.add-comment__form__label {\r\n  position: relative;\r\n}\r\n\r\n.add-comment__form__label > span {\r\n  position: absolute;\r\n  background-color: #fff;\r\n  padding: 0 0.5rem;\r\n  top: 0.5rem;\r\n  left: 0.5rem;\r\n  transition: transform 150ms ease-in;\r\n}\r\n\r\n.add-comment__form__label > span.float-label {\r\n  transform: translateY(-1.5rem);\r\n}\r\n\r\n.add-comment__form__input {\r\n  font-size: 1rem;\r\n  font-family: sans-serif;\r\n  border: 1px solid rgb(160, 160, 160);\r\n  border-radius: 0.25rem;\r\n  padding: 1rem 0.5rem;\r\n  min-width: 15rem;\r\n  width: 100%;\r\n  background-color: #fff;\r\n}\r\n\r\n.add-comment__form__errors,\r\n.add-comment__form__success {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.add-comment__form__errors > span,\r\n.add-comment__form__success > span {\r\n  font-size: 0.8rem;\r\n  padding: 0.25rem 0.5rem;\r\n  width: max-content;\r\n  border-radius: 0.15rem;\r\n}\r\n\r\n.add-comment__form__errors > span {\r\n  background: rgb(252, 206, 206);\r\n  color: rgb(74, 29, 18);\r\n}\r\n\r\n.add-comment__form__success > span {\r\n  background: rgb(170, 252, 179);\r\n  color: rgb(29, 88, 29);\r\n}\r\n\r\n.add-comment__form__btn {\r\n  cursor: pointer;\r\n  width: max-content;\r\n  padding: 0.5rem 1.25rem;\r\n  color: #fff;\r\n  font-size: 1.2rem;\r\n  background-color: #e18128;\r\n  border: 2px solid #e18128;\r\n  border-radius: 0.5rem;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.add-comment__form__btn:hover {\r\n  color: #e18128;\r\n  background-color: #faf6f1;\r\n}\r\n\r\n.add-comment__form__btn:active {\r\n  transform: translateY(3px);\r\n}\r\n\r\n.modal__artwork__stat > div > span {\r\n  background-color: rgb(208, 206, 206);\r\n  padding: 0.05rem 0.5rem;\r\n  border-radius: 0.2rem;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/style/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n  list-style: none;\r\n  text-decoration: none;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  position: fixed;\r\n  z-index: 100;\r\n  background-color: #cfc5c5;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 10% 10px;\r\n}\r\n\r\nheader h1 {\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  color: #000;\r\n  margin: 10px 0;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  list-style: none;\r\n  gap: 20px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.navLinks {\r\n  color: rgb(12, 11, 11);\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\nspan {\r\n  color: rgb(146, 76, 76);\r\n}\r\n\r\n.navLinks:hover {\r\n  color: rgb(146, 76, 76);\r\n  cursor: pointer;\r\n}\r\n\r\n.getArtWork {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  padding: 100px 10%;\r\n}\r\n\r\n.pageDesign {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-wrap: nowrap;\r\n  width: 67%;\r\n  border: 2px solid black;\r\n}\r\n\r\n.pageDesign h2 {\r\n  font-size: 0.9rem;\r\n  font-weight: 500;\r\n  color: #000;\r\n}\r\n\r\nbutton {\r\n  padding: 10px 20px;\r\n  background-color: #cfc5c5;\r\n  color: black;\r\n  font-size: 0.9rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in;\r\n  border-radius: 0 20px 10px 20px;\r\n  margin: 10px 10px;\r\n}\r\n\r\n.card img {\r\n  width: 50%;\r\n  height: 50%;\r\n  object-fit: contain;\r\n}\r\n\r\n.bx-heart {\r\n  cursor: pointer;\r\n}\r\n\r\n.CardNumber {\r\n  margin-left: 5px;\r\n  font-weight: 600;\r\n  color: #664747;\r\n}\r\n\r\n.FootageSide {\r\n  position: fixed;\r\n  bottom: 0;\r\n  padding: 10px 20%;\r\n  text-align: center;\r\n  display: flex;\r\n  background-color: #cfc5c5;\r\n  width: 100%;\r\n}\r\n\r\n.FootageSide p {\r\n  width: 200%;\r\n  text-align: center;\r\n}\r\n\r\n/* Responsive styles for screen width <= 480px */\r\n\r\n@media only screen and (width <= 480px) {\r\n  header {\r\n    padding: 0 5% 10px;\r\n  }\r\n\r\n  nav ul {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .pageDesign {\r\n    width: 100%;\r\n  }\r\n\r\n  .card img {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .getArtWork {\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n    padding: 100px 0%;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/style/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://api-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://api-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/modal.css":
/*!*****************************!*\
  !*** ./src/style/modal.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/modal.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/style/modal.css?");

/***/ }),

/***/ "./src/style/styles.css":
/*!******************************!*\
  !*** ./src/style/styles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/style/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://api-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://api-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://api-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://api-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://api-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://api-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/styles.css */ \"./src/style/styles.css\");\n/* harmony import */ var _style_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/modal.css */ \"./src/style/modal.css\");\n/* harmony import */ var _modules_details_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/details-modal.js */ \"./src/modules/details-modal.js\");\n/* harmony import */ var _modules_ApiLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ApiLink.js */ \"./src/modules/ApiLink.js\");\n/* harmony import */ var _modules_Involvementapi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n/* harmony import */ var _modules_LikeEvent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/LikeEvent.js */ \"./src/modules/LikeEvent.js\");\n/* harmony import */ var _modules_CardCart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/CardCart.js */ \"./src/modules/CardCart.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst displayResult = document.querySelector('.getArtWork');\r\nconst timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\r\n\r\nawait (async () => {\r\n  try {\r\n    displayResult.innerHTML = 'Page is loading...';\r\n    const response = await Promise.race([fetch(_modules_ApiLink_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), timeout(50000)]);\r\n    const LikesData = await (0,_modules_Involvementapi_js__WEBPACK_IMPORTED_MODULE_4__.getAllLikes)();\r\n    if (!response) {\r\n      throw new Error('Timeout!');\r\n    }\r\n\r\n    if (!response.ok) {\r\n      throw new Error('Network response was not ok');\r\n    }\r\n\r\n    const result = await response.json();\r\n\r\n    const data = result.data.map((artwork) => {\r\n      const likesForThisArtwork = LikesData.find((like) => like.item_id === artwork.image_id);\r\n      if (!likesForThisArtwork) {\r\n        return { ...artwork, numberOfLikes: 0 };\r\n      }\r\n      return { ...artwork, numberOfLikes: likesForThisArtwork.likes };\r\n    });\r\n    const resultHTML = data\r\n      .map((getData) => {\r\n        if (getData.image_id === null) {\r\n          return null;\r\n        }\r\n        return `\r\n          <div class=\"card\" data-artwork-id=\"${getData.id}\">\r\n            <img src=\"https://www.artic.edu/iiif/2/${getData.image_id}/full/843,/0/default.jpg\" alt=\"IdImage\">\r\n            <div class=\"pageDesign\">\r\n              <h2>${getData.title}</h2>\r\n              <p><span class=\"likesCount\">${getData.numberOfLikes}</span></p>\r\n              <i class='bx bx-heart' data-artwork-id=\"${getData.image_id}\" style='color:#d01212'></i>\r\n            </div>\r\n            <button>Comment..</button>\r\n          </div>\r\n        `;\r\n      })\r\n      .join('');\r\n    displayResult.innerHTML = resultHTML;\r\n  } catch (error) {\r\n    displayResult.innerHTML = 'Something went wrong';\r\n  }\r\n})();\r\n\r\n(0,_modules_details_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_LikeEvent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_CardCart_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://api-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/ApiLink.js":
/*!********************************!*\
  !*** ./src/modules/ApiLink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://api.artic.edu/api/v1/artworks?fields=id,title,image_id';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (url);\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/ApiLink.js?");

/***/ }),

/***/ "./src/modules/CardCart.js":
/*!*********************************!*\
  !*** ./src/modules/CardCart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayNumberOfCard = () => {\r\n  const getNumberOfCard = document.querySelector('.CardNumber');\r\n  const card = document.querySelectorAll('.card');\r\n  getNumberOfCard.innerHTML = `( ${card.length} )`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNumberOfCard);\r\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/CardCart.js?");

/***/ }),

/***/ "./src/modules/Involvementapi.js":
/*!***************************************!*\
  !*** ./src/modules/Involvementapi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllLikes: () => (/* binding */ getAllLikes),\n/* harmony export */   getArtworkComments: () => (/* binding */ getArtworkComments),\n/* harmony export */   postLikesImg: () => (/* binding */ postLikesImg),\n/* harmony export */   postNewComment: () => (/* binding */ postNewComment)\n/* harmony export */ });\nconst involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\r\nconst involvementAPIid = 'G76rmGDabNdU1RkNCX4H';\r\n\r\nconst getAllLikes = () => fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`)\r\n  .then((response) => response.json())\r\n  .then((data) => data);\r\n\r\nconst getArtworkComments = async (imageId) => {\r\n  const url = `${involvementAPI}apps/${involvementAPIid}/comments?item_id=${imageId}`;\r\n  return fetch(url)\r\n    .then((response) => {\r\n      if (response.ok) {\r\n        return response.json();\r\n      }\r\n      if (response.status === 404 || response.status === 400) {\r\n        /*\r\n         * This happens if there are no comments saved in the InvolvementAPI for the\r\n         * artwork with the given ID. This is expected, and we should return an empty\r\n         * array to show that there are no comments.\r\n         */\r\n        return [];\r\n      }\r\n\r\n      throw new Error(\r\n        `Error getting artwork comments (status code: ${response.status})`,\r\n      );\r\n    })\r\n    .catch((error) => {\r\n      throw new Error(`Network error fetching comments ${error}`);\r\n    });\r\n};\r\n\r\nfunction postLikesImg(imageId) {\r\n  return fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: imageId,\r\n    }),\r\n    headers: {\r\n      'content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => data);\r\n}\r\n\r\nconst postNewComment = async ({ artworkId, username, comment }) => {\r\n  const url = `${involvementAPI}apps/${involvementAPIid}/comments`;\r\n  const requestBody = {\r\n    item_id: artworkId,\r\n    username,\r\n    comment,\r\n  };\r\n\r\n  try {\r\n    const response = await fetch(url, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(requestBody),\r\n    });\r\n    if (!response.ok) {\r\n      throw new Error(\r\n        `Error posting comment: Status code ${response.status} returned`,\r\n      );\r\n    }\r\n    const data = await response.text();\r\n    return { success: data === 'Created' };\r\n  } catch (error) {\r\n    throw new Error(`Unknown Error fetching data ${error}`);\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/Involvementapi.js?");

/***/ }),

/***/ "./src/modules/LikeEvent.js":
/*!**********************************!*\
  !*** ./src/modules/LikeEvent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n\r\n\r\nconst SetLikes = () => {\r\n  const LikeBtn = document.querySelectorAll('.bx-heart');\r\n\r\n  LikeBtn.forEach((element) => {\r\n    element.addEventListener('click', async (e) => {\r\n      const ArtWorkId = e.target.dataset.artworkId;\r\n      e.stopPropagation();\r\n      (0,_Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__.postLikesImg)(ArtWorkId);\r\n      window.location.reload();\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetLikes);\r\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/LikeEvent.js?");

/***/ }),

/***/ "./src/modules/add-comment-form.js":
/*!*****************************************!*\
  !*** ./src/modules/add-comment-form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFloatingLabels: () => (/* binding */ addFloatingLabels),\n/* harmony export */   initializeFormEventHandlers: () => (/* binding */ initializeFormEventHandlers)\n/* harmony export */ });\n/* harmony import */ var _Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n\r\n\r\n// Add floating labels\r\nconst addFloatingLabels = () => {\r\n  const inputs = document.querySelectorAll('.add-comment__form__input');\r\n\r\n  inputs.forEach((input) => {\r\n    input.addEventListener('focus', (e) => {\r\n      const span = e.target.nextElementSibling;\r\n      span.classList.add('float-label');\r\n    });\r\n\r\n    input.addEventListener('blur', (e) => {\r\n      if (e.target.value.trim() === '') {\r\n        const span = e.target.nextElementSibling;\r\n        span.classList.remove('float-label');\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\nconst initializeFormEventHandlers = () => {\r\n  // Add form submition event handler\r\n  const addCommentForm = document.getElementById('add-comment__form');\r\n  addCommentForm.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const { artworkId } = addCommentForm.dataset;\r\n    const data = new FormData(addCommentForm);\r\n    const username = data.get('username');\r\n    const comment = data.get('comment');\r\n\r\n    try {\r\n      const { success } = await (0,_Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__.postNewComment)({\r\n        artworkId,\r\n        username,\r\n        comment,\r\n      });\r\n      if (success) {\r\n        // TODO: Tell user that the comment was saved successfully\r\n        addCommentForm.reset();\r\n        window.location.reload();\r\n      }\r\n    } catch (e) {\r\n      // TODO: Tell user that the comment was NOT saved successfully, try again later\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/add-comment-form.js?");

/***/ }),

/***/ "./src/modules/artworkAPI.js":
/*!***********************************!*\
  !*** ./src/modules/artworkAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchSingleArtworkDetails = async (artworkId) => {\r\n  const ENDPOINT = 'https://api.artic.edu/api/v1/artworks';\r\n  const url = `${ENDPOINT}/${artworkId}`;\r\n  try {\r\n    const response = await fetch(url);\r\n    if (!response.ok) {\r\n      throw new Error(\r\n        `Error fetching artwork details for id ${artworkId} data: Status code ${response.status} returned`,\r\n      );\r\n    }\r\n    const { data } = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    throw new Error(`Error fetching artwork detals ${error}`);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchSingleArtworkDetails);\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/artworkAPI.js?");

/***/ }),

/***/ "./src/modules/comments-counter.js":
/*!*****************************************!*\
  !*** ./src/modules/comments-counter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = () => {\r\n  const commentCountSpan = document.getElementById('comment-count');\r\n  const allComments = document.querySelectorAll('.modal__artwork__comment');\r\n  const numberOfComments = allComments ? allComments.length : 0;\r\n\r\n  if (commentCountSpan) {\r\n    commentCountSpan.innerText = numberOfComments;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\r\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/comments-counter.js?");

/***/ }),

/***/ "./src/modules/details-modal.js":
/*!**************************************!*\
  !*** ./src/modules/details-modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _artworkAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artworkAPI.js */ \"./src/modules/artworkAPI.js\");\n/* harmony import */ var _Involvementapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n/* harmony import */ var _html_generators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-generators.js */ \"./src/modules/html-generators.js\");\n/* harmony import */ var _add_comment_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-comment-form.js */ \"./src/modules/add-comment-form.js\");\n/* harmony import */ var _comments_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments-counter.js */ \"./src/modules/comments-counter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst initializeModal = () => {\r\n  const artWorkCards = document.querySelectorAll('.card');\r\n  const overlay = document.getElementById('overlay');\r\n  const modal = document.getElementById('modal');\r\n  const modalBody = document.getElementById('modal__body');\r\n  const modalCloseIcon = document.getElementById('modal__close-icon');\r\n\r\n  // Handle opening of modal\r\n  artWorkCards.forEach((card) => card.addEventListener('click', async () => {\r\n    const { artworkId } = card.dataset;\r\n    overlay.classList.add('open');\r\n    modal.classList.add('open');\r\n    const artworkData = await (0,_artworkAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(artworkId);\r\n    const comments = await (0,_Involvementapi_js__WEBPACK_IMPORTED_MODULE_1__.getArtworkComments)(artworkData.image_id);\r\n    modalBody.innerHTML = (0,_html_generators_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(artworkData, comments);\r\n    (0,_add_comment_form_js__WEBPACK_IMPORTED_MODULE_3__.addFloatingLabels)();\r\n    (0,_add_comment_form_js__WEBPACK_IMPORTED_MODULE_3__.initializeFormEventHandlers)();\r\n    (0,_comments_counter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    document.body.style.overflow = 'hidden';\r\n  }));\r\n\r\n  // Handle closing of modal\r\n  const handleModalClose = () => {\r\n    overlay.classList.remove('open');\r\n    modal.classList.remove('open');\r\n    modalBody.innerHTML = '';\r\n    document.body.style.overflow = 'auto';\r\n  };\r\n\r\n  overlay.addEventListener('click', handleModalClose);\r\n  modalCloseIcon.addEventListener('click', handleModalClose);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeModal);\r\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/details-modal.js?");

/***/ }),

/***/ "./src/modules/html-generators.js":
/*!****************************************!*\
  !*** ./src/modules/html-generators.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generateArtWorkDetailsHTML = (artworkData, comments) => {\r\n  const artworkImgUrl = `https://www.artic.edu/iiif/2/${artworkData.image_id}/full/843,/0/default.jpg`;\r\n  let materialsUsed = 'N/A';\r\n  if (artworkData.material_titles.length) {\r\n    materialsUsed = artworkData.material_titles\r\n      .map((material) => `<span>${material.split(' ')[0]}</span>`)\r\n      .join('\\n');\r\n  }\r\n\r\n  let exhibitionHistory = 'N/A';\r\n  if (artworkData.exhibition_history?.length) {\r\n    exhibitionHistory = artworkData.exhibition_history\r\n      .split('\\n')\r\n      .slice(0, 4)\r\n      .map((item) => `<p>${item}</p>`)\r\n      .join('\\n');\r\n  }\r\n\r\n  let commentsHTML = '<p>There are no comments for this artwork.</p>';\r\n\r\n  if (comments.length) {\r\n    const commentsArr = [];\r\n    comments.forEach((commentData) => {\r\n      const { username, creation_date: creationDate, comment } = commentData;\r\n      const html = `\r\n        <div class=\"modal__artwork__comment\"/>\r\n          <div class=\"modal__artwork__comment__header\">\r\n            <div class=\"modal__artwork__comment__avatar\"><span>${username[0]}</span></div>\r\n            <span class=\"modal__artwork__comment__username\">${username}</span>\r\n            <div class=\"modal__artwork__comment__date\">on <span>${creationDate}</span></div>\r\n          </div>\r\n          <p class=\"modal__artwork__comment__body\">${comment}</p>\r\n        </div>\r\n      `;\r\n      commentsArr.push(html);\r\n    });\r\n\r\n    commentsHTML = commentsArr.join('\\n');\r\n  }\r\n\r\n  const addCommentForm = `\r\n    <form class=\"add-comment__form\" id=\"add-comment__form\" data-artwork-id=\"${artworkData.image_id}\">\r\n        <label class=\"add-comment__form__label\" for=\"username\">\r\n          <input\r\n            class=\"add-comment__form__input\"\r\n            type=\"text\"\r\n            id=\"username\"\r\n            name=\"username\"\r\n            required\r\n          />\r\n          <span>Your name</span>\r\n        </label>\r\n        <label class=\"add-comment__form__label\" for=\"comment\">\r\n          <textarea\r\n            class=\"add-comment__form__input\"\r\n            id=\"comment\"\r\n            name=\"comment\"\r\n            rows=\"6\"\r\n            required\r\n          ></textarea>\r\n          <span>Your insights</span>\r\n        </label>\r\n        <div class=\"add-comment__form__errors\" id=\"add-comment__form__errors\">\r\n            <span>Username is required.</span>\r\n            <span>Please provide a comment.</span>\r\n        </div>\r\n        <div class=\"add-comment__form__success\" id=\"add-comment__form__success\">\r\n          <span>Your comment was added sucessfully.</span>\r\n        </div>\r\n        <button class=\"add-comment__form__btn\" type=\"submit\">Comment</button>\r\n      </form>\r\n  `;\r\n\r\n  return `\r\n  <div class=\"modal__header\">\r\n    <h2>${artworkData.title}</h2>\r\n    <p>By ${artworkData.artist_title}</p>\r\n  </div>\r\n  <img class=\"modal__artwork\" src=\"${artworkImgUrl}\" alt=\"${artworkData.title}\" >\r\n  <div class=\"modal__artwork__stats\">\r\n    <div class=\"modal__artwork__stat\">\r\n      <span class=\"modal__artwork__stat__title\">Place of Origin:</span>\r\n      <span>${artworkData.place_of_origin}</span>\r\n    </div>\r\n    <div class=\"modal__artwork__stat\">\r\n      <span class=\"modal__artwork__stat__title\">Year:</span>\r\n      <span>${artworkData.date_end}</span>\r\n    </div>\r\n    <div class=\"modal__artwork__stat\">\r\n      <span class=\"modal__artwork__stat__title\">Materials:</span>\r\n      <div>${materialsUsed}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal__exhibition-history\">\r\n    <span>Exhibition History:</span>\r\n    <div class=\"modal__exhibition-history__item\">${exhibitionHistory}</div>\r\n  </div>\r\n  <div class=\"modal__artwork__comments\">\r\n    <h3 class=\"modal__artwork__comments__header\">Comments (<span id=\"comment-count\"></span>)</h3>\r\n    ${commentsHTML}\r\n    <div class=\"add-comment-sec\">\r\n      <h3>Add a comment</h3>\r\n      ${addCommentForm}\r\n    </div>\r\n  </div>\r\n`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateArtWorkDetailsHTML);\r\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/html-generators.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;