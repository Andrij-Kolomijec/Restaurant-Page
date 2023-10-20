"use strict";
(self["webpackChunky"] = self["webpackChunky"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --text-sizes: calc((2vh + 1.5vw)/2);
}

body {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    animation: fadeIn 1.5s;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 98vh;
    gap: 15px;
}

header {
    font-size: 4rem;
    color: antiquewhite;
    padding: 2rem;
    text-align: center;
}

#navbar {
    display: flex;
    color: antiquewhite;
    font-size: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

#navbar > div {
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7);
    border-radius: 30px;
}

#navbar > div:hover {
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.05);
}

#navbar > div:active {
    transition: 0.2s;
    transform: scale(0.95);
}

.description {
    min-height: 60vh;
    width: 50vw;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: antiquewhite;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
    animation: fadeIn 1.5s;
}

.description > p {
    padding: 2rem 1rem;
    text-align: center;
    line-height: calc(1.8 * var(--text-sizes));
    font-size: var(--text-sizes);
}

.description > h1 {
    font-size: calc(1.4 * var(--text-sizes));
}

.description > h2 {
    font-size: var(--text-sizes);
}

.description > ul {
    list-style: none;
}

.description li {
    padding-top: 10px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: 1px dotted antiquewhite;
}

.description li::before {
    content: counter(list-item, decimal);
    counter-increment: list-item;
    margin-right: 10px;
  }

.description ol {
    width: 50%;
    margin-left: -40px;
}

.food {
    padding-top: 30px;
    border-bottom: 2px dotted antiquewhite;
    font-size: var(--text-sizes);
}

.description span {
    font-size: calc(var(--text-sizes) * 0.7);
}

footer {
    padding: 20px;
    align-self: center;
    flex-wrap: wrap;
}

@keyframes fadeIn {
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mCAAmC;AACvC;;AAEA;IACI,mDAAmC;IACnC,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,SAAS;IACT,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,oCAAoC;IACpC,0CAA0C;IAC1C,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;IACnB,0CAA0C;IAC1C,0BAA0B;IAC1B,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,0CAA0C;IAC1C,4BAA4B;AAChC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,oCAAoC;IACpC,sCAAsC;AAC1C;;AAEA;IACI,oCAAoC;IACpC,4BAA4B;IAC5B,kBAAkB;EACpB;;AAEF;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,sCAAsC;IACtC,4BAA4B;AAChC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI;MACE,UAAU;IACZ;;IAEA;MACE,UAAU;IACZ;EACF","sourcesContent":[":root {\n    --text-sizes: calc((2vh + 1.5vw)/2);\n}\n\nbody {\n    background: url('./restaurant.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n    animation: fadeIn 1.5s;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    min-height: 98vh;\n    gap: 15px;\n}\n\nheader {\n    font-size: 4rem;\n    color: antiquewhite;\n    padding: 2rem;\n    text-align: center;\n}\n\n#navbar {\n    display: flex;\n    color: antiquewhite;\n    font-size: 2rem;\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n#navbar > div {\n    padding: 0.5rem 1rem;\n    background-color: rgba(0, 0, 0, 0.7);\n    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7);\n    border-radius: 30px;\n}\n\n#navbar > div:hover {\n    cursor: pointer;\n    transition: 0.5s;\n    transform: scale(1.05);\n}\n\n#navbar > div:active {\n    transition: 0.2s;\n    transform: scale(0.95);\n}\n\n.description {\n    min-height: 60vh;\n    width: 50vw;\n    background-color: rgba(0, 0, 0, 0.7);\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    color: antiquewhite;\n    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7);\n    backdrop-filter: blur(2px);\n    animation: fadeIn 1.5s;\n}\n\n.description > p {\n    padding: 2rem 1rem;\n    text-align: center;\n    line-height: calc(1.8 * var(--text-sizes));\n    font-size: var(--text-sizes);\n}\n\n.description > h1 {\n    font-size: calc(1.4 * var(--text-sizes));\n}\n\n.description > h2 {\n    font-size: var(--text-sizes);\n}\n\n.description > ul {\n    list-style: none;\n}\n\n.description li {\n    padding-top: 10px;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    border-bottom: 1px dotted antiquewhite;\n}\n\n.description li::before {\n    content: counter(list-item, decimal);\n    counter-increment: list-item;\n    margin-right: 10px;\n  }\n\n.description ol {\n    width: 50%;\n    margin-left: -40px;\n}\n\n.food {\n    padding-top: 30px;\n    border-bottom: 2px dotted antiquewhite;\n    font-size: var(--text-sizes);\n}\n\n.description span {\n    font-size: calc(var(--text-sizes) * 0.7);\n}\n\nfooter {\n    padding: 20px;\n    align-self: center;\n    flex-wrap: wrap;\n}\n\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n  \n    100% {\n      opacity: 1;\n    }\n  }"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearDescription() {
    let description = document.querySelector('.description');
    while (description.firstChild) {
        description.removeChild(description.firstChild);
    }
}

function generateContact() {
    clearDescription();
    const description = document.querySelector('.description');
    const contacts = document.createElement('h1');
    const number = document.createElement('p');
    const address = document.createElement('p');

    contacts.innerText = 'Contacts';
    address.innerText = 'Planet Earth, 420 69'
    number.innerText = 'Phone: +69 486 52 486 42';

    description.append(contacts, address, number);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearDescription() {
    let description = document.querySelector('.description');
    while (description.firstChild) {
        description.removeChild(description.firstChild);
    }
}

function generateHome () {
    clearDescription();
    const description = document.querySelector('.description');
    const welcome = document.createElement('h1');
    const paragraph = document.createElement('p');
    const bonappetit = document.createElement('h2');
    const emBonappetit = document.createElement('em');

    welcome.innerText = 'Welcome!';
    paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    emBonappetit.innerText = 'Bon Appétit';

    bonappetit.appendChild(emBonappetit);
    description.append(welcome, paragraph, bonappetit);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.js */ "./src/contacts.js");
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");






const content = document.getElementById('content');

function generatePage() {
    const description = document.createElement('div');
    const header = document.createElement('header');
    const navbar = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    const footer = document.createElement('footer');
    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    
    navbar.setAttribute('id', 'navbar');
    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');
    description.setAttribute('class', 'description');

    header.innerText = 'Under the Pipes';
    home.innerText = 'Home';
    menu.innerText = 'Menu';
    contact.innerText = 'Contact';
    link1.innerText = 'Nick Karvounis';
    link1.href = 'https://unsplash.com/@nickkarvounis';
    link2.innerText = 'Unsplash';
    link2.href = 'https://unsplash.com/photos/rectangular-beige-wooden-tables-and-chair-Ciqxn7FE4vE';

    footer.append('Photo by ', link1, ' on ', link2);
    navbar.append(home, menu, contact);
    content.append(header, navbar, description, footer);
    
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    
    home.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    menu.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    contact.addEventListener('click', _contacts_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

// function generateHome () {
//     clearDescription();
//     const description = document.querySelector('.description');
//     const welcome = document.createElement('h1');
//     const paragraph = document.createElement('p');
//     const bonappetit = document.createElement('h2');
//     const emBonappetit = document.createElement('em');

//     welcome.innerText = 'Welcome!';
//     paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
//     emBonappetit.innerText = 'Bon Appétit';

//     bonappetit.appendChild(emBonappetit);
//     description.append(welcome, paragraph, bonappetit);
// }

// function generateMenu() {
//     clearDescription();
//     const menuData = {
//         Drinks: [
//             "Mojito",
//             "Old Fashioned",
//             "Piña Colada",
//             "Strawberry Daiquiri",
//             "Espresso Martini",
//             "Sangria",
//             "Virgin Mojito",
//             "Shirley Temple",
//             "Virgin Piña Colada",
//             "Fruit Punch",
//             "Coffee",
//             "Tea",
//             "Lemonade",
//             "Iced Tea",
//             "Soda",
//             "Water"
//         ],
//         Dishes: [
//             "Spicy Thai Basil Chicken",
//             "Creamy Garlic Parmesan Pasta",
//             "Mango Salsa Salmon",
//             "Vegetable Stir-Fry with Tofu",
//             "Hawaiian Pineapple Pizza",
//             "Beef and Broccoli Stir-Fry",
//             "Greek Salad with Feta and Olives",
//             "Butter Chicken Curry",
//             "Caprese Salad with Balsamic Glaze",
//             "Teriyaki Glazed Salmon",
//             "Lemon Herb Roasted Chicken",
//             "Shrimp Scampi with Linguine",
//             "Mexican Street Tacos",
//             "Spinach and Mushroom Quiche",
//             "BBQ Pulled Pork Sandwich",
//             "Baked Ziti with Italian Sausage",
//             "Eggplant Parmesan",
//             "Sesame Ginger Noodles",
//             "Cajun Jambalaya",
//             "Beef and Black Bean Stir-Fry"
//         ],
//         Desserts: [
//             "Chocolate Lava Cake",
//             "Strawberry Cheesecake",
//             "Apple Pie with Vanilla Ice Cream",
//             "Tiramisu",
//             "Triple Chocolate Brownies",
//             "Key Lime Pie",
//             "Peach Cobbler",
//             "Raspberry Sorbet",
//             "Caramel Flan",
//             "Banana Split Sundae",
//             "Red Velvet Cupcakes"
//         ],
//     };
//     const description = document.querySelector('.description');
//     for (let category in menuData) {
//         const categoryName = document.createElement('div');
//         const olElement = document.createElement('ol');
//         categoryName.classList.add('food', `${category.toLowerCase()}`);
//         categoryName.innerText = category;
//         description.append(categoryName);
//         menuData[category].forEach((dish) => {
//             const li = document.createElement('li');
//             const spanDish = document.createElement('span');
//             spanDish.innerText = dish;
//             const spanPrice = document.createElement('span');
//             spanPrice.innerText = `${getRandomPrice(category)}`;
//             li.appendChild(spanDish);
//             li.appendChild(spanPrice);
//             olElement.appendChild(li);
//         });
//         description.append(olElement);
//     }
// }

// function getRandomPrice(item) {
//     if (item === "Drinks") {
//         return Math.floor(Math.random() * (10 - 2 + 1) + 2);
//     } else if (item === "Dishes") {
//         return Math.floor(Math.random() * (60 - 35 + 1) + 35);
//     } else if (item === 'Desserts') {
//         return Math.floor(Math.random() * (30 - 15 + 1) + 15);
//     }
// }

// function generateContact() {
//     clearDescription();
//     const description = document.querySelector('.description');
//     const contacts = document.createElement('h1');
//     const number = document.createElement('p');
//     const address = document.createElement('p');

//     contacts.innerText = 'Contacts';
//     address.innerText = 'Planet Earth, 420 69'
//     number.innerText = 'Phone: +69 486 52 486 42';

//     description.append(contacts, address, number);
// }

function clearDescription() {
    let description = document.querySelector('.description');
    // content.removeChild(description);
    // description = document.createElement('div');
    // description.setAttribute('class', 'description');
    // const footer = document.querySelector('footer');
    // content.insertBefore(description, footer);
    while (description.firstChild) {
        description.removeChild(description.firstChild);
    }
}

generatePage();


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clearDescription() {
    let description = document.querySelector('.description');
    while (description.firstChild) {
        description.removeChild(description.firstChild);
    }
}

function getRandomPrice(item) {
    if (item === "Drinks") {
        return Math.floor(Math.random() * (10 - 2 + 1) + 2);
    } else if (item === "Dishes") {
        return Math.floor(Math.random() * (60 - 35 + 1) + 35);
    } else if (item === 'Desserts') {
        return Math.floor(Math.random() * (30 - 15 + 1) + 15);
    }
}

function generateMenu() {
    clearDescription();
    const menuData = {
        Drinks: [
            "Mojito",
            "Old Fashioned",
            "Piña Colada",
            "Strawberry Daiquiri",
            "Espresso Martini",
            "Sangria",
            "Virgin Mojito",
            "Shirley Temple",
            "Virgin Piña Colada",
            "Fruit Punch",
            "Coffee",
            "Tea",
            "Lemonade",
            "Iced Tea",
            "Soda",
            "Water"
        ],
        Dishes: [
            "Spicy Thai Basil Chicken",
            "Creamy Garlic Parmesan Pasta",
            "Mango Salsa Salmon",
            "Vegetable Stir-Fry with Tofu",
            "Hawaiian Pineapple Pizza",
            "Beef and Broccoli Stir-Fry",
            "Greek Salad with Feta and Olives",
            "Butter Chicken Curry",
            "Caprese Salad with Balsamic Glaze",
            "Teriyaki Glazed Salmon",
            "Lemon Herb Roasted Chicken",
            "Shrimp Scampi with Linguine",
            "Mexican Street Tacos",
            "Spinach and Mushroom Quiche",
            "BBQ Pulled Pork Sandwich",
            "Baked Ziti with Italian Sausage",
            "Eggplant Parmesan",
            "Sesame Ginger Noodles",
            "Cajun Jambalaya",
            "Beef and Black Bean Stir-Fry"
        ],
        Desserts: [
            "Chocolate Lava Cake",
            "Strawberry Cheesecake",
            "Apple Pie with Vanilla Ice Cream",
            "Tiramisu",
            "Triple Chocolate Brownies",
            "Key Lime Pie",
            "Peach Cobbler",
            "Raspberry Sorbet",
            "Caramel Flan",
            "Banana Split Sundae",
            "Red Velvet Cupcakes"
        ],
    };
    const description = document.querySelector('.description');
    for (let category in menuData) {
        const categoryName = document.createElement('div');
        const olElement = document.createElement('ol');
        categoryName.classList.add('food', `${category.toLowerCase()}`);
        categoryName.innerText = category;
        description.append(categoryName);
        menuData[category].forEach((dish) => {
            const li = document.createElement('li');
            const spanDish = document.createElement('span');
            spanDish.innerText = dish;
            const spanPrice = document.createElement('span');
            spanPrice.innerText = `${getRandomPrice(category)}`;
            li.appendChild(spanDish);
            li.appendChild(spanPrice);
            olElement.appendChild(li);
        });
        description.append(olElement);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "300366ea3036a61ebee2.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2R0FBbUM7QUFDL0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxnQ0FBZ0MsMENBQTBDLEdBQUcsVUFBVSwwQ0FBMEMsNkJBQTZCLG1DQUFtQyxtQ0FBbUMsa0NBQWtDLDZCQUE2QixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIscUNBQXFDLHVCQUF1QixnQkFBZ0IsR0FBRyxZQUFZLHNCQUFzQiwwQkFBMEIsb0JBQW9CLHlCQUF5QixHQUFHLGFBQWEsb0JBQW9CLDBCQUEwQixzQkFBc0Isb0JBQW9CLGdCQUFnQixzQkFBc0IsOEJBQThCLEdBQUcsbUJBQW1CLDJCQUEyQiwyQ0FBMkMsaURBQWlELDBCQUEwQixHQUFHLHlCQUF5QixzQkFBc0IsdUJBQXVCLDZCQUE2QixHQUFHLDBCQUEwQix1QkFBdUIsNkJBQTZCLEdBQUcsa0JBQWtCLHVCQUF1QixrQkFBa0IsMkNBQTJDLDBCQUEwQixvQkFBb0IsNkJBQTZCLG9DQUFvQywwQkFBMEIsMEJBQTBCLGlEQUFpRCxpQ0FBaUMsNkJBQTZCLEdBQUcsc0JBQXNCLHlCQUF5Qix5QkFBeUIsaURBQWlELG1DQUFtQyxHQUFHLHVCQUF1QiwrQ0FBK0MsR0FBRyx1QkFBdUIsbUNBQW1DLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLHFCQUFxQix3QkFBd0Isb0JBQW9CLDJDQUEyQyw2Q0FBNkMsR0FBRyw2QkFBNkIsMkNBQTJDLG1DQUFtQyx5QkFBeUIsS0FBSyxxQkFBcUIsaUJBQWlCLHlCQUF5QixHQUFHLFdBQVcsd0JBQXdCLDZDQUE2QyxtQ0FBbUMsR0FBRyx1QkFBdUIsK0NBQStDLEdBQUcsWUFBWSxvQkFBb0IseUJBQXlCLHNCQUFzQixHQUFHLHVCQUF1QixVQUFVLG1CQUFtQixPQUFPLGdCQUFnQixtQkFBbUIsT0FBTyxLQUFLLG1CQUFtQjtBQUNucUg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMvSTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQ3JCOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTjtBQUNnQjtBQUNBO0FBQ087QUFDRjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVk7QUFDaEI7QUFDQSxtQ0FBbUMsZ0RBQVk7QUFDL0MsbUNBQW1DLGdEQUFZO0FBQy9DLHNDQUFzQyxvREFBZTtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHVCQUF1QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx5QkFBeUI7QUFDakU7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUJBQXVCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHlCQUF5QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3kvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3kvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3Jlc3RhdXJhbnQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10ZXh0LXNpemVzOiBjYWxjKCgydmggKyAxLjV2dykvMik7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMS41cztcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4taGVpZ2h0OiA5OHZoO1xuICAgIGdhcDogMTVweDtcbn1cblxuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI25hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNuYXZiYXIgPiBkaXYge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuI25hdmJhciA+IGRpdjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuI25hdmJhciA+IGRpdjphY3RpdmUge1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDEuNXM7XG59XG5cbi5kZXNjcmlwdGlvbiA+IHAge1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoMS44ICogdmFyKC0tdGV4dC1zaXplcykpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zaXplcyk7XG59XG5cbi5kZXNjcmlwdGlvbiA+IGgxIHtcbiAgICBmb250LXNpemU6IGNhbGMoMS40ICogdmFyKC0tdGV4dC1zaXplcykpO1xufVxuXG4uZGVzY3JpcHRpb24gPiBoMiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNpemVzKTtcbn1cblxuLmRlc2NyaXB0aW9uID4gdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5kZXNjcmlwdGlvbiBsaSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBhbnRpcXVld2hpdGU7XG59XG5cbi5kZXNjcmlwdGlvbiBsaTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBjb3VudGVyKGxpc3QtaXRlbSwgZGVjaW1hbCk7XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtaXRlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuLmRlc2NyaXB0aW9uIG9sIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuLmZvb2Qge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgYW50aXF1ZXdoaXRlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zaXplcyk7XG59XG5cbi5kZXNjcmlwdGlvbiBzcGFuIHtcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tdGV4dC1zaXplcykgKiAwLjcpO1xufVxuXG5mb290ZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbURBQW1DO0lBQ25DLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsMENBQTBDO0lBQzFDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQywwQkFBMEI7SUFDMUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0Qyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtNQUNFLFVBQVU7SUFDWjs7SUFFQTtNQUNFLFVBQVU7SUFDWjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS10ZXh0LXNpemVzOiBjYWxjKCgydmggKyAxLjV2dykvMik7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vcmVzdGF1cmFudC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWluLWhlaWdodDogOTh2aDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI25hdmJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbmF2YmFyID4gZGl2IHtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4jbmF2YmFyID4gZGl2OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4jbmF2YmFyID4gZGl2OmFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxLjVzO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiBwIHtcXG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDEuOCAqIHZhcigtLXRleHQtc2l6ZXMpKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNpemVzKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uID4gaDEge1xcbiAgICBmb250LXNpemU6IGNhbGMoMS40ICogdmFyKC0tdGV4dC1zaXplcykpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zaXplcyk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIGxpIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBhbnRpcXVld2hpdGU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiBsaTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogY291bnRlcihsaXN0LWl0ZW0sIGRlY2ltYWwpO1xcbiAgICBjb3VudGVyLWluY3JlbWVudDogbGlzdC1pdGVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuLmRlc2NyaXB0aW9uIG9sIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcbn1cXG5cXG4uZm9vZCB7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIGFudGlxdWV3aGl0ZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNpemVzKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tdGV4dC1zaXplcykgKiAwLjcpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgXFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNsZWFyRGVzY3JpcHRpb24oKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgd2hpbGUgKGRlc2NyaXB0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGVzY3JpcHRpb24ucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24uZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRhY3QoKSB7XG4gICAgY2xlYXJEZXNjcmlwdGlvbigpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgY29udGFjdHMuaW5uZXJUZXh0ID0gJ0NvbnRhY3RzJztcbiAgICBhZGRyZXNzLmlubmVyVGV4dCA9ICdQbGFuZXQgRWFydGgsIDQyMCA2OSdcbiAgICBudW1iZXIuaW5uZXJUZXh0ID0gJ1Bob25lOiArNjkgNDg2IDUyIDQ4NiA0Mic7XG5cbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQoY29udGFjdHMsIGFkZHJlc3MsIG51bWJlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdDsiLCJmdW5jdGlvbiBjbGVhckRlc2NyaXB0aW9uKCkge1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgIHdoaWxlIChkZXNjcmlwdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIb21lICgpIHtcbiAgICBjbGVhckRlc2NyaXB0aW9uKCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYm9uYXBwZXRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZW1Cb25hcHBldGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcblxuICAgIHdlbGNvbWUuaW5uZXJUZXh0ID0gJ1dlbGNvbWUhJztcbiAgICBwYXJhZ3JhcGguaW5uZXJUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS4nO1xuICAgIGVtQm9uYXBwZXRpdC5pbm5lclRleHQgPSAnQm9uIEFwcMOpdGl0JztcblxuICAgIGJvbmFwcGV0aXQuYXBwZW5kQ2hpbGQoZW1Cb25hcHBldGl0KTtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmQod2VsY29tZSwgcGFyYWdyYXBoLCBib25hcHBldGl0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdlbmVyYXRlSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGdlbmVyYXRlTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGdlbmVyYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3RzLmpzJztcbmltcG9ydCBSZXN0YXVyYW50IGZyb20gJy4vcmVzdGF1cmFudC5qcGcnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQYWdlKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgbGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgbGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgXG4gICAgbmF2YmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2YmFyJyk7XG4gICAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbicpO1xuXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdVbmRlciB0aGUgUGlwZXMnO1xuICAgIGhvbWUuaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICAgIG1lbnUuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgIGNvbnRhY3QuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnO1xuICAgIGxpbmsxLmlubmVyVGV4dCA9ICdOaWNrIEthcnZvdW5pcyc7XG4gICAgbGluazEuaHJlZiA9ICdodHRwczovL3Vuc3BsYXNoLmNvbS9Abmlja2thcnZvdW5pcyc7XG4gICAgbGluazIuaW5uZXJUZXh0ID0gJ1Vuc3BsYXNoJztcbiAgICBsaW5rMi5ocmVmID0gJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9yZWN0YW5ndWxhci1iZWlnZS13b29kZW4tdGFibGVzLWFuZC1jaGFpci1DaXF4bjdGRTR2RSc7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdQaG90byBieSAnLCBsaW5rMSwgJyBvbiAnLCBsaW5rMik7XG4gICAgbmF2YmFyLmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIsIG5hdmJhciwgZGVzY3JpcHRpb24sIGZvb3Rlcik7XG4gICAgXG4gICAgZ2VuZXJhdGVIb21lKCk7XG4gICAgXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlSG9tZSk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlTWVudSk7XG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlQ29udGFjdCk7XG59XG5cbi8vIGZ1bmN0aW9uIGdlbmVyYXRlSG9tZSAoKSB7XG4vLyAgICAgY2xlYXJEZXNjcmlwdGlvbigpO1xuLy8gICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4vLyAgICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4vLyAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuLy8gICAgIGNvbnN0IGJvbmFwcGV0aXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuLy8gICAgIGNvbnN0IGVtQm9uYXBwZXRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG5cbi8vICAgICB3ZWxjb21lLmlubmVyVGV4dCA9ICdXZWxjb21lISc7XG4vLyAgICAgcGFyYWdyYXBoLmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJztcbi8vICAgICBlbUJvbmFwcGV0aXQuaW5uZXJUZXh0ID0gJ0JvbiBBcHDDqXRpdCc7XG5cbi8vICAgICBib25hcHBldGl0LmFwcGVuZENoaWxkKGVtQm9uYXBwZXRpdCk7XG4vLyAgICAgZGVzY3JpcHRpb24uYXBwZW5kKHdlbGNvbWUsIHBhcmFncmFwaCwgYm9uYXBwZXRpdCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdlbmVyYXRlTWVudSgpIHtcbi8vICAgICBjbGVhckRlc2NyaXB0aW9uKCk7XG4vLyAgICAgY29uc3QgbWVudURhdGEgPSB7XG4vLyAgICAgICAgIERyaW5rczogW1xuLy8gICAgICAgICAgICAgXCJNb2ppdG9cIixcbi8vICAgICAgICAgICAgIFwiT2xkIEZhc2hpb25lZFwiLFxuLy8gICAgICAgICAgICAgXCJQacOxYSBDb2xhZGFcIixcbi8vICAgICAgICAgICAgIFwiU3RyYXdiZXJyeSBEYWlxdWlyaVwiLFxuLy8gICAgICAgICAgICAgXCJFc3ByZXNzbyBNYXJ0aW5pXCIsXG4vLyAgICAgICAgICAgICBcIlNhbmdyaWFcIixcbi8vICAgICAgICAgICAgIFwiVmlyZ2luIE1vaml0b1wiLFxuLy8gICAgICAgICAgICAgXCJTaGlybGV5IFRlbXBsZVwiLFxuLy8gICAgICAgICAgICAgXCJWaXJnaW4gUGnDsWEgQ29sYWRhXCIsXG4vLyAgICAgICAgICAgICBcIkZydWl0IFB1bmNoXCIsXG4vLyAgICAgICAgICAgICBcIkNvZmZlZVwiLFxuLy8gICAgICAgICAgICAgXCJUZWFcIixcbi8vICAgICAgICAgICAgIFwiTGVtb25hZGVcIixcbi8vICAgICAgICAgICAgIFwiSWNlZCBUZWFcIixcbi8vICAgICAgICAgICAgIFwiU29kYVwiLFxuLy8gICAgICAgICAgICAgXCJXYXRlclwiXG4vLyAgICAgICAgIF0sXG4vLyAgICAgICAgIERpc2hlczogW1xuLy8gICAgICAgICAgICAgXCJTcGljeSBUaGFpIEJhc2lsIENoaWNrZW5cIixcbi8vICAgICAgICAgICAgIFwiQ3JlYW15IEdhcmxpYyBQYXJtZXNhbiBQYXN0YVwiLFxuLy8gICAgICAgICAgICAgXCJNYW5nbyBTYWxzYSBTYWxtb25cIixcbi8vICAgICAgICAgICAgIFwiVmVnZXRhYmxlIFN0aXItRnJ5IHdpdGggVG9mdVwiLFxuLy8gICAgICAgICAgICAgXCJIYXdhaWlhbiBQaW5lYXBwbGUgUGl6emFcIixcbi8vICAgICAgICAgICAgIFwiQmVlZiBhbmQgQnJvY2NvbGkgU3Rpci1GcnlcIixcbi8vICAgICAgICAgICAgIFwiR3JlZWsgU2FsYWQgd2l0aCBGZXRhIGFuZCBPbGl2ZXNcIixcbi8vICAgICAgICAgICAgIFwiQnV0dGVyIENoaWNrZW4gQ3VycnlcIixcbi8vICAgICAgICAgICAgIFwiQ2FwcmVzZSBTYWxhZCB3aXRoIEJhbHNhbWljIEdsYXplXCIsXG4vLyAgICAgICAgICAgICBcIlRlcml5YWtpIEdsYXplZCBTYWxtb25cIixcbi8vICAgICAgICAgICAgIFwiTGVtb24gSGVyYiBSb2FzdGVkIENoaWNrZW5cIixcbi8vICAgICAgICAgICAgIFwiU2hyaW1wIFNjYW1waSB3aXRoIExpbmd1aW5lXCIsXG4vLyAgICAgICAgICAgICBcIk1leGljYW4gU3RyZWV0IFRhY29zXCIsXG4vLyAgICAgICAgICAgICBcIlNwaW5hY2ggYW5kIE11c2hyb29tIFF1aWNoZVwiLFxuLy8gICAgICAgICAgICAgXCJCQlEgUHVsbGVkIFBvcmsgU2FuZHdpY2hcIixcbi8vICAgICAgICAgICAgIFwiQmFrZWQgWml0aSB3aXRoIEl0YWxpYW4gU2F1c2FnZVwiLFxuLy8gICAgICAgICAgICAgXCJFZ2dwbGFudCBQYXJtZXNhblwiLFxuLy8gICAgICAgICAgICAgXCJTZXNhbWUgR2luZ2VyIE5vb2RsZXNcIixcbi8vICAgICAgICAgICAgIFwiQ2FqdW4gSmFtYmFsYXlhXCIsXG4vLyAgICAgICAgICAgICBcIkJlZWYgYW5kIEJsYWNrIEJlYW4gU3Rpci1GcnlcIlxuLy8gICAgICAgICBdLFxuLy8gICAgICAgICBEZXNzZXJ0czogW1xuLy8gICAgICAgICAgICAgXCJDaG9jb2xhdGUgTGF2YSBDYWtlXCIsXG4vLyAgICAgICAgICAgICBcIlN0cmF3YmVycnkgQ2hlZXNlY2FrZVwiLFxuLy8gICAgICAgICAgICAgXCJBcHBsZSBQaWUgd2l0aCBWYW5pbGxhIEljZSBDcmVhbVwiLFxuLy8gICAgICAgICAgICAgXCJUaXJhbWlzdVwiLFxuLy8gICAgICAgICAgICAgXCJUcmlwbGUgQ2hvY29sYXRlIEJyb3duaWVzXCIsXG4vLyAgICAgICAgICAgICBcIktleSBMaW1lIFBpZVwiLFxuLy8gICAgICAgICAgICAgXCJQZWFjaCBDb2JibGVyXCIsXG4vLyAgICAgICAgICAgICBcIlJhc3BiZXJyeSBTb3JiZXRcIixcbi8vICAgICAgICAgICAgIFwiQ2FyYW1lbCBGbGFuXCIsXG4vLyAgICAgICAgICAgICBcIkJhbmFuYSBTcGxpdCBTdW5kYWVcIixcbi8vICAgICAgICAgICAgIFwiUmVkIFZlbHZldCBDdXBjYWtlc1wiXG4vLyAgICAgICAgIF0sXG4vLyAgICAgfTtcbi8vICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuLy8gICAgIGZvciAobGV0IGNhdGVnb3J5IGluIG1lbnVEYXRhKSB7XG4vLyAgICAgICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgICAgICBjb25zdCBvbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xuLy8gICAgICAgICBjYXRlZ29yeU5hbWUuY2xhc3NMaXN0LmFkZCgnZm9vZCcsIGAke2NhdGVnb3J5LnRvTG93ZXJDYXNlKCl9YCk7XG4vLyAgICAgICAgIGNhdGVnb3J5TmFtZS5pbm5lclRleHQgPSBjYXRlZ29yeTtcbi8vICAgICAgICAgZGVzY3JpcHRpb24uYXBwZW5kKGNhdGVnb3J5TmFtZSk7XG4vLyAgICAgICAgIG1lbnVEYXRhW2NhdGVnb3J5XS5mb3JFYWNoKChkaXNoKSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4vLyAgICAgICAgICAgICBjb25zdCBzcGFuRGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbi8vICAgICAgICAgICAgIHNwYW5EaXNoLmlubmVyVGV4dCA9IGRpc2g7XG4vLyAgICAgICAgICAgICBjb25zdCBzcGFuUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4vLyAgICAgICAgICAgICBzcGFuUHJpY2UuaW5uZXJUZXh0ID0gYCR7Z2V0UmFuZG9tUHJpY2UoY2F0ZWdvcnkpfWA7XG4vLyAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuRGlzaCk7XG4vLyAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuUHJpY2UpO1xuLy8gICAgICAgICAgICAgb2xFbGVtZW50LmFwcGVuZENoaWxkKGxpKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIGRlc2NyaXB0aW9uLmFwcGVuZChvbEVsZW1lbnQpO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0UmFuZG9tUHJpY2UoaXRlbSkge1xuLy8gICAgIGlmIChpdGVtID09PSBcIkRyaW5rc1wiKSB7XG4vLyAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAyICsgMSkgKyAyKTtcbi8vICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09IFwiRGlzaGVzXCIpIHtcbi8vICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg2MCAtIDM1ICsgMSkgKyAzNSk7XG4vLyAgICAgfSBlbHNlIGlmIChpdGVtID09PSAnRGVzc2VydHMnKSB7XG4vLyAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAgLSAxNSArIDEpICsgMTUpO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0KCkge1xuLy8gICAgIGNsZWFyRGVzY3JpcHRpb24oKTtcbi8vICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuLy8gICAgIGNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbi8vICAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4vLyAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuLy8gICAgIGNvbnRhY3RzLmlubmVyVGV4dCA9ICdDb250YWN0cyc7XG4vLyAgICAgYWRkcmVzcy5pbm5lclRleHQgPSAnUGxhbmV0IEVhcnRoLCA0MjAgNjknXG4vLyAgICAgbnVtYmVyLmlubmVyVGV4dCA9ICdQaG9uZTogKzY5IDQ4NiA1MiA0ODYgNDInO1xuXG4vLyAgICAgZGVzY3JpcHRpb24uYXBwZW5kKGNvbnRhY3RzLCBhZGRyZXNzLCBudW1iZXIpO1xuLy8gfVxuXG5mdW5jdGlvbiBjbGVhckRlc2NyaXB0aW9uKCkge1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgIC8vIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIC8vIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbicpO1xuICAgIC8vIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICAgIC8vIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGRlc2NyaXB0aW9uLCBmb290ZXIpO1xuICAgIHdoaWxlIChkZXNjcmlwdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZ2VuZXJhdGVQYWdlKCk7XG4iLCJmdW5jdGlvbiBjbGVhckRlc2NyaXB0aW9uKCkge1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgIHdoaWxlIChkZXNjcmlwdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tUHJpY2UoaXRlbSkge1xuICAgIGlmIChpdGVtID09PSBcIkRyaW5rc1wiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAyICsgMSkgKyAyKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0gPT09IFwiRGlzaGVzXCIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg2MCAtIDM1ICsgMSkgKyAzNSk7XG4gICAgfSBlbHNlIGlmIChpdGVtID09PSAnRGVzc2VydHMnKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAgLSAxNSArIDEpICsgMTUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNZW51KCkge1xuICAgIGNsZWFyRGVzY3JpcHRpb24oKTtcbiAgICBjb25zdCBtZW51RGF0YSA9IHtcbiAgICAgICAgRHJpbmtzOiBbXG4gICAgICAgICAgICBcIk1vaml0b1wiLFxuICAgICAgICAgICAgXCJPbGQgRmFzaGlvbmVkXCIsXG4gICAgICAgICAgICBcIlBpw7FhIENvbGFkYVwiLFxuICAgICAgICAgICAgXCJTdHJhd2JlcnJ5IERhaXF1aXJpXCIsXG4gICAgICAgICAgICBcIkVzcHJlc3NvIE1hcnRpbmlcIixcbiAgICAgICAgICAgIFwiU2FuZ3JpYVwiLFxuICAgICAgICAgICAgXCJWaXJnaW4gTW9qaXRvXCIsXG4gICAgICAgICAgICBcIlNoaXJsZXkgVGVtcGxlXCIsXG4gICAgICAgICAgICBcIlZpcmdpbiBQacOxYSBDb2xhZGFcIixcbiAgICAgICAgICAgIFwiRnJ1aXQgUHVuY2hcIixcbiAgICAgICAgICAgIFwiQ29mZmVlXCIsXG4gICAgICAgICAgICBcIlRlYVwiLFxuICAgICAgICAgICAgXCJMZW1vbmFkZVwiLFxuICAgICAgICAgICAgXCJJY2VkIFRlYVwiLFxuICAgICAgICAgICAgXCJTb2RhXCIsXG4gICAgICAgICAgICBcIldhdGVyXCJcbiAgICAgICAgXSxcbiAgICAgICAgRGlzaGVzOiBbXG4gICAgICAgICAgICBcIlNwaWN5IFRoYWkgQmFzaWwgQ2hpY2tlblwiLFxuICAgICAgICAgICAgXCJDcmVhbXkgR2FybGljIFBhcm1lc2FuIFBhc3RhXCIsXG4gICAgICAgICAgICBcIk1hbmdvIFNhbHNhIFNhbG1vblwiLFxuICAgICAgICAgICAgXCJWZWdldGFibGUgU3Rpci1Gcnkgd2l0aCBUb2Z1XCIsXG4gICAgICAgICAgICBcIkhhd2FpaWFuIFBpbmVhcHBsZSBQaXp6YVwiLFxuICAgICAgICAgICAgXCJCZWVmIGFuZCBCcm9jY29saSBTdGlyLUZyeVwiLFxuICAgICAgICAgICAgXCJHcmVlayBTYWxhZCB3aXRoIEZldGEgYW5kIE9saXZlc1wiLFxuICAgICAgICAgICAgXCJCdXR0ZXIgQ2hpY2tlbiBDdXJyeVwiLFxuICAgICAgICAgICAgXCJDYXByZXNlIFNhbGFkIHdpdGggQmFsc2FtaWMgR2xhemVcIixcbiAgICAgICAgICAgIFwiVGVyaXlha2kgR2xhemVkIFNhbG1vblwiLFxuICAgICAgICAgICAgXCJMZW1vbiBIZXJiIFJvYXN0ZWQgQ2hpY2tlblwiLFxuICAgICAgICAgICAgXCJTaHJpbXAgU2NhbXBpIHdpdGggTGluZ3VpbmVcIixcbiAgICAgICAgICAgIFwiTWV4aWNhbiBTdHJlZXQgVGFjb3NcIixcbiAgICAgICAgICAgIFwiU3BpbmFjaCBhbmQgTXVzaHJvb20gUXVpY2hlXCIsXG4gICAgICAgICAgICBcIkJCUSBQdWxsZWQgUG9yayBTYW5kd2ljaFwiLFxuICAgICAgICAgICAgXCJCYWtlZCBaaXRpIHdpdGggSXRhbGlhbiBTYXVzYWdlXCIsXG4gICAgICAgICAgICBcIkVnZ3BsYW50IFBhcm1lc2FuXCIsXG4gICAgICAgICAgICBcIlNlc2FtZSBHaW5nZXIgTm9vZGxlc1wiLFxuICAgICAgICAgICAgXCJDYWp1biBKYW1iYWxheWFcIixcbiAgICAgICAgICAgIFwiQmVlZiBhbmQgQmxhY2sgQmVhbiBTdGlyLUZyeVwiXG4gICAgICAgIF0sXG4gICAgICAgIERlc3NlcnRzOiBbXG4gICAgICAgICAgICBcIkNob2NvbGF0ZSBMYXZhIENha2VcIixcbiAgICAgICAgICAgIFwiU3RyYXdiZXJyeSBDaGVlc2VjYWtlXCIsXG4gICAgICAgICAgICBcIkFwcGxlIFBpZSB3aXRoIFZhbmlsbGEgSWNlIENyZWFtXCIsXG4gICAgICAgICAgICBcIlRpcmFtaXN1XCIsXG4gICAgICAgICAgICBcIlRyaXBsZSBDaG9jb2xhdGUgQnJvd25pZXNcIixcbiAgICAgICAgICAgIFwiS2V5IExpbWUgUGllXCIsXG4gICAgICAgICAgICBcIlBlYWNoIENvYmJsZXJcIixcbiAgICAgICAgICAgIFwiUmFzcGJlcnJ5IFNvcmJldFwiLFxuICAgICAgICAgICAgXCJDYXJhbWVsIEZsYW5cIixcbiAgICAgICAgICAgIFwiQmFuYW5hIFNwbGl0IFN1bmRhZVwiLFxuICAgICAgICAgICAgXCJSZWQgVmVsdmV0IEN1cGNha2VzXCJcbiAgICAgICAgXSxcbiAgICB9O1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XG4gICAgZm9yIChsZXQgY2F0ZWdvcnkgaW4gbWVudURhdGEpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG9sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgICAgIGNhdGVnb3J5TmFtZS5jbGFzc0xpc3QuYWRkKCdmb29kJywgYCR7Y2F0ZWdvcnkudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgICAgY2F0ZWdvcnlOYW1lLmlubmVyVGV4dCA9IGNhdGVnb3J5O1xuICAgICAgICBkZXNjcmlwdGlvbi5hcHBlbmQoY2F0ZWdvcnlOYW1lKTtcbiAgICAgICAgbWVudURhdGFbY2F0ZWdvcnldLmZvckVhY2goKGRpc2gpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW5EaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3BhbkRpc2guaW5uZXJUZXh0ID0gZGlzaDtcbiAgICAgICAgICAgIGNvbnN0IHNwYW5QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW5QcmljZS5pbm5lclRleHQgPSBgJHtnZXRSYW5kb21QcmljZShjYXRlZ29yeSl9YDtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW5EaXNoKTtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW5QcmljZSk7XG4gICAgICAgICAgICBvbEVsZW1lbnQuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVzY3JpcHRpb24uYXBwZW5kKG9sRWxlbWVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZU1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9