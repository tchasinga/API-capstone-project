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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Modal Styles */\n.overlay {\n  display: none;\n  position: fixed;\n  z-index: 200;\n  inset: 0;\n  overflow: auto;\n  background-color: rgba(193, 199, 208, 0.85);\n  backdrop-filter: blur(6px);\n}\n\n.overlay.open {\n  display: block;\n}\n\n.modal {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 90vw;\n  min-width: 21em;\n  max-width: 60rem;\n  min-height: 10rem;\n  max-height: 90vh;\n  background: #fff;\n  z-index: 300;\n  border-radius: 0.25rem;\n  padding: 1rem;\n  overflow-x: hidden;\n}\n\n.modal.open {\n  display: block;\n}\n\n.modal__close-icon {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n}\n\n.modal__body {\n  padding: 2rem 1rem;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.modal__artwork__comment__avatar > span {\n  color: #fff;\n}\n\n.modal__body span {\n  color: #000;\n}\n\n.modal__artwork {\n  width: 100%;\n}\n\n.modal__artwork__stats {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.modal__artwork__stat {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.modal__artwork__stat__title {\n  font-weight: 600;\n}\n\n.modal__artwork__stat > div {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.modal__exhibition-history > span {\n  font-weight: 600;\n  display: block;\n  padding-bottom: 0.5rem;\n}\n\n.modal__artwork__comment__date span {\n  color: rgb(83, 82, 81);\n}\n\n.modal__artwork__stat > div > span {\n  background-color: rgb(208, 206, 206);\n  padding: 0.05rem 0.5rem;\n  border-radius: 0.2rem;\n}\n\n.modal__exhibition-history__item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n/* Artwork's Comments */\n.modal__artwork__comments {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.modal__artwork__comments__header {\n  padding-top: 1rem;\n}\n\n.modal__artwork__comment {\n  width: 100%;\n  min-width: 360px;\n  max-width: 40rem;\n  min-height: 120px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: 2px 3px 9px 1px rgba(0, 0, 0, 0.13);\n}\n\n.modal__artwork__comment__header {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.modal__artwork__comment__avatar {\n  width: 2rem;\n  height: 2rem;\n  background: #e18128;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.15rem;\n}\n\n.modal__artwork__comment__username {\n  font-weight: 600;\n}\n\n.modal__artwork__comment__date {\n  margin-left: auto;\n}\n\n.modal__artwork__comment__body {\n  line-height: 1.5;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/style/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n  list-style: none;\n  text-decoration: none;\n}\n\nheader {\n  width: 100%;\n  position: fixed;\n  z-index: 100;\n  background-color: #cfc5c5;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10% 10px;\n}\n\nheader h1 {\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: #000;\n  margin: 10px 0;\n  align-items: center;\n  text-align: center;\n}\n\nnav ul {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  gap: 20px;\n  margin-top: 10px;\n}\n\n.navLinks {\n  color: rgb(12, 11, 11);\n  transition: all 0.3s ease-in;\n}\n\nspan {\n  color: rgb(146, 76, 76);\n}\n\n.navLinks:hover {\n  color: rgb(146, 76, 76);\n  cursor: pointer;\n}\n\nsection {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding: 100px 10%;\n}\n\n.pageDesign {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  width: 67%;\n  border: 2px solid black;\n}\n\n.pageDesign h2 {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #000;\n}\n\nbutton {\n  padding: 10px 20px;\n  background-color: #cfc5c5;\n  color: black;\n  font-size: 0.9rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease-in;\n  border-radius: 0 20px 10px 20px;\n  margin: 10px 10px;\n}\n\n.card img {\n  width: 50%;\n  height: 50%;\n  object-fit: contain;\n}\n\n.bx-heart{\n  cursor: pointer;\n}\n\n/* Responsive styles for screen width <= 480px */\n\n@media only screen and (width <= 480px) {\n  header {\n    padding: 0 5% 10px;\n  }\n\n  nav ul {\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 0;\n  }\n\n  .pageDesign {\n    width: 100%;\n  }\n\n  .card img {\n    width: 100%;\n    height: auto;\n  }\n\n  section {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    padding: 100px 0%;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/style/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/styles.css */ \"./src/style/styles.css\");\n/* harmony import */ var _style_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/modal.css */ \"./src/style/modal.css\");\n/* harmony import */ var _modules_details_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/details-modal.js */ \"./src/modules/details-modal.js\");\n/* harmony import */ var _modules_ApiLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ApiLink.js */ \"./src/modules/ApiLink.js\");\n/* harmony import */ var _modules_Involvementapi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n/* harmony import */ var _modules_LikeEvent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/LikeEvent.js */ \"./src/modules/LikeEvent.js\");\n\n\n\n\n\n\n\nconst displayResult = document.querySelector('.getArtWork');\nconst timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\n\nawait (async () => {\n  try {\n    displayResult.innerHTML = 'Page is loading...';\n    const response = await Promise.race([fetch(_modules_ApiLink_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), timeout(50000)]);\n    const LikesData = await (0,_modules_Involvementapi_js__WEBPACK_IMPORTED_MODULE_4__.getAllLikes)();\n    if (!response) {\n      throw new Error('Timeout!');\n    }\n\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n\n    const result = await response.json();\n\n    const data = result.data.map((artwork) => {\n      const likesForThisArtwork = LikesData.find((like) => like.item_id === artwork.image_id);\n      if (!likesForThisArtwork) {\n        return { ...artwork, numberOfLikes: 0 };\n      }\n      return { ...artwork, numberOfLikes: likesForThisArtwork.likes };\n    });\n    const resultHTML = data\n      .map((getData) => {\n        if (getData.image_id === null) {\n          return null;\n        }\n        return `\n          <div class=\"card\" data-artwork-id=\"${getData.image_id}\">\n            <img src=\"https://www.artic.edu/iiif/2/${getData.image_id}/full/843,/0/default.jpg\" alt=\"IdImage\">\n            <div class=\"pageDesign\">\n              <h2>${getData.title}</h2>\n              <p><span class=\"likesCount\">${getData.numberOfLikes}</span></p>\n              <i class='bx bx-heart' data-artwork-id=\"${getData.image_id}\" style='color:#d01212'></i>\n            </div>\n            <button>Comment..</button>\n          </div>\n        `;\n      })\n      .join('');\n    displayResult.innerHTML = resultHTML;\n  } catch (error) {\n    displayResult.innerHTML = 'Something went wrong';\n  }\n})();\n\n(0,_modules_details_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_LikeEvent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://api-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/ApiLink.js":
/*!********************************!*\
  !*** ./src/modules/ApiLink.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://api.artic.edu/api/v1/artworks?fields=id,title,image_id';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (url);\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/ApiLink.js?");

/***/ }),

/***/ "./src/modules/Involvementapi.js":
/*!***************************************!*\
  !*** ./src/modules/Involvementapi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllLikes: () => (/* binding */ getAllLikes),\n/* harmony export */   getArtworkComments: () => (/* binding */ getArtworkComments),\n/* harmony export */   postLikesImg: () => (/* binding */ postLikesImg)\n/* harmony export */ });\nconst involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst involvementAPIid = 'G76rmGDabNdU1RkNCX4H';\n\nfunction getAllLikes() {\n  return fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`)\n    .then((response) => response.json())\n    .then((data) => data);\n}\n\nconst getArtworkComments = async (imageId) => {\n  const url = `${involvementAPI}apps/${involvementAPIid}/comments?item_id=${imageId}`;\n  return fetch(url)\n    .then((response) => {\n      if (response.ok) {\n        return response.json();\n      }\n      if (response.status === 404 || response.status === 400) {\n        /*\n         * This happens if there are no comments saved in the InvolvementAPI for the\n         * artwork with the given ID. This is expected, and we should return an empty\n         * array to show that there are no comments.\n         */\n        return [];\n      }\n\n      throw new Error(\n        `Error getting artwork comments (status code: ${response.status})`,\n      );\n    })\n    .catch((error) => {\n      throw new Error(`Network error fetching comments ${error}`);\n    });\n};\n\nfunction postLikesImg(imageId) {\n  return fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: imageId,\n    }),\n    headers: {\n      'content-type': 'application/json; charset=UTF-8',\n    },\n  })\n    .then((response) => response.json())\n    .then((data) => data);\n}\n\n\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/Involvementapi.js?");

/***/ }),

/***/ "./src/modules/LikeEvent.js":
/*!**********************************!*\
  !*** ./src/modules/LikeEvent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n\n\nfunction SetLikes() {\n  const LikeBtn = document.querySelectorAll('.bx-heart');\n\n  LikeBtn.forEach((element) => {\n    element.addEventListener('click', async (e) => {\n      const ArtWorkId = e.target.dataset.artworkId;\n      e.stopPropagation();\n      (0,_Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__.postLikesImg)(ArtWorkId);\n      window.location.reload();\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetLikes);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/LikeEvent.js?");

/***/ }),

/***/ "./src/modules/artworkAPI.js":
/*!***********************************!*\
  !*** ./src/modules/artworkAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchSingleArtworkDetails = async (artworkId) => {\n  const ENDPOINT = 'https://api.artic.edu/api/v1/artworks';\n  const url = `${ENDPOINT}/${artworkId}`;\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(\n        `Error fetching artwork details for id ${artworkId} data: Status code ${response.status} returned`,\n      );\n    }\n    const { data } = await response.json();\n    return data;\n  } catch (error) {\n    throw new Error(`Error fetching artwork detals ${error}`);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchSingleArtworkDetails);\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/artworkAPI.js?");

/***/ }),

/***/ "./src/modules/details-modal.js":
/*!**************************************!*\
  !*** ./src/modules/details-modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _artworkAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artworkAPI.js */ \"./src/modules/artworkAPI.js\");\n/* harmony import */ var _Involvementapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n/* harmony import */ var _html_generators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-generators.js */ \"./src/modules/html-generators.js\");\n\n\n\n\nconst initializeModal = () => {\n  const artWorkCards = document.querySelectorAll('.card');\n  const overlay = document.getElementById('overlay');\n  const modal = document.getElementById('modal');\n  const modalBody = document.getElementById('modal__body');\n  const modalCloseIcon = document.getElementById('modal__close-icon');\n\n  // Handle opening of modal\n  artWorkCards.forEach((card) => card.addEventListener('click', async () => {\n    const { artworkId } = card.dataset;\n    overlay.classList.add('open');\n    modal.classList.add('open');\n    const artworkData = await (0,_artworkAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(artworkId);\n    const comments = await (0,_Involvementapi_js__WEBPACK_IMPORTED_MODULE_1__.getArtworkComments)(artworkData.image_id);\n    modalBody.innerHTML = (0,_html_generators_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(artworkData, comments);\n    document.body.style.overflow = 'hidden';\n  }));\n\n  // Handle closing of modal\n  const handleModalClose = () => {\n    overlay.classList.remove('open');\n    modal.classList.remove('open');\n    modalBody.innerHTML = '';\n    document.body.style.overflow = 'auto';\n  };\n\n  overlay.addEventListener('click', handleModalClose);\n  modalCloseIcon.addEventListener('click', handleModalClose);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeModal);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/details-modal.js?");

/***/ }),

/***/ "./src/modules/html-generators.js":
/*!****************************************!*\
  !*** ./src/modules/html-generators.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generateArtWorkDetailsHTML = (artworkData, comments) => {\n  const artworkImgUrl = `https://www.artic.edu/iiif/2/${artworkData.image_id}/full/843,/0/default.jpg`;\n  let materialsUsed = 'N/A';\n  if (artworkData.material_titles.length) {\n    materialsUsed = artworkData.material_titles\n      .map((material) => `<span>${material.split(' ')[0]}</span>`)\n      .join('\\n');\n  }\n\n  let exhibitionHistory = 'N/A';\n  if (artworkData.exhibition_history?.length) {\n    exhibitionHistory = artworkData.exhibition_history\n      .split('\\n')\n      .slice(0, 4)\n      .map((item) => `<p>${item}</p>`)\n      .join('\\n');\n  }\n\n  let commentsHTML = '<p>There are no comments for this artwork.</p>';\n\n  if (comments.length) {\n    const commentsArr = [];\n    comments.forEach((commentData) => {\n      const { username, creation_date: creationDate, comment } = commentData;\n      const html = `\n        <div class=\"modal__artwork__comment\"/>\n          <div class=\"modal__artwork__comment__header\">\n            <div class=\"modal__artwork__comment__avatar\"><span>${username[0]}</span></div>\n            <span class=\"modal__artwork__comment__username\">${username}</span>\n            <div class=\"modal__artwork__comment__date\">on <span>${creationDate}</span></div>\n          </div>\n          <p class=\"modal__artwork__comment__body\">${comment}</p>\n        </div>\n      `;\n      commentsArr.push(html);\n    });\n\n    commentsHTML = commentsArr.join('\\n');\n  }\n\n  return `\n  <div class=\"modal__header\">\n    <h2>${artworkData.title}</h2>\n    <p>By ${artworkData.artist_title}</p>\n  </div>\n  <img class=\"modal__artwork\" src=\"${artworkImgUrl}\" alt=\"${artworkData.title}\" >\n  <div class=\"modal__artwork__stats\">\n    <div class=\"modal__artwork__stat\">\n      <span class=\"modal__artwork__stat__title\">Place of Origin:</span>\n      <span>${artworkData.place_of_origin}</span>\n    </div>\n    <div class=\"modal__artwork__stat\">\n      <span class=\"modal__artwork__stat__title\">Year:</span>\n      <span>${artworkData.date_end}</span>\n    </div>\n    <div class=\"modal__artwork__stat\">\n      <span class=\"modal__artwork__stat__title\">Materials:</span>\n      <div>${materialsUsed}</div>\n    </div>\n  </div>\n  <div class=\"modal__exhibition-history\">\n    <span>Exhibition History:</span>\n    <div class=\"modal__exhibition-history__item\">${exhibitionHistory}</div>\n  </div>\n  <div class=\"modal__artwork__comments\">\n    <h3 class=\"modal__artwork__comments__header\">Comments (${comments.length})</h3>\n    ${commentsHTML}\n  </div>\n`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateArtWorkDetailsHTML);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/html-generators.js?");

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