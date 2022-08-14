/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/epub.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/epub.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mySlides {display: none}\n\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n.epub-container {\n  width: 100%;\n  position: relative;\n  margin: auto;\n}\n\n/* Slideshow menu pages */\n.epub-menu {\n  width: 100%;\n  text-align:center;\n}\n\n/* Next & previous buttons */\n.epub-prev, .epub-next {\n  cursor: pointer;\n  position: absolute;\n  top: 1.5%;\n  width: auto;\n  margin-top: --rem;\n  color: green;\n  font-weight: bold;\n  font-size: 1.5rem;\n  transition: 0.6s ease;\n  user-select: none;\n  background-color: transparant;\n}\n\n.epub-next {\n  right: 0;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.epub-prev:hover, .epub-next:hover {\n  background-color: rgba(0,0,0,0.8);\n}\n\n\n/* The dots/bullets/indicators */\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n/* Fading animation */\n.epub-container>.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n@keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n", "",{"version":3,"sources":["webpack://./src/epub.css"],"names":[],"mappings":"AAAA,WAAW,aAAa;;AAExB,KAAK,sBAAsB,CAAC;;AAE5B,wBAAwB;AACxB;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;AACd;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA,4BAA4B;AAC5B;EACE,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,QAAQ;AACV;;AAEA,yEAAyE;AACzE;EACE,iCAAiC;AACnC;;;AAGA,gCAAgC;AAChC;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,qBAAqB;AACrB;EACE,4BAA4B;EAC5B,gCAAgC;EAChC,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,MAAM,WAAW;EACjB,IAAI,UAAU;AAChB;;AAEA;EACE,MAAM,WAAW;EACjB,IAAI,UAAU;AAChB","sourcesContent":[".mySlides {display: none}\n\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n.epub-container {\n  width: 100%;\n  position: relative;\n  margin: auto;\n}\n\n/* Slideshow menu pages */\n.epub-menu {\n  width: 100%;\n  text-align:center;\n}\n\n/* Next & previous buttons */\n.epub-prev, .epub-next {\n  cursor: pointer;\n  position: absolute;\n  top: 1.5%;\n  width: auto;\n  margin-top: --rem;\n  color: green;\n  font-weight: bold;\n  font-size: 1.5rem;\n  transition: 0.6s ease;\n  user-select: none;\n  background-color: transparant;\n}\n\n.epub-next {\n  right: 0;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.epub-prev:hover, .epub-next:hover {\n  background-color: rgba(0,0,0,0.8);\n}\n\n\n/* The dots/bullets/indicators */\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n/* Fading animation */\n.epub-container>.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n@keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./data/website/00.jpg */ "./src/data/website/00.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main-bg-color: #caa009;\n    --bg-color: #f3edd1;\n    --contrast-bg-color: #870d4d;\n    --card-width: 300px;\n    font-size: calc(0.75em + 1vmin);\n    font-size: 14px;\n    font-family: 'Open Sans', sans-serif;\n}\n\n@media screen and (min-width: 900px) {\n    :root {\n        --card-width: 400px;\n        font-size: 18px;  \n    }\n}\n\n.button-container {\n    margin: .1rem;\n    padding: .2rem;\n    display: flex;\n    justify-content: space-between;\n    background-color: var(--bg-color);\n}\n\n.button-container>a {\n    margin: .2rem;\n    width: 30%;\n    font-size: 1rem;\n    background-color: var(--contrast-bg-color);\n    color: white;\n}\n\n.section {\n    display: flex; /*added*/\n    flex-direction: column; /*added*/\n    background-color: white;\n    border: 0.2rem solid var(--contrast-bg-color);\n    margin: .3rem;\n    padding: 0.2rem;\n}\n\n.section-title {\n    font-size: 1.6rem;\n    margin: 1rem;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.section-subtitle {\n    font-size: 1rem;\n    margin: 1rem;\n    margin-top: 0rem;\n}\n\n.main-section {\n    position: relative;\n    font-weight: bolder;\n    color: var(--contrast-bg-color);\n}\n\n.main-section>.section-title {\n    font-size: 2.5rem;\n}\n\n.main-section>.section-subtitle {\n    font-size: 1.3rem;\n}\n\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(var(--card-width), 1fr));\n    justify-items: center;\n}\n\n.card {\n    width: 90%;\n    background-color: var(--bg-color);\n    margin-bottom: 1.2rem;\n}\n\n.card-shadow {\n    border: none;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, .2)\n}\n\n.card-title {  \n    font-size: 1.2rem;\n    font-weight: bold;\n    text-align: center;\n    background-color: var(--contrast-bg-color);\n    color: white;\n}\n\n.card-image {\n    padding: var(--padding);\n    padding-bottom: 0;\n    margin-bottom: .5rem;\n    padding: 0;\n}\n\n.card-image>img {\n    display: block;\n    width: 100%;\n    aspect-ratio: \"16/9\";\n    object-fit: scale-down;\n    object-position: center;\n    transition: 500ms transform ease-in-out;\n}\n\n.card:hover>.card-image>img {\n    transform: scale(1.025);\n}\n\n.card-description {\n    font-size: 1rem;\n    padding: 0.3rem;\n    padding-top: 0;\n}\n\n.main-section::before {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    opacity: 0.25;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: auto;\n    height: auto;\n}\n\na {\n    background: var(--main-bg-color);\n    color: white;\n    border: none;\n    font-size: 1rem;\n    padding: .2em .75em;\n    border-radius: .25em;\n    cursor: pointer;\n}\n\na:hover, a:focus {\n    background: var(--contrast-bg-color);\n}\n\n.extra{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0.3rem;    \n}\n\n.extra-items{\n    margin-top: 1rem;   \n}\n\n.de-amelander{\n    margin-top: 1vw;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--bg-color);    \n}\n\n\n.epub-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.epub-div>h1 {\n    background: var(--main-bg-color);\n    margin: 1.3rem;\n    font-size: 1.6rem;\n}\n\n.epub-div>a {\n    font-size: 1rem;\n    background: var(--contrast-bg-color);\n    color: white;\n}\n\n#contact{\n    background: var(--contrast-bg-color);\n    color: white;\n    margin: .3rem;\n    padding: .3rem;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;IACI,wBAAwB;IACxB,mBAAmB;IACnB,4BAA4B;IAC5B,mBAAmB;IACnB,+BAA+B;IAC/B,eAAe;IACf,oCAAoC;AACxC;;AAEA;IACI;QACI,mBAAmB;QACnB,eAAe;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,eAAe;IACf,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;IACI,aAAa,EAAE,QAAQ;IACvB,sBAAsB,EAAE,QAAQ;IAChC,uBAAuB;IACvB,6CAA6C;IAC7C,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uEAAuE;IACvE,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,iCAAiC;IACjC,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ;AACJ;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,WAAW;IACX,oBAAoB;IACpB,sBAAsB;IACtB,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,yDAA8C;IAC9C,4BAA4B;IAC5B,4BAA4B;IAC5B,sBAAsB;IACtB,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iCAAiC;AACrC;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,gCAAgC;IAChC,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,cAAc;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');\n\n:root {\n    --main-bg-color: #caa009;\n    --bg-color: #f3edd1;\n    --contrast-bg-color: #870d4d;\n    --card-width: 300px;\n    font-size: calc(0.75em + 1vmin);\n    font-size: 14px;\n    font-family: 'Open Sans', sans-serif;\n}\n\n@media screen and (min-width: 900px) {\n    :root {\n        --card-width: 400px;\n        font-size: 18px;  \n    }\n}\n\n.button-container {\n    margin: .1rem;\n    padding: .2rem;\n    display: flex;\n    justify-content: space-between;\n    background-color: var(--bg-color);\n}\n\n.button-container>a {\n    margin: .2rem;\n    width: 30%;\n    font-size: 1rem;\n    background-color: var(--contrast-bg-color);\n    color: white;\n}\n\n.section {\n    display: flex; /*added*/\n    flex-direction: column; /*added*/\n    background-color: white;\n    border: 0.2rem solid var(--contrast-bg-color);\n    margin: .3rem;\n    padding: 0.2rem;\n}\n\n.section-title {\n    font-size: 1.6rem;\n    margin: 1rem;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.section-subtitle {\n    font-size: 1rem;\n    margin: 1rem;\n    margin-top: 0rem;\n}\n\n.main-section {\n    position: relative;\n    font-weight: bolder;\n    color: var(--contrast-bg-color);\n}\n\n.main-section>.section-title {\n    font-size: 2.5rem;\n}\n\n.main-section>.section-subtitle {\n    font-size: 1.3rem;\n}\n\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(var(--card-width), 1fr));\n    justify-items: center;\n}\n\n.card {\n    width: 90%;\n    background-color: var(--bg-color);\n    margin-bottom: 1.2rem;\n}\n\n.card-shadow {\n    border: none;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, .2)\n}\n\n.card-title {  \n    font-size: 1.2rem;\n    font-weight: bold;\n    text-align: center;\n    background-color: var(--contrast-bg-color);\n    color: white;\n}\n\n.card-image {\n    padding: var(--padding);\n    padding-bottom: 0;\n    margin-bottom: .5rem;\n    padding: 0;\n}\n\n.card-image>img {\n    display: block;\n    width: 100%;\n    aspect-ratio: \"16/9\";\n    object-fit: scale-down;\n    object-position: center;\n    transition: 500ms transform ease-in-out;\n}\n\n.card:hover>.card-image>img {\n    transform: scale(1.025);\n}\n\n.card-description {\n    font-size: 1rem;\n    padding: 0.3rem;\n    padding-top: 0;\n}\n\n.main-section::before {\n    background-image: url('./data/website/00.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    opacity: 0.25;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: auto;\n    height: auto;\n}\n\na {\n    background: var(--main-bg-color);\n    color: white;\n    border: none;\n    font-size: 1rem;\n    padding: .2em .75em;\n    border-radius: .25em;\n    cursor: pointer;\n}\n\na:hover, a:focus {\n    background: var(--contrast-bg-color);\n}\n\n.extra{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0.3rem;    \n}\n\n.extra-items{\n    margin-top: 1rem;   \n}\n\n.de-amelander{\n    margin-top: 1vw;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: var(--bg-color);    \n}\n\n\n.epub-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.epub-div>h1 {\n    background: var(--main-bg-color);\n    margin: 1.3rem;\n    font-size: 1.6rem;\n}\n\n.epub-div>a {\n    font-size: 1rem;\n    background: var(--contrast-bg-color);\n    color: white;\n}\n\n#contact{\n    background: var(--contrast-bg-color);\n    color: white;\n    margin: .3rem;\n    padding: .3rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/epub.css":
/*!**********************!*\
  !*** ./src/epub.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_epub_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./epub.css */ "./node_modules/css-loader/dist/cjs.js!./src/epub.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_epub_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_epub_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_epub_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_epub_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/epub.js":
/*!*********************!*\
  !*** ./src/epub.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ epub)
/* harmony export */ });
/* harmony import */ var _epub_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./epub.css */ "./src/epub.css");


function epub(parent, name, aantal, extension) {
  const epubContainer = parent.appendChild(document.createElement('div'));
  epubContainer.classList.add("epub-container")
  const epubMenu = parent.appendChild(document.createElement('div'));
  epubMenu.classList.add("epub-menu")

  for (let i = 1; i <= aantal; i++) {
    const slides = epubContainer.appendChild(document.createElement('div'));
    slides.classList.add("mySlides","fade")
    const img = slides.appendChild(document.createElement('img'));
    const src = "./data/" + name + "/" + getImageId(i) + "." + extension;
    img.src = src;
    img.style = "width:100%";
    img.loading = "lazy";

    const span = epubMenu.appendChild(document.createElement('span'));
    span.classList.add("dot");
    span.addEventListener("click", () => currentSlide(epubContainer,i))
  }

  const prev = epubContainer.appendChild(document.createElement('a'));
  prev.classList.add("epub-prev")
  prev.addEventListener("click", () => plusSlides(epubContainer,-1))
  prev.innerHTML = "&#10094;"

  const next = epubContainer.appendChild(document.createElement('a'));
  next.classList.add("epub-next")
  next.innerHTML = "&#10095;"
  next.addEventListener("click", () => plusSlides(epubContainer,+1))

  var slideIndex = 1;
  showSlides(epubContainer,slideIndex);


  function getImageId(i) {
    let number = i;
    if (number < 10)
      return '0' + number;
    return number;
  }



  function plusSlides(parent,n) {
    showSlides(parent,slideIndex += n);
  }

  function currentSlide(parent,n) {
    showSlides(parent,slideIndex = n);
  }

  function showSlides(parent,n) {
    const slides = parent.getElementsByClassName("mySlides");

    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}


/***/ }),

/***/ "./src/data/website/00.jpg":
/*!*********************************!*\
  !*** ./src/data/website/00.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "162f5f7d909fba012078.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _epub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./epub.js */ "./src/epub.js");



const debug = false;
fetch("./data/freulehuuske.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const body = document.body;
       if (!debug) createLinks(body)
        doit(body, data);
        if (!debug) createBijlagen(body, data)
        createContact(body);
    });



function createBijlagen(parent, data) {
    createDagboek(parent, data);
    parent.appendChild(document.createElement("hr"))
    createAmelander(parent, data);

    function createExtra(parent, id) {
        const div = parent.appendChild(document.createElement("div"))
        div.classList.add("extra")
        div.id = id
        const a = div.appendChild(document.createElement("a"))
        a.innerText = "Terug naar top"
        a.href = "#home"
        return div;
    }
    function createDagboek(parent) {
        const dagboekDiv = createExtra(parent, "dagboek")
        dagboekDiv.classList.add("epub-div")

        const h1 = dagboekDiv.appendChild(document.createElement("h1"))
        h1.classList.add("extra-items")
        h1.innerText = "Dagboek van Willem Hofker over de restauratie (1982-1992)"
        ;(0,_epub_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dagboekDiv, 'dagboek', 80, "jpg");
    }

    function createAmelander(parent) {
        const amelanderDiv = createExtra(parent, "amelander")

        const div = amelanderDiv.appendChild(document.createElement("div"));
        div.classList.add("de-amelander", "extra-items")
        const a = div.appendChild(document.createElement("a"));
        a.href = "https://drive.google.com/file/d/1Ie5GE7C-QJt-1SrWzCD-D6FsavthZiCY/view?usp=sharing"
        a.target = "_blank";
        a.innerText = "Klik hier voor artikel over Vermaningspad en Het Freule Huuske"

        const h1 = div.appendChild(document.createElement("h3"));
        h1.innerHTML = `<b style="font-size:2vw">Boodschap van Jacob Roep en Afke Schols van de 'Amelander Musea': </b><br><i>wij vinden het
    belangrijk dat dit historische pad in Nes behouden blijft. Amelander
    Musea erkennen ook het historische belang van het Vermaningspad door
    tijdens vakanties Free Tours te organiseren. (Zie <a href="https://www.vvvameland.nl/zien-en-doen/excursies/free-tour#:~:text=Stichting%20Amelander%20Musea%20organiseert%20free%20tours%20in%20de,de%20leukste%20introductie%20tot%20de%20cultuurhistorie%20van%20Ameland" target="_blank">Free Tour</a>) Deze vrijblijvende
    rondleidingen leiden u langs de bijzondere geschiedenis van het
    Vermaningspad en gaan over de bestuurlijke en religieuze geschiedenis
    van Ameland en de walvisvaart.</i>`;
        const deAmelander = amelanderDiv.appendChild(document.createElement("a"))
        deAmelander.classList.add("extra-items");

        deAmelander.innerText = "Maandblad 'de Amelander', (bijna) overal op Ameland te koop"
        deAmelander.href = "https://www.deamelander.nl/"
        deAmelander.target = "_blank"

        const yt = amelanderDiv.appendChild(document.createElement("a"))
        yt.classList.add("extra-items")

        yt.innerText = "Freetour met bezoek Freule Huuske"
        yt.href = "https://www.youtube.com/watch?v=0Sc-1cLTR7A&ab_channel=AmelandVandaag"
        yt.target = "_blank"
    }
}


function doit(parent, data) {
    for (let i = 0; i < data.sections.length; i++) {
        const section = data.sections[i];
        const sectionDiv = parent.appendChild(document.createElement("div"));
        sectionDiv.classList.add("section")
        if (i == 0) {
            sectionDiv.classList.add("main-section")
        }
        const h1 = sectionDiv.appendChild(document.createElement("h1"));
        h1.classList.add("section-title")
        if (debug) h1.innerText = "title"
        else
            h1.innerHTML = section.title;
        if (section.subtitle != null) {
            const h2 = sectionDiv.appendChild(document.createElement("h2"));
            if (debug) h2.innerHTML = "subtitle";
            else h2.innerHTML = section.subtitle;
            h2.classList.add("section-subtitle")
        }

        if (section.cards.length > 0) {
            const grid = sectionDiv.appendChild(document.createElement("div"));
            grid.classList.add("card-grid")
            for (let j = 0; j < section.cards.length; j++) {
                const cardData = section.cards[j]
                const card = grid.appendChild(document.createElement("div"));
                card.classList.add("card", "card-shadow");
                if (cardData.title != null) {
                    const cardTitle = card.appendChild(document.createElement("div"));
                    cardTitle.classList.add("card-title");
                    if (debug) cardTitle.innerText = "title"
                    else cardTitle.innerHTML = cardData.title
                   
                }
                
                 if (cardData.picture != null) {
                    const cardImage = card.appendChild(document.createElement("div"));
                    cardImage.classList.add("card-image");
                     const img = cardImage.appendChild(document.createElement("img"));
                    img.src = "./data/website/" + cardData.picture
                    img.loading = "lazy"
                    if (cardData.href!=null)
                        img.addEventListener("click", ()=>{ 
                              window.location.href=cardData.href
                  })
                
                    
                }
              
                if (cardData.description != null) {
                    const cardFooter = card.appendChild(document.createElement("div"));
                    cardFooter.classList.add("card-description");
                    if(debug) cardFooter.innerText="description"
                    else cardFooter.innerHTML = cardData.description
                }
            }
        }
    }
}

function createLinks(parent) {
    const buttonContainer = parent.appendChild(document.createElement("div"));
    buttonContainer.classList.add("button-container")
    buttonContainer.id = "home"
    const dagboekButton = buttonContainer.appendChild(document.createElement("a"));
    dagboekButton.href = "#dagboek"
    dagboekButton.innerText = "Naar dagboek Willem Hofker over restauratie";
    const amelanderButton = buttonContainer.appendChild(document.createElement("a"));
    amelanderButton.href = "#amelander"
    amelanderButton.innerText = "Naar Amelander Musea over het Freule Huuske";
    const contactButton = buttonContainer.appendChild(document.createElement("a"));
    contactButton.href = "#contact"
    contactButton.innerText = "Contact";
}

function createContact(parent){
    const footer= parent.appendChild(document.createElement("footer"))
    footer.id="contact";
    const strong= footer.appendChild(document.createElement("strong"))
     strong.innerHTML="Stichting Het Freule Huuske";
     const div= footer.appendChild(document.createElement("div"))
     div.innerHTML="Vermaningspad 6, Nes, Ameland<br>Email: hetfreulehuuske@gmail.com <br>Tel: 06-41850977"
  
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IZXQgRnJldWxlIEh1dXNrZS8uL3NyYy9lcHViLmNzcyIsIndlYnBhY2s6Ly9IZXQgRnJldWxlIEh1dXNrZS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vSGV0IEZyZXVsZSBIdXVza2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0hldCBGcmV1bGUgSHV1c2tlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9IZXQgRnJldWxlIEh1dXNrZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0hldCBGcmV1bGUgSHV1c2tlLy4vc3JjL2VwdWIuY3NzPzY3NjkiLCJ3ZWJwYWNrOi8vSGV0IEZyZXVsZSBIdXVza2UvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vSGV0IEZyZXVsZSBIdXVza2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vSGV0IEZyZXVsZSBIdXVza2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0hldCBGcmV1bGUgSHV1c2tlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0hldCBGcmV1bGUgSHV1c2tlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0hldCBGcmV1bGUgSHV1c2tlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vSGV0IEZyZXVsZSBIdXVza2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9IZXQgRnJldWxlIEh1dXNrZS8uL3NyYy9lcHViLmpzIiwid2VicGFjazovL0hldCBGcmV1bGUgSHV1c2tlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hldCBGcmV1bGUgSHV1c2tlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0hldCBGcmV1bGUgSHV1c2tlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9IZXQgRnJldWxlIEh1dXNrZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0hldCBGcmV1bGUgSHV1c2tlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSGV0IEZyZXVsZSBIdXVza2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IZXQgRnJldWxlIEh1dXNrZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9IZXQgRnJldWxlIEh1dXNrZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9IZXQgRnJldWxlIEh1dXNrZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5teVNsaWRlcyB7ZGlzcGxheTogbm9uZX1cXG5cXG5pbWcge3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxcblxcbi8qIFNsaWRlc2hvdyBjb250YWluZXIgKi9cXG4uZXB1Yi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIFNsaWRlc2hvdyBtZW51IHBhZ2VzICovXFxuLmVwdWItbWVudSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xcbi5lcHViLXByZXYsIC5lcHViLW5leHQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjUlO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAtLXJlbTtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyYW50O1xcbn1cXG5cXG4uZXB1Yi1uZXh0IHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBPbiBob3ZlciwgYWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB3aXRoIGEgbGl0dGxlIGJpdCBzZWUtdGhyb3VnaCAqL1xcbi5lcHViLXByZXY6aG92ZXIsIC5lcHViLW5leHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xcbn1cXG5cXG5cXG4vKiBUaGUgZG90cy9idWxsZXRzL2luZGljYXRvcnMgKi9cXG4uZG90IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXG59XFxuXFxuLmFjdGl2ZSwgLmRvdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xcbn1cXG5cXG4vKiBGYWRpbmcgYW5pbWF0aW9uICovXFxuLmVwdWItY29udGFpbmVyPi5mYWRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtvcGFjaXR5OiAuNH0gXFxuICB0byB7b3BhY2l0eTogMX1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge29wYWNpdHk6IC40fSBcXG4gIHRvIHtvcGFjaXR5OiAxfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZXB1Yi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVyxhQUFhOztBQUV4QixLQUFLLHNCQUFzQixDQUFDOztBQUU1Qix3QkFBd0I7QUFDeEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUEseUVBQXlFO0FBQ3pFO0VBQ0UsaUNBQWlDO0FBQ25DOzs7QUFHQSxnQ0FBZ0M7QUFDaEM7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLDRCQUE0QjtFQUM1QixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLE1BQU0sV0FBVztFQUNqQixJQUFJLFVBQVU7QUFDaEI7O0FBRUE7RUFDRSxNQUFNLFdBQVc7RUFDakIsSUFBSSxVQUFVO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5teVNsaWRlcyB7ZGlzcGxheTogbm9uZX1cXG5cXG5pbWcge3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxcblxcbi8qIFNsaWRlc2hvdyBjb250YWluZXIgKi9cXG4uZXB1Yi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIFNsaWRlc2hvdyBtZW51IHBhZ2VzICovXFxuLmVwdWItbWVudSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xcbi5lcHViLXByZXYsIC5lcHViLW5leHQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxLjUlO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAtLXJlbTtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyYW50O1xcbn1cXG5cXG4uZXB1Yi1uZXh0IHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBPbiBob3ZlciwgYWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB3aXRoIGEgbGl0dGxlIGJpdCBzZWUtdGhyb3VnaCAqL1xcbi5lcHViLXByZXY6aG92ZXIsIC5lcHViLW5leHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xcbn1cXG5cXG5cXG4vKiBUaGUgZG90cy9idWxsZXRzL2luZGljYXRvcnMgKi9cXG4uZG90IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgbWFyZ2luOiAwIDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXG59XFxuXFxuLmFjdGl2ZSwgLmRvdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xcbn1cXG5cXG4vKiBGYWRpbmcgYW5pbWF0aW9uICovXFxuLmVwdWItY29udGFpbmVyPi5mYWRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHtvcGFjaXR5OiAuNH0gXFxuICB0byB7b3BhY2l0eTogMX1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIGZyb20ge29wYWNpdHk6IC40fSBcXG4gIHRvIHtvcGFjaXR5OiAxfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZGF0YS93ZWJzaXRlLzAwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1haW4tYmctY29sb3I6ICNjYWEwMDk7XFxuICAgIC0tYmctY29sb3I6ICNmM2VkZDE7XFxuICAgIC0tY29udHJhc3QtYmctY29sb3I6ICM4NzBkNGQ7XFxuICAgIC0tY2FyZC13aWR0aDogMzAwcHg7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1ZW0gKyAxdm1pbik7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWNhcmQtd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4OyAgXFxuICAgIH1cXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IC4xcmVtO1xcbiAgICBwYWRkaW5nOiAuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyPmEge1xcbiAgICBtYXJnaW46IC4ycmVtO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRyYXN0LWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qYWRkZWQqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKmFkZGVkKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLWNvbnRyYXN0LWJnLWNvbG9yKTtcXG4gICAgbWFyZ2luOiAuM3JlbTtcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5zZWN0aW9uLXN1YnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDByZW07XFxufVxcblxcbi5tYWluLXNlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jb250cmFzdC1iZy1jb2xvcik7XFxufVxcblxcbi5tYWluLXNlY3Rpb24+LnNlY3Rpb24tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLm1haW4tc2VjdGlvbj4uc2VjdGlvbi1zdWJ0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uY2FyZC1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCh2YXIoLS1jYXJkLXdpZHRoKSwgMWZyKSk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcXG59XFxuXFxuLmNhcmQtc2hhZG93IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAuMilcXG59XFxuXFxuLmNhcmQtdGl0bGUgeyAgXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250cmFzdC1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNhcmQtaW1hZ2Uge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2FyZC1pbWFnZT5pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogXFxcIjE2LzlcXFwiO1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogNTAwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2FyZDpob3Zlcj4uY2FyZC1pbWFnZT5pbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcXG59XFxuXFxuLmNhcmQtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi5tYWluLXNlY3Rpb246OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAuMmVtIC43NWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5hOmhvdmVyLCBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udHJhc3QtYmctY29sb3IpO1xcbn1cXG5cXG4uZXh0cmF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMC4zcmVtOyAgICBcXG59XFxuXFxuLmV4dHJhLWl0ZW1ze1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtOyAgIFxcbn1cXG5cXG4uZGUtYW1lbGFuZGVye1xcbiAgICBtYXJnaW4tdG9wOiAxdnc7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTsgICAgXFxufVxcblxcblxcbi5lcHViLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXB1Yi1kaXY+aDEge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgbWFyZ2luOiAxLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uZXB1Yi1kaXY+YSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udHJhc3QtYmctY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb250YWN0e1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250cmFzdC1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAuM3JlbTtcXG4gICAgcGFkZGluZzogLjNyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhLEVBQUUsUUFBUTtJQUN2QixzQkFBc0IsRUFBRSxRQUFRO0lBQ2hDLHVCQUF1QjtJQUN2Qiw2Q0FBNkM7SUFDN0MsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVFQUF1RTtJQUN2RSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlEQUE4QztJQUM5Qyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjY2FhMDA5O1xcbiAgICAtLWJnLWNvbG9yOiAjZjNlZGQxO1xcbiAgICAtLWNvbnRyYXN0LWJnLWNvbG9yOiAjODcwZDRkO1xcbiAgICAtLWNhcmQtd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoMC43NWVtICsgMXZtaW4pO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1jYXJkLXdpZHRoOiA0MDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgIFxcbiAgICB9XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAuMXJlbTtcXG4gICAgcGFkZGluZzogLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lcj5hIHtcXG4gICAgbWFyZ2luOiAuMnJlbTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250cmFzdC1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4OyAvKmFkZGVkKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyphZGRlZCovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1jb250cmFzdC1iZy1jb2xvcik7XFxuICAgIG1hcmdpbjogLjNyZW07XFxuICAgIHBhZGRpbmc6IDAuMnJlbTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY29udHJhc3QtYmctY29sb3IpO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uPi5zZWN0aW9uLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5tYWluLXNlY3Rpb24+LnNlY3Rpb24tc3VidGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmNhcmQtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgodmFyKC0tY2FyZC13aWR0aCksIDFmcikpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxufVxcblxcbi5jYXJkLXNoYWRvdyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgLjIpXFxufVxcblxcbi5jYXJkLXRpdGxlIHsgIFxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udHJhc3QtYmctY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jYXJkLWltYWdlIHtcXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNhcmQtaW1hZ2U+aW1nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IFxcXCIxNi85XFxcIjtcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDUwMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNhcmQ6aG92ZXI+LmNhcmQtaW1hZ2U+aW1nIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxufVxcblxcbi5jYXJkLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vZGF0YS93ZWJzaXRlLzAwLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogLjJlbSAuNzVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYTpob3ZlciwgYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRyYXN0LWJnLWNvbG9yKTtcXG59XFxuXFxuLmV4dHJhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDAuM3JlbTsgICAgXFxufVxcblxcbi5leHRyYS1pdGVtc3tcXG4gICAgbWFyZ2luLXRvcDogMXJlbTsgICBcXG59XFxuXFxuLmRlLWFtZWxhbmRlcntcXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7ICAgIFxcbn1cXG5cXG5cXG4uZXB1Yi1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmVwdWItZGl2PmgxIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIG1hcmdpbjogMS4zcmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmVwdWItZGl2PmEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRyYXN0LWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGFjdHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udHJhc3QtYmctY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogLjNyZW07XFxuICAgIHBhZGRpbmc6IC4zcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXB1Yi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VwdWIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0ICcuL2VwdWIuY3NzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVwdWIocGFyZW50LCBuYW1lLCBhYW50YWwsIGV4dGVuc2lvbikge1xuICBjb25zdCBlcHViQ29udGFpbmVyID0gcGFyZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgZXB1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXB1Yi1jb250YWluZXJcIilcbiAgY29uc3QgZXB1Yk1lbnUgPSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICBlcHViTWVudS5jbGFzc0xpc3QuYWRkKFwiZXB1Yi1tZW51XCIpXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYWFudGFsOyBpKyspIHtcbiAgICBjb25zdCBzbGlkZXMgPSBlcHViQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBzbGlkZXMuY2xhc3NMaXN0LmFkZChcIm15U2xpZGVzXCIsXCJmYWRlXCIpXG4gICAgY29uc3QgaW1nID0gc2xpZGVzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKTtcbiAgICBjb25zdCBzcmMgPSBcIi4vZGF0YS9cIiArIG5hbWUgKyBcIi9cIiArIGdldEltYWdlSWQoaSkgKyBcIi5cIiArIGV4dGVuc2lvbjtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGltZy5zdHlsZSA9IFwid2lkdGg6MTAwJVwiO1xuICAgIGltZy5sb2FkaW5nID0gXCJsYXp5XCI7XG5cbiAgICBjb25zdCBzcGFuID0gZXB1Yk1lbnUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkb3RcIik7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY3VycmVudFNsaWRlKGVwdWJDb250YWluZXIsaSkpXG4gIH1cblxuICBjb25zdCBwcmV2ID0gZXB1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICBwcmV2LmNsYXNzTGlzdC5hZGQoXCJlcHViLXByZXZcIilcbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcGx1c1NsaWRlcyhlcHViQ29udGFpbmVyLC0xKSlcbiAgcHJldi5pbm5lckhUTUwgPSBcIiYjMTAwOTQ7XCJcblxuICBjb25zdCBuZXh0ID0gZXB1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xuICBuZXh0LmNsYXNzTGlzdC5hZGQoXCJlcHViLW5leHRcIilcbiAgbmV4dC5pbm5lckhUTUwgPSBcIiYjMTAwOTU7XCJcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcGx1c1NsaWRlcyhlcHViQ29udGFpbmVyLCsxKSlcblxuICB2YXIgc2xpZGVJbmRleCA9IDE7XG4gIHNob3dTbGlkZXMoZXB1YkNvbnRhaW5lcixzbGlkZUluZGV4KTtcblxuXG4gIGZ1bmN0aW9uIGdldEltYWdlSWQoaSkge1xuICAgIGxldCBudW1iZXIgPSBpO1xuICAgIGlmIChudW1iZXIgPCAxMClcbiAgICAgIHJldHVybiAnMCcgKyBudW1iZXI7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG5cblxuICBmdW5jdGlvbiBwbHVzU2xpZGVzKHBhcmVudCxuKSB7XG4gICAgc2hvd1NsaWRlcyhwYXJlbnQsc2xpZGVJbmRleCArPSBuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGN1cnJlbnRTbGlkZShwYXJlbnQsbikge1xuICAgIHNob3dTbGlkZXMocGFyZW50LHNsaWRlSW5kZXggPSBuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dTbGlkZXMocGFyZW50LG4pIHtcbiAgICBjb25zdCBzbGlkZXMgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xuXG4gICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xuICAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCkgeyBzbGlkZUluZGV4ID0gMSB9XG4gICAgaWYgKG4gPCAxKSB7IHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICAgIH1cbiAgICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG90c1tzbGlkZUluZGV4IC0gMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgZXB1YiBmcm9tICcuL2VwdWIuanMnXG5cbmNvbnN0IGRlYnVnID0gZmFsc2U7XG5mZXRjaChcIi4vZGF0YS9mcmV1bGVodXVza2UuanNvblwiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICBpZiAoIWRlYnVnKSBjcmVhdGVMaW5rcyhib2R5KVxuICAgICAgICBkb2l0KGJvZHksIGRhdGEpO1xuICAgICAgICBpZiAoIWRlYnVnKSBjcmVhdGVCaWpsYWdlbihib2R5LCBkYXRhKVxuICAgICAgICBjcmVhdGVDb250YWN0KGJvZHkpO1xuICAgIH0pO1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlQmlqbGFnZW4ocGFyZW50LCBkYXRhKSB7XG4gICAgY3JlYXRlRGFnYm9layhwYXJlbnQsIGRhdGEpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIikpXG4gICAgY3JlYXRlQW1lbGFuZGVyKHBhcmVudCwgZGF0YSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFeHRyYShwYXJlbnQsIGlkKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImV4dHJhXCIpXG4gICAgICAgIGRpdi5pZCA9IGlkXG4gICAgICAgIGNvbnN0IGEgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikpXG4gICAgICAgIGEuaW5uZXJUZXh0ID0gXCJUZXJ1ZyBuYWFyIHRvcFwiXG4gICAgICAgIGEuaHJlZiA9IFwiI2hvbWVcIlxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVEYWdib2VrKHBhcmVudCkge1xuICAgICAgICBjb25zdCBkYWdib2VrRGl2ID0gY3JlYXRlRXh0cmEocGFyZW50LCBcImRhZ2JvZWtcIilcbiAgICAgICAgZGFnYm9la0Rpdi5jbGFzc0xpc3QuYWRkKFwiZXB1Yi1kaXZcIilcblxuICAgICAgICBjb25zdCBoMSA9IGRhZ2JvZWtEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpKVxuICAgICAgICBoMS5jbGFzc0xpc3QuYWRkKFwiZXh0cmEtaXRlbXNcIilcbiAgICAgICAgaDEuaW5uZXJUZXh0ID0gXCJEYWdib2VrIHZhbiBXaWxsZW0gSG9ma2VyIG92ZXIgZGUgcmVzdGF1cmF0aWUgKDE5ODItMTk5MilcIlxuICAgICAgICBlcHViKGRhZ2JvZWtEaXYsICdkYWdib2VrJywgODAsIFwianBnXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFtZWxhbmRlcihwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgYW1lbGFuZGVyRGl2ID0gY3JlYXRlRXh0cmEocGFyZW50LCBcImFtZWxhbmRlclwiKVxuXG4gICAgICAgIGNvbnN0IGRpdiA9IGFtZWxhbmRlckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkZS1hbWVsYW5kZXJcIiwgXCJleHRyYS1pdGVtc1wiKVxuICAgICAgICBjb25zdCBhID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpKTtcbiAgICAgICAgYS5ocmVmID0gXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFJZTVHRTdDLVFKdC0xU3JXekNELUQ2RnNhdnRoWmlDWS92aWV3P3VzcD1zaGFyaW5nXCJcbiAgICAgICAgYS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICBhLmlubmVyVGV4dCA9IFwiS2xpayBoaWVyIHZvb3IgYXJ0aWtlbCBvdmVyIFZlcm1hbmluZ3NwYWQgZW4gSGV0IEZyZXVsZSBIdXVza2VcIlxuXG4gICAgICAgIGNvbnN0IGgxID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKSk7XG4gICAgICAgIGgxLmlubmVySFRNTCA9IGA8YiBzdHlsZT1cImZvbnQtc2l6ZToydndcIj5Cb29kc2NoYXAgdmFuIEphY29iIFJvZXAgZW4gQWZrZSBTY2hvbHMgdmFuIGRlICdBbWVsYW5kZXIgTXVzZWEnOiA8L2I+PGJyPjxpPndpaiB2aW5kZW4gaGV0XG4gICAgYmVsYW5ncmlqayBkYXQgZGl0IGhpc3RvcmlzY2hlIHBhZCBpbiBOZXMgYmVob3VkZW4gYmxpamZ0LiBBbWVsYW5kZXJcbiAgICBNdXNlYSBlcmtlbm5lbiBvb2sgaGV0IGhpc3RvcmlzY2hlIGJlbGFuZyB2YW4gaGV0IFZlcm1hbmluZ3NwYWQgZG9vclxuICAgIHRpamRlbnMgdmFrYW50aWVzIEZyZWUgVG91cnMgdGUgb3JnYW5pc2VyZW4uIChaaWUgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnZ2dmFtZWxhbmQubmwvemllbi1lbi1kb2VuL2V4Y3Vyc2llcy9mcmVlLXRvdXIjOn46dGV4dD1TdGljaHRpbmclMjBBbWVsYW5kZXIlMjBNdXNlYSUyMG9yZ2FuaXNlZXJ0JTIwZnJlZSUyMHRvdXJzJTIwaW4lMjBkZSxkZSUyMGxldWtzdGUlMjBpbnRyb2R1Y3RpZSUyMHRvdCUyMGRlJTIwY3VsdHV1cmhpc3RvcmllJTIwdmFuJTIwQW1lbGFuZFwiIHRhcmdldD1cIl9ibGFua1wiPkZyZWUgVG91cjwvYT4pIERlemUgdnJpamJsaWp2ZW5kZVxuICAgIHJvbmRsZWlkaW5nZW4gbGVpZGVuIHUgbGFuZ3MgZGUgYmlqem9uZGVyZSBnZXNjaGllZGVuaXMgdmFuIGhldFxuICAgIFZlcm1hbmluZ3NwYWQgZW4gZ2FhbiBvdmVyIGRlIGJlc3R1dXJsaWprZSBlbiByZWxpZ2lldXplIGdlc2NoaWVkZW5pc1xuICAgIHZhbiBBbWVsYW5kIGVuIGRlIHdhbHZpc3ZhYXJ0LjwvaT5gO1xuICAgICAgICBjb25zdCBkZUFtZWxhbmRlciA9IGFtZWxhbmRlckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSlcbiAgICAgICAgZGVBbWVsYW5kZXIuY2xhc3NMaXN0LmFkZChcImV4dHJhLWl0ZW1zXCIpO1xuXG4gICAgICAgIGRlQW1lbGFuZGVyLmlubmVyVGV4dCA9IFwiTWFhbmRibGFkICdkZSBBbWVsYW5kZXInLCAoYmlqbmEpIG92ZXJhbCBvcCBBbWVsYW5kIHRlIGtvb3BcIlxuICAgICAgICBkZUFtZWxhbmRlci5ocmVmID0gXCJodHRwczovL3d3dy5kZWFtZWxhbmRlci5ubC9cIlxuICAgICAgICBkZUFtZWxhbmRlci50YXJnZXQgPSBcIl9ibGFua1wiXG5cbiAgICAgICAgY29uc3QgeXQgPSBhbWVsYW5kZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikpXG4gICAgICAgIHl0LmNsYXNzTGlzdC5hZGQoXCJleHRyYS1pdGVtc1wiKVxuXG4gICAgICAgIHl0LmlubmVyVGV4dCA9IFwiRnJlZXRvdXIgbWV0IGJlem9layBGcmV1bGUgSHV1c2tlXCJcbiAgICAgICAgeXQuaHJlZiA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0wU2MtMWNMVFI3QSZhYl9jaGFubmVsPUFtZWxhbmRWYW5kYWFnXCJcbiAgICAgICAgeXQudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBkb2l0KHBhcmVudCwgZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZGF0YS5zZWN0aW9uc1tpXTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkRpdiA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICAgICAgc2VjdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKVxuICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICBzZWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLXNlY3Rpb25cIilcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoMSA9IHNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpKTtcbiAgICAgICAgaDEuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tdGl0bGVcIilcbiAgICAgICAgaWYgKGRlYnVnKSBoMS5pbm5lclRleHQgPSBcInRpdGxlXCJcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgaDEuaW5uZXJIVE1MID0gc2VjdGlvbi50aXRsZTtcbiAgICAgICAgaWYgKHNlY3Rpb24uc3VidGl0bGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgaDIgPSBzZWN0aW9uRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSk7XG4gICAgICAgICAgICBpZiAoZGVidWcpIGgyLmlubmVySFRNTCA9IFwic3VidGl0bGVcIjtcbiAgICAgICAgICAgIGVsc2UgaDIuaW5uZXJIVE1MID0gc2VjdGlvbi5zdWJ0aXRsZTtcbiAgICAgICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLXN1YnRpdGxlXCIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdGlvbi5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkID0gc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZChcImNhcmQtZ3JpZFwiKVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWN0aW9uLmNhcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZERhdGEgPSBzZWN0aW9uLmNhcmRzW2pdXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IGdyaWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImNhcmQtc2hhZG93XCIpO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkRGF0YS50aXRsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGNhcmQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnKSBjYXJkVGl0bGUuaW5uZXJUZXh0ID0gXCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY2FyZFRpdGxlLmlubmVySFRNTCA9IGNhcmREYXRhLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBpZiAoY2FyZERhdGEucGljdHVyZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJbWFnZSA9IGNhcmQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRJbWFnZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbWFnZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGNhcmRJbWFnZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFwiLi9kYXRhL3dlYnNpdGUvXCIgKyBjYXJkRGF0YS5waWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIGltZy5sb2FkaW5nID0gXCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmREYXRhLmhyZWYhPW51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9Y2FyZERhdGEuaHJlZlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY2FyZERhdGEuZGVzY3JpcHRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkRm9vdGVyID0gY2FyZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZEZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiY2FyZC1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGVidWcpIGNhcmRGb290ZXIuaW5uZXJUZXh0PVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBlbHNlIGNhcmRGb290ZXIuaW5uZXJIVE1MID0gY2FyZERhdGEuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtzKHBhcmVudCkge1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIilcbiAgICBidXR0b25Db250YWluZXIuaWQgPSBcImhvbWVcIlxuICAgIGNvbnN0IGRhZ2JvZWtCdXR0b24gPSBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikpO1xuICAgIGRhZ2JvZWtCdXR0b24uaHJlZiA9IFwiI2RhZ2JvZWtcIlxuICAgIGRhZ2JvZWtCdXR0b24uaW5uZXJUZXh0ID0gXCJOYWFyIGRhZ2JvZWsgV2lsbGVtIEhvZmtlciBvdmVyIHJlc3RhdXJhdGllXCI7XG4gICAgY29uc3QgYW1lbGFuZGVyQnV0dG9uID0gYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpKTtcbiAgICBhbWVsYW5kZXJCdXR0b24uaHJlZiA9IFwiI2FtZWxhbmRlclwiXG4gICAgYW1lbGFuZGVyQnV0dG9uLmlubmVyVGV4dCA9IFwiTmFhciBBbWVsYW5kZXIgTXVzZWEgb3ZlciBoZXQgRnJldWxlIEh1dXNrZVwiO1xuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikpO1xuICAgIGNvbnRhY3RCdXR0b24uaHJlZiA9IFwiI2NvbnRhY3RcIlxuICAgIGNvbnRhY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QocGFyZW50KXtcbiAgICBjb25zdCBmb290ZXI9IHBhcmVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpKVxuICAgIGZvb3Rlci5pZD1cImNvbnRhY3RcIjtcbiAgICBjb25zdCBzdHJvbmc9IGZvb3Rlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpKVxuICAgICBzdHJvbmcuaW5uZXJIVE1MPVwiU3RpY2h0aW5nIEhldCBGcmV1bGUgSHV1c2tlXCI7XG4gICAgIGNvbnN0IGRpdj0gZm9vdGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpXG4gICAgIGRpdi5pbm5lckhUTUw9XCJWZXJtYW5pbmdzcGFkIDYsIE5lcywgQW1lbGFuZDxicj5FbWFpbDogaGV0ZnJldWxlaHV1c2tlQGdtYWlsLmNvbSA8YnI+VGVsOiAwNi00MTg1MDk3N1wiXG4gIFxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=