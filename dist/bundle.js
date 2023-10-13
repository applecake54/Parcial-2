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

/***/ "./src/components/Card/card.ts":
/*!*************************************!*\
  !*** ./src/components/Card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attribute;\n(function (Attribute) {\n    Attribute[\"one\"] = \"one\";\n    Attribute[\"two\"] = \"two\";\n})(Attribute || (Attribute = {}));\nclass Card extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            one: null,\n            two: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            <div>\r\n            <p>${this.one}</p>\r\n            <img src=\"${this.two}\" alt=\"\" srcset=\"\">\r\n            </div>\r\n            `;\n        }\n    }\n}\ncustomElements.define(\"my-card\", Card);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Card/card.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Card/card */ \"./src/components/Card/card.ts\");\n/* harmony import */ var _services_dataFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/dataFetch */ \"./src/services/dataFetch.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        var _a, _b;\n        super();\n        this.attachShadow({ mode: \"open\" });\n        this.cardElement = this.ownerDocument.createElement(\"my-card\");\n        const button = this.ownerDocument.createElement(\"button\");\n        button.textContent = \"Get New Cat Fact and Image\";\n        button.addEventListener(\"click\", this.updateCatFactAndImage.bind(this));\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.cardElement);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(button);\n    }\n    connectedCallback() {\n        this.updateCatFactAndImage();\n    }\n    updateCatFactAndImage() {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const catFact = yield (0,_services_dataFetch__WEBPACK_IMPORTED_MODULE_1__.getCatFact)();\n                const catImgData = yield (0,_services_dataFetch__WEBPACK_IMPORTED_MODULE_1__.getCatImg)();\n                this.cardElement.setAttribute(_components_Card_card__WEBPACK_IMPORTED_MODULE_0__.Attribute.one, catFact.fact);\n                this.cardElement.setAttribute(_components_Card_card__WEBPACK_IMPORTED_MODULE_0__.Attribute.two, catImgData.url);\n                this.cardElement.render();\n            }\n            catch (error) {\n                console.log(error);\n            }\n        });\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n            <my-card one=\"${this.cardElement.getAttribute(_components_Card_card__WEBPACK_IMPORTED_MODULE_0__.Attribute.one)}\" two=\"${this.cardElement.getAttribute(_components_Card_card__WEBPACK_IMPORTED_MODULE_0__.Attribute.two)}\"></my-card>\n        `;\n        }\n    }\n}\ncustomElements.define(\"app-container\", AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/services/dataFetch.ts":
/*!***********************************!*\
  !*** ./src/services/dataFetch.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCatFact\": () => (/* binding */ getCatFact),\n/* harmony export */   \"getCatImg\": () => (/* binding */ getCatImg)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst getCatFact = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const catFact = fetch(`https://catfact.ninja/fact`).then(res => res.json());\n        return catFact;\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\nconst getCatImg = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const catimg = fetch(\"https://cataas.com/#/\").then(res => res.json());\n        return catimg;\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/dataFetch.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;