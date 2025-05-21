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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Modal Styles */\n.overlay {\n  display: none;\n  position: fixed;\n  z-index: 200;\n  inset: 0;\n  overflow: auto;\n  background-color: rgba(193, 199, 208, 0.85);\n  backdrop-filter: blur(6px);\n}\n\n.overlay.open {\n  display: block;\n}\n\n.modal {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 90vw;\n  min-width: 21em;\n  max-width: 60rem;\n  min-height: 10rem;\n  max-height: 90vh;\n  background: #fff;\n  z-index: 300;\n  border-radius: 0.25rem;\n  padding: 1rem;\n  overflow-x: hidden;\n}\n\n.modal.open {\n  display: block;\n}\n\n.modal__close-icon {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n}\n\n.modal__body {\n  padding: 2rem 1rem;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.modal__artwork__comment__avatar > span {\n  color: #fff;\n}\n\n.modal__body span {\n  color: #000;\n}\n\n.modal__artwork {\n  width: 100%;\n}\n\n.modal__artwork__stats {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.modal__artwork__stat {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.modal__artwork__stat__title {\n  font-weight: 600;\n}\n\n.modal__artwork__stat > div {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.modal__exhibition-history > span {\n  font-weight: 600;\n  display: block;\n  padding-bottom: 0.5rem;\n}\n\n.modal__artwork__comment__date span {\n  color: rgb(83, 82, 81);\n}\n\n.modal__exhibition-history__item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n/* Artwork's Comments */\n.modal__artwork__comments {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.modal__artwork__comments__header {\n  padding-top: 1rem;\n}\n\n.modal__artwork__comment {\n  width: 100%;\n  min-width: 360px;\n  max-width: 40rem;\n  min-height: 120px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: 2px 3px 9px 1px rgba(0, 0, 0, 0.13);\n}\n\n.modal__artwork__comment__header {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.modal__artwork__comment__avatar {\n  width: 2rem;\n  height: 2rem;\n  background: #e18128;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.15rem;\n}\n\n.modal__artwork__comment__username {\n  font-weight: 600;\n}\n\n.modal__artwork__comment__date {\n  margin-left: auto;\n}\n\n.modal__artwork__comment__body {\n  line-height: 1.5;\n}\n\n/* Add Comment Section  */\n\n.add-comment-sec {\n  max-width: 40rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.add-comment__form {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 50rem;\n}\n\n.add-comment__form__label {\n  position: relative;\n}\n\n.add-comment__form__label > span {\n  position: absolute;\n  background-color: #fff;\n  padding: 0 0.5rem;\n  top: 0.5rem;\n  left: 0.5rem;\n  transition: transform 150ms ease-in;\n}\n\n.add-comment__form__label > span.float-label {\n  transform: translateY(-1.5rem);\n}\n\n.add-comment__form__input {\n  font-size: 1rem;\n  font-family: sans-serif;\n  border: 1px solid rgb(160, 160, 160);\n  border-radius: 0.25rem;\n  padding: 1rem 0.5rem;\n  min-width: 15rem;\n  width: 100%;\n  background-color: #fff;\n}\n\n.add-comment__form__errors,\n.add-comment__form__success {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.add-comment__form__errors > span,\n.add-comment__form__success > span {\n  font-size: 0.8rem;\n  padding: 0.25rem 0.5rem;\n  width: max-content;\n  border-radius: 0.15rem;\n}\n\n.add-comment__form__errors > span {\n  background: rgb(252, 206, 206);\n  color: rgb(74, 29, 18);\n}\n\n.add-comment__form__success > span {\n  background: rgb(170, 252, 179);\n  color: rgb(29, 88, 29);\n}\n\n.add-comment__form__btn {\n  cursor: pointer;\n  width: max-content;\n  padding: 0.5rem 1.25rem;\n  color: #fff;\n  font-size: 1.2rem;\n  background-color: #e18128;\n  border: 2px solid #e18128;\n  border-radius: 0.5rem;\n  transition: all 0.2s ease-in-out;\n}\n\n.add-comment__form__btn:hover {\n  color: #e18128;\n  background-color: #faf6f1;\n}\n\n.add-comment__form__btn:active {\n  transform: translateY(3px);\n}\n\n.modal__artwork__stat > div > span {\n  background-color: rgb(208, 206, 206);\n  padding: 0.05rem 0.5rem;\n  border-radius: 0.2rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/style/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Updated CSS with enhanced UI */\n:root {\n  --primary-color: #6b4f28;\n  --secondary-color: #f8f4ee;\n  --accent-color: #b38b59;\n  --text-color: #2c2c2c;\n  --light-text: #f8f8f8;\n  --background-color: #f9f9f7;\n  --card-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);\n  --hover-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);\n  --transition: all 0.4s cubic-bezier(0.16, 0.81, 0.32, 1);\n  --border-radius: 16px;\n  --gradient: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\n  list-style: none;\n  text-decoration: none;\n  scroll-behavior: smooth;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--text-color);\n  line-height: 1.7;\n  min-height: 100vh;\n}\n\n/* Enhanced Header */\nheader {\n  width: 100%;\n  position: fixed;\n  z-index: 1000;\n  background-color: rgba(248, 244, 238, 0.98);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.2rem 10%;\n  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);\n  transition: var(--transition);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border-bottom: 1px solid rgba(107, 79, 40, 0.1);\n}\n\nheader.scrolled {\n  padding: 0.8rem 10%;\n}\n\nheader h1 {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  letter-spacing: -0.5px;\n}\n\nheader h1 span {\n  color: var(--accent-color);\n  font-weight: 800;\n}\n\nnav ul {\n  display: flex;\n  align-items: center;\n  gap: 1.8rem;\n}\n\n.navLinks {\n  color: var(--text-color);\n  font-weight: 500;\n  padding: 0.6rem 1.2rem;\n  border-radius: 50px;\n  transition: var(--transition);\n  position: relative;\n  font-size: 0.95rem;\n}\n\n.navLinks:hover {\n  color: var(--primary-color);\n  background: rgba(107, 79, 40, 0.05);\n}\n\n.navLinks.active {\n  color: var(--primary-color);\n  font-weight: 600;\n}\n\n.navLinks.active::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 30%;\n  height: 2px;\n  background: var(--primary-color);\n}\n\n/* Main Content Area */\n.getArtWork {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 2.5rem;\n  padding: 8rem 10% 4rem;\n  max-width: 1800px;\n  margin: 0 auto;\n}\n\n/* Enhanced Card Design */\n.card {\n  background: white;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  box-shadow: var(--card-shadow);\n  transition: var(--transition);\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n}\n\n.card:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--hover-shadow);\n}\n\n.card::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));\n  opacity: 0;\n  transition: var(--transition);\n}\n\n.card:hover::before {\n  opacity: 1;\n}\n\n.card img {\n  width: 100%;\n  height: 280px;\n  object-fit: cover;\n  transition: var(--transition);\n}\n\n.card:hover img {\n  transform: scale(1.02);\n}\n\n.card-content {\n  padding: 1.8rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.pageDesign {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n  padding-top: 1.2rem;\n}\n\n.pageDesign h2 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-color);\n  line-height: 1.4;\n  flex: 1;\n  margin-right: 1rem;\n}\n\n.like-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.likesCount {\n  font-weight: 600;\n  color: var(--primary-color);\n  min-width: 20px;\n  text-align: center;\n}\n\n.bx-heart {\n  cursor: pointer;\n  font-size: 1.4rem;\n  color: #e74c3c;\n  transition: var(--transition);\n  padding: 0.5rem;\n  border-radius: 50%;\n}\n\n.bx-heart:hover {\n  transform: scale(1.2);\n  background: rgba(231, 76, 60, 0.1);\n}\n\n.bx-heart.active {\n  animation: heartBeat 0.6s;\n  fill: #e74c3c;\n}\n\n@keyframes heartBeat {\n  0% { transform: scale(1); }\n  25% { transform: scale(1.3); }\n  50% { transform: scale(1); }\n  75% { transform: scale(1.2); }\n  100% { transform: scale(1); }\n}\n\nbutton {\n  padding: 0.8rem 1.8rem;\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);\n  color: white;\n  font-size: 0.95rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: var(--transition);\n  border-radius: 50px;\n  border: none;\n  outline: none;\n  margin-top: 1.5rem;\n  width: 100%;\n  letter-spacing: 0.5px;\n  position: relative;\n  overflow: hidden;\n}\n\nbutton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);\n  transition: var(--transition);\n}\n\nbutton:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(179, 139, 89, 0.3);\n}\n\nbutton:active {\n  transform: translateY(0);\n}\n\n/* Loading State */\n.loading-state {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: var(--background-color);\n  z-index: 9999;\n  transition: opacity 0.5s ease;\n}\n\n.loading-spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid rgba(107, 79, 40, 0.1);\n  border-radius: 50%;\n  border-top-color: var(--primary-color);\n  animation: spin 1s ease-in-out infinite;\n}\n\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n\n/* Footer */\n.FootageSide {\n  background-color: var(--secondary-color);\n  padding: 2rem 10%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(107, 79, 40, 0.05);\n}\n\n.FootageSide p {\n  color: var(--text-color);\n  font-weight: 400;\n  max-width: 800px;\n  font-size: 0.95rem;\n  line-height: 1.8;\n}\n\n/* Empty State */\n.empty-state {\n  grid-column: 1 / -1;\n  text-align: center;\n  padding: 4rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.empty-state i {\n  font-size: 3rem;\n  color: var(--accent-color);\n  margin-bottom: 1.5rem;\n}\n\n.empty-state h3 {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: var(--primary-color);\n}\n\n.empty-state p {\n  color: var(--text-color);\n  max-width: 500px;\n  opacity: 0.8;\n}\n\n/* Responsive styles */\n@media only screen and (max-width: 1200px) {\n  header, .getArtWork, .FootageSide {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  \n  .getArtWork {\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  header {\n    flex-direction: row;\n    padding: 1rem 5%;\n  text-align: left;\n  }\n  \n  nav ul {\n    margin-top: 0;\n    gap: 1rem;\n  }\n  \n  .navLinks {\n    padding: 0.5rem 1rem;\n    font-size: 0.9rem;\n  }\n  \n  .getArtWork {\n    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n    gap: 2rem;\n    padding: 7rem 5% 3rem;\n  }\n  \n  .card img {\n    height: 240px;\n  }\n}\n\n@media only screen and (max-width: 576px) {\n  header {\n    flex-direction: column;\n    padding: 1rem 5%;\n    text-align: center;\n  }\n  \n  header h1 {\n    margin-bottom: 0.5rem;\n  }\n  \n  .getArtWork {\n    grid-template-columns: 1fr;\n    padding: 6.5rem 5% 2.5rem;\n    gap: 1.8rem;\n  }\n  \n  .card-content {\n    padding: 1.5rem;\n  }\n  \n  button {\n    padding: 0.7rem 1.5rem;\n  }\n}\n\n/* Animations */\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.card {\n  animation: fadeIn 0.6s ease-out forwards;\n  opacity: 0;\n}\n\n/* Staggered animation delays */\n.card:nth-child(1) { animation-delay: 0.1s; }\n.card:nth-child(2) { animation-delay: 0.2s; }\n.card:nth-child(3) { animation-delay: 0.3s; }\n.card:nth-child(4) { animation-delay: 0.4s; }\n.card:nth-child(5) { animation-delay: 0.5s; }\n.card:nth-child(6) { animation-delay: 0.6s; }\n.card:nth-child(7) { animation-delay: 0.7s; }\n.card:nth-child(8) { animation-delay: 0.8s; }\n\n/* Hover effect for cards */\n.card:hover .pageDesign h2 {\n  color: var(--primary-color);\n}\n\n/* Floating action button for mobile */\n.floating-action-btn {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 20px rgba(107, 79, 40, 0.3);\n  z-index: 99;\n  cursor: pointer;\n  transition: var(--transition);\n  opacity: 0;\n  transform: translateY(20px);\n}\n\n.floating-action-btn.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.floating-action-btn:hover {\n  transform: translateY(-3px) scale(1.05);\n}\n\n@media (min-width: 769px) {\n  .floating-action-btn {\n    display: none;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/style/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/styles.css */ \"./src/style/styles.css\");\n/* harmony import */ var _style_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/modal.css */ \"./src/style/modal.css\");\n/* harmony import */ var _modules_details_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/details-modal.js */ \"./src/modules/details-modal.js\");\n/* harmony import */ var _modules_ApiLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ApiLink.js */ \"./src/modules/ApiLink.js\");\n/* harmony import */ var _modules_Involvementapi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n/* harmony import */ var _modules_LikeEvent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/LikeEvent.js */ \"./src/modules/LikeEvent.js\");\n/* harmony import */ var _modules_CardCart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/CardCart.js */ \"./src/modules/CardCart.js\");\n\n\n\n\n\n\n\n\nconst displayResult = document.querySelector('.getArtWork');\nconst timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\n\nawait (async () => {\n  try {\n    displayResult.innerHTML = 'Page is loading...';\n    const response = await Promise.race([fetch(_modules_ApiLink_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), timeout(50000)]);\n    const LikesData = await (0,_modules_Involvementapi_js__WEBPACK_IMPORTED_MODULE_4__.getAllLikes)();\n    if (!response) {\n      throw new Error('Timeout!');\n    }\n\n    if (!response.ok) {\n      throw new Error('Network response was not ok');\n    }\n\n    const result = await response.json();\n\n    const data = result.data.map((artwork) => {\n      const likesForThisArtwork = LikesData.find((like) => like.item_id === artwork.image_id);\n      if (!likesForThisArtwork) {\n        return { ...artwork, numberOfLikes: 0 };\n      }\n      return { ...artwork, numberOfLikes: likesForThisArtwork.likes };\n    });\n    const resultHTML = data\n      .map((getData) => {\n        if (getData.image_id === null) {\n          return null;\n        }\n        return `\n          <div class=\"card\" data-artwork-id=\"${getData.id}\">\n            <img src=\"https://www.artic.edu/iiif/2/${getData.image_id}/full/843,/0/default.jpg\" alt=\"IdImage\">\n            <div class=\"pageDesign\">\n              <h2>${getData.title}</h2>\n              <p><span class=\"likesCount\">${getData.numberOfLikes}</span></p>\n              <i class='bx bx-heart' data-artwork-id=\"${getData.image_id}\" style='color:#d01212'></i>\n            </div>\n            <button>Comment..</button>\n          </div>\n        `;\n      })\n      .join('');\n    displayResult.innerHTML = resultHTML;\n  } catch (error) {\n    displayResult.innerHTML = 'Something went wrong';\n  }\n})();\n\n(0,_modules_details_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_LikeEvent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_CardCart_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://api-capstone-project/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayNumberOfCard = () => {\n  const getNumberOfCard = document.querySelector('.CardNumber');\n  const card = document.querySelectorAll('.card');\n  getNumberOfCard.innerHTML = `( ${card.length} )`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNumberOfCard);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/CardCart.js?");

/***/ }),

/***/ "./src/modules/Involvementapi.js":
/*!***************************************!*\
  !*** ./src/modules/Involvementapi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllLikes: () => (/* binding */ getAllLikes),\n/* harmony export */   getArtworkComments: () => (/* binding */ getArtworkComments),\n/* harmony export */   postLikesImg: () => (/* binding */ postLikesImg),\n/* harmony export */   postNewComment: () => (/* binding */ postNewComment)\n/* harmony export */ });\nconst involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst involvementAPIid = 'G76rmGDabNdU1RkNCX4H';\n\nconst getAllLikes = () => fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`)\n  .then((response) => response.json())\n  .then((data) => data);\n\nconst getArtworkComments = async (imageId) => {\n  const url = `${involvementAPI}apps/${involvementAPIid}/comments?item_id=${imageId}`;\n  return fetch(url)\n    .then((response) => {\n      if (response.ok) {\n        return response.json();\n      }\n      if (response.status === 404 || response.status === 400) {\n        /*\n         * This happens if there are no comments saved in the InvolvementAPI for the\n         * artwork with the given ID. This is expected, and we should return an empty\n         * array to show that there are no comments.\n         */\n        return [];\n      }\n\n      throw new Error(\n        `Error getting artwork comments (status code: ${response.status})`,\n      );\n    })\n    .catch((error) => {\n      throw new Error(`Network error fetching comments ${error}`);\n    });\n};\n\nfunction postLikesImg(imageId) {\n  return fetch(`${involvementAPI}apps/${involvementAPIid}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: imageId,\n    }),\n    headers: {\n      'content-type': 'application/json; charset=UTF-8',\n    },\n  })\n    .then((response) => response.json())\n    .then((data) => data);\n}\n\nconst postNewComment = async ({ artworkId, username, comment }) => {\n  const url = `${involvementAPI}apps/${involvementAPIid}/comments`;\n  const requestBody = {\n    item_id: artworkId,\n    username,\n    comment,\n  };\n\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(requestBody),\n    });\n    if (!response.ok) {\n      throw new Error(\n        `Error posting comment: Status code ${response.status} returned`,\n      );\n    }\n    const data = await response.text();\n    return { success: data === 'Created' };\n  } catch (error) {\n    throw new Error(`Unknown Error fetching data ${error}`);\n  }\n};\n\n\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/Involvementapi.js?");

/***/ }),

/***/ "./src/modules/LikeEvent.js":
/*!**********************************!*\
  !*** ./src/modules/LikeEvent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n\n\nconst SetLikes = () => {\n  const LikeBtn = document.querySelectorAll('.bx-heart');\n\n  LikeBtn.forEach((element) => {\n    element.addEventListener('click', async (e) => {\n      const ArtWorkId = e.target.dataset.artworkId;\n      e.stopPropagation();\n      (0,_Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__.postLikesImg)(ArtWorkId);\n      window.location.reload();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetLikes);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/LikeEvent.js?");

/***/ }),

/***/ "./src/modules/add-comment-form.js":
/*!*****************************************!*\
  !*** ./src/modules/add-comment-form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFloatingLabels: () => (/* binding */ addFloatingLabels),\n/* harmony export */   initializeFormEventHandlers: () => (/* binding */ initializeFormEventHandlers)\n/* harmony export */ });\n/* harmony import */ var _Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n\n\n// Add floating labels\nconst addFloatingLabels = () => {\n  const inputs = document.querySelectorAll('.add-comment__form__input');\n\n  inputs.forEach((input) => {\n    input.addEventListener('focus', (e) => {\n      const span = e.target.nextElementSibling;\n      span.classList.add('float-label');\n    });\n\n    input.addEventListener('blur', (e) => {\n      if (e.target.value.trim() === '') {\n        const span = e.target.nextElementSibling;\n        span.classList.remove('float-label');\n      }\n    });\n  });\n};\n\nconst initializeFormEventHandlers = () => {\n  // Add form submition event handler\n  const addCommentForm = document.getElementById('add-comment__form');\n  addCommentForm.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const { artworkId } = addCommentForm.dataset;\n    const data = new FormData(addCommentForm);\n    const username = data.get('username');\n    const comment = data.get('comment');\n\n    try {\n      const { success } = await (0,_Involvementapi_js__WEBPACK_IMPORTED_MODULE_0__.postNewComment)({\n        artworkId,\n        username,\n        comment,\n      });\n      if (success) {\n        // TODO: Tell user that the comment was saved successfully\n        addCommentForm.reset();\n        window.location.reload();\n      }\n    } catch (e) {\n      // TODO: Tell user that the comment was NOT saved successfully, try again later\n    }\n  });\n};\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/add-comment-form.js?");

/***/ }),

/***/ "./src/modules/artworkAPI.js":
/*!***********************************!*\
  !*** ./src/modules/artworkAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchSingleArtworkDetails = async (artworkId) => {\n  const ENDPOINT = 'https://api.artic.edu/api/v1/artworks';\n  const url = `${ENDPOINT}/${artworkId}`;\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(\n        `Error fetching artwork details for id ${artworkId} data: Status code ${response.status} returned`,\n      );\n    }\n    const { data } = await response.json();\n    return data;\n  } catch (error) {\n    throw new Error(`Error fetching artwork detals ${error}`);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchSingleArtworkDetails);\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/artworkAPI.js?");

/***/ }),

/***/ "./src/modules/comments-counter.js":
/*!*****************************************!*\
  !*** ./src/modules/comments-counter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = () => {\n  const commentCountSpan = document.getElementById('comment-count');\n  const allComments = document.querySelectorAll('.modal__artwork__comment');\n  const numberOfComments = allComments ? allComments.length : 0;\n\n  if (commentCountSpan) {\n    commentCountSpan.innerText = numberOfComments;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/comments-counter.js?");

/***/ }),

/***/ "./src/modules/details-modal.js":
/*!**************************************!*\
  !*** ./src/modules/details-modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _artworkAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artworkAPI.js */ \"./src/modules/artworkAPI.js\");\n/* harmony import */ var _Involvementapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Involvementapi.js */ \"./src/modules/Involvementapi.js\");\n/* harmony import */ var _html_generators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html-generators.js */ \"./src/modules/html-generators.js\");\n/* harmony import */ var _add_comment_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-comment-form.js */ \"./src/modules/add-comment-form.js\");\n/* harmony import */ var _comments_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments-counter.js */ \"./src/modules/comments-counter.js\");\n\n\n\n\n\n\nconst initializeModal = () => {\n  const artWorkCards = document.querySelectorAll('.card');\n  const overlay = document.getElementById('overlay');\n  const modal = document.getElementById('modal');\n  const modalBody = document.getElementById('modal__body');\n  const modalCloseIcon = document.getElementById('modal__close-icon');\n\n  // Handle opening of modal\n  artWorkCards.forEach((card) => card.addEventListener('click', async () => {\n    const { artworkId } = card.dataset;\n    overlay.classList.add('open');\n    modal.classList.add('open');\n    const artworkData = await (0,_artworkAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(artworkId);\n    const comments = await (0,_Involvementapi_js__WEBPACK_IMPORTED_MODULE_1__.getArtworkComments)(artworkData.image_id);\n    modalBody.innerHTML = (0,_html_generators_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(artworkData, comments);\n    (0,_add_comment_form_js__WEBPACK_IMPORTED_MODULE_3__.addFloatingLabels)();\n    (0,_add_comment_form_js__WEBPACK_IMPORTED_MODULE_3__.initializeFormEventHandlers)();\n    (0,_comments_counter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    document.body.style.overflow = 'hidden';\n  }));\n\n  // Handle closing of modal\n  const handleModalClose = () => {\n    overlay.classList.remove('open');\n    modal.classList.remove('open');\n    modalBody.innerHTML = '';\n    document.body.style.overflow = 'auto';\n  };\n\n  overlay.addEventListener('click', handleModalClose);\n  modalCloseIcon.addEventListener('click', handleModalClose);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeModal);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/details-modal.js?");

/***/ }),

/***/ "./src/modules/html-generators.js":
/*!****************************************!*\
  !*** ./src/modules/html-generators.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generateArtWorkDetailsHTML = (artworkData, comments) => {\n  const artworkImgUrl = `https://www.artic.edu/iiif/2/${artworkData.image_id}/full/843,/0/default.jpg`;\n  let materialsUsed = 'N/A';\n  if (artworkData.material_titles.length) {\n    materialsUsed = artworkData.material_titles\n      .map((material) => `<span>${material.split(' ')[0]}</span>`)\n      .join('\\n');\n  }\n\n  let exhibitionHistory = 'N/A';\n  if (artworkData.exhibition_history?.length) {\n    exhibitionHistory = artworkData.exhibition_history\n      .split('\\n')\n      .slice(0, 4)\n      .map((item) => `<p>${item}</p>`)\n      .join('\\n');\n  }\n\n  let commentsHTML = '<p>There are no comments for this artwork.</p>';\n\n  if (comments.length) {\n    const commentsArr = [];\n    comments.forEach((commentData) => {\n      const { username, creation_date: creationDate, comment } = commentData;\n      const html = `\n        <div class=\"modal__artwork__comment\"/>\n          <div class=\"modal__artwork__comment__header\">\n            <div class=\"modal__artwork__comment__avatar\"><span>${username[0]}</span></div>\n            <span class=\"modal__artwork__comment__username\">${username}</span>\n            <div class=\"modal__artwork__comment__date\">on <span>${creationDate}</span></div>\n          </div>\n          <p class=\"modal__artwork__comment__body\">${comment}</p>\n        </div>\n      `;\n      commentsArr.push(html);\n    });\n\n    commentsHTML = commentsArr.join('\\n');\n  }\n\n  const addCommentForm = `\n    <form class=\"add-comment__form\" id=\"add-comment__form\" data-artwork-id=\"${artworkData.image_id}\">\n        <label class=\"add-comment__form__label\" for=\"username\">\n          <input\n            class=\"add-comment__form__input\"\n            type=\"text\"\n            id=\"username\"\n            name=\"username\"\n            required\n          />\n          <span>Your name</span>\n        </label>\n        <label class=\"add-comment__form__label\" for=\"comment\">\n          <textarea\n            class=\"add-comment__form__input\"\n            id=\"comment\"\n            name=\"comment\"\n            rows=\"6\"\n            required\n          ></textarea>\n          <span>Your insights</span>\n        </label>\n        <div class=\"add-comment__form__errors\" id=\"add-comment__form__errors\">\n            <span>Username is required.</span>\n            <span>Please provide a comment.</span>\n        </div>\n        <div class=\"add-comment__form__success\" id=\"add-comment__form__success\">\n          <span>Your comment was added sucessfully.</span>\n        </div>\n        <button class=\"add-comment__form__btn\" type=\"submit\">Comment</button>\n      </form>\n  `;\n\n  return `\n  <div class=\"modal__header\">\n    <h2>${artworkData.title}</h2>\n    <p>By ${artworkData.artist_title}</p>\n  </div>\n  <img class=\"modal__artwork\" src=\"${artworkImgUrl}\" alt=\"${artworkData.title}\" >\n  <div class=\"modal__artwork__stats\">\n    <div class=\"modal__artwork__stat\">\n      <span class=\"modal__artwork__stat__title\">Place of Origin:</span>\n      <span>${artworkData.place_of_origin}</span>\n    </div>\n    <div class=\"modal__artwork__stat\">\n      <span class=\"modal__artwork__stat__title\">Year:</span>\n      <span>${artworkData.date_end}</span>\n    </div>\n    <div class=\"modal__artwork__stat\">\n      <span class=\"modal__artwork__stat__title\">Materials:</span>\n      <div>${materialsUsed}</div>\n    </div>\n  </div>\n  <div class=\"modal__exhibition-history\">\n    <span>Exhibition History:</span>\n    <div class=\"modal__exhibition-history__item\">${exhibitionHistory}</div>\n  </div>\n  <div class=\"modal__artwork__comments\">\n    <h3 class=\"modal__artwork__comments__header\">Comments (<span id=\"comment-count\"></span>)</h3>\n    ${commentsHTML}\n    <div class=\"add-comment-sec\">\n      <h3>Add a comment</h3>\n      ${addCommentForm}\n    </div>\n  </div>\n`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateArtWorkDetailsHTML);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/modules/html-generators.js?");

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