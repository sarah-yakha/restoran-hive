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

/***/ "./about.js":
/*!******************!*\
  !*** ./about.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAbout: () => (/* binding */ getAbout)\n/* harmony export */ });\nfunction getAbout (){\r\nconst aboutSection = document.createElement('div');\r\naboutSection.classList.add('about-section');\r\nconst aboutTitle = document.createElement('h3');\r\naboutTitle.classList.add('aboutTitle')\r\nconst aboutText = document.createElement('p');\r\naboutText.classList.add('aboutText')\r\naboutTitle.textContent ='O нас';\r\nconst longText = `Оставим описание для лучших времен! И насладимся строками из стихотворения С-Х.Нунаева.\\n                  \r\n\\nВо тьме глухих тысячелетий,\r\nПод пылью сказочных времен,\r\nУкрыты судьбы поколений\r\nДавно исчезнувших племен.\r\n\r\nТам, на Востоке наши корни —\r\nСреди хурритов и шумер,\r\nСреди урартов и дзурздуков,\r\nСреди лулуйцев и гергер.\r\n\r\nВосток — таинственный целитель —\r\nОбитель мифов и богов.\r\nЗемля легенд, земля истоков.\r\nДля душ заблудших вечный кров.\r\nЗдесь средь высоких зикурратов,\r\nРоскошных храмов и дворцов\r\nГонимых варваром вайнахов\r\nЖивет могучий дух отцов.\r\n\r\nМы — нахи! Мы народ бессмертья!\r\nТак-как бессмертен тот Восток\r\nИсток божественного духа —\r\nНам вечно силы он дает.\r\n\r\nБудь горд, мой брат, пускай бесится\r\nВ смертельной злобе сатана.\r\nБессильный, опошленный Запад\r\nЗамыслил испытать тебя.\r\n`\r\naboutText.textContent = longText;\r\n\r\naboutSection.append(aboutTitle, aboutText);\r\nreturn aboutSection;\r\n}\n\n//# sourceURL=webpack://restoran-hive/./about.js?");

/***/ }),

/***/ "./contact.js":
/*!********************!*\
  !*** ./contact.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getContact: () => (/* binding */ getContact)\n/* harmony export */ });\n/* harmony import */ var _img_boootcamp_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/boootcamp.jpg */ \"./img/boootcamp.jpg\");\n\r\n\r\n\r\nfunction getContact(){\r\n    const contact = document.createElement('div');\r\n    const contactsItem = document.createElement('div');\r\n    contactsItem.classList.add('contactsItem')\r\n    contact.classList.add('contact');\r\n    const contText = document.createElement('h3');\r\n    contText.classList.add('contText')\r\n    contText.textContent = 'приходите к нам!';\r\n    const link = document.createElement('a');\r\n    link.classList.add('link')\r\n    link.textContent = '__';\r\n    link.target = '_blank';\r\n   link.href ='https://hivebootcamp.ru/';\r\n   contactsItem.append(link)\r\n   \r\n   contact.append(contText, contactsItem);\r\n\r\n   \r\n   \r\n    return contact;\r\n\r\n}\n\n//# sourceURL=webpack://restoran-hive/./contact.js?");

/***/ }),

/***/ "./menu.js":
/*!*****************!*\
  !*** ./menu.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuItem: () => (/* binding */ MenuItem),\n/* harmony export */   getMenu: () => (/* binding */ getMenu)\n/* harmony export */ });\n/* harmony import */ var _img_CH1apilg2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/CH1apilg2.jpg */ \"./img/CH1apilg2.jpg\");\n/* harmony import */ var _img_Holtmash_s_dikoy_zelenyu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Holtmash-s-dikoy-zelenyu.jpg */ \"./img/Holtmash-s-dikoy-zelenyu.jpg\");\n/* harmony import */ var _img_vtoraya_zhena_16_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/vtoraya_zhena_16.jpg */ \"./img/vtoraya_zhena_16.jpg\");\n/* harmony import */ var _img_unnamed_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/unnamed.jpg */ \"./img/unnamed.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass MenuItem {\r\n    constructor(name, description, imgUrl, price){\r\n        this.name = name;\r\n        this.description = description;\r\n        this.imgUrl = imgUrl;\r\n        this.price = price;\r\n    }\r\n    render(){\r\n        const menuItem = document.createElement('div');\r\n            menuItem.classList.add('menu-item');\r\n        const img = document.createElement('img');\r\n        img.src = this.imgUrl;\r\n        img.alt = this.name;\r\n        img.alt = this.name;\r\n        img.classList.add('menu-img');\r\n\r\n        const title = document.createElement('h2');\r\n        title.textContent = this.name;\r\n        title.classList.add('menu-title');\r\n        \r\n        const desc = document.createElement('p');\r\n        desc.textContent = this.description;\r\n        desc.classList.add('menu-desc');\r\n\r\n        const price = document.createElement('p');\r\n        price.textContent = `Цена: ${this.price} рублей`;\r\n        price.classList.add('menu-price')\r\n        const divmenu = document.createElement('div');\r\n        divmenu.classList.add('divmenu');\r\n        divmenu.append(img)\r\n\r\n        const secondmenu = document.createElement('div');\r\n        secondmenu.classList.add('secondmenu');\r\n        secondmenu.append(title, desc, price);\r\n\r\n        menuItem.append(divmenu, secondmenu);\r\n\r\n        return menuItem;\r\n    }\r\n}\r\nfunction getMenu(){\r\n\r\n    const menuSection = document.createElement('div');\r\n    menuSection.className = 'menu-section';\r\n    menuSection.classList.add('menu-section');\r\n    const galush = new MenuItem(\r\n        'Жижаг-галнаш',\r\n        'Традиционное чеченское блюдо с мясом и галушками из пшеничной муки.Также, к ним подается чесночный соус',\r\n        _img_unnamed_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n        600,\r\n    )\r\n    \r\n    const hingal = new MenuItem(\r\n        'Хингал',\r\n        'Любимое из сладкого для  чеченцев!тонкие лепешки с тыквой, пропитанные топленным маслом ',\r\n        _img_vtoraya_zhena_16_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n        250,\r\n    )\r\n    \r\n    const holtamash = new MenuItem(\r\n        'Холтамаш', \r\n        'В основном готовятся традиционно в период появления черемши.Курзе из пшеничной муки с начинкой из черемши и творога',\r\n        _img_Holtmash_s_dikoy_zelenyu_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n        400,\r\n    )\r\n  \r\n    const chepalg = new MenuItem(\r\n        'Ч1епалг',\r\n        'Тоже относится к традиционным блюдам чеченцев.Тонкие лепешки с творогом и пропитанные топленным маслом',\r\n        _img_CH1apilg2_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n        250,\r\n    )\r\n    \r\n    \r\n    \r\n    menuSection.append(galush.render(), hingal.render(), holtamash.render(), chepalg.render())\r\n\r\n    \r\n    \r\n    return menuSection;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restoran-hive/./menu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Fredoka-VariableFont_wdth,wght.ttf */ \"./fonts/Fredoka-VariableFont_wdth,wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sadik.jpg */ \"./img/sadik.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/boootcamp.jpg */ \"./img/boootcamp.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: \"Fredoka\";\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n:root {\r\n  --font-family: \"Fredoka\", sans-serif;\r\n  --font-size: 24px;\r\n  --font-weight: 900;\r\n  --color: rgb(98, 140, 123);\r\n}\r\n\r\n.h1 {\r\n  font-family: var(--font-family);\r\n  font-weight: var(--font-weight);\r\n  color: var(--color);\r\n}\r\n.container {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.header {\r\n  font-family: \"Fredoka\", sans-serif;\r\n  font-weight: 900;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: 100wv;\r\n  height: 100px;\r\n  border-radius: 0 0 0px 0px;\r\n  backdrop-filter: blur(40px) brightness(1.25);\r\n  color: rgb(134, 230, 214);\r\n  padding: 20px;\r\n  text-align: center;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 20px 4px 20px 15px;\r\n}\r\n.firstDiv {\r\n  display: flex;\r\n  padding-left: 100px;\r\n}\r\n\r\n.menuBtn {\r\n  font-family: var(--font-family);\r\n  font-size: var(--font-size);\r\n  font-weight: var(--font-weight);\r\n  color: var(--color);\r\n  cursor: pointer;\r\n  width: 150px;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n.menuBtn:hover {\r\n  color: rgb(4, 69, 126);\r\n}\r\n.aboutBtn {\r\n  font-family: var(--font-family);\r\n  font-size: var(--font-size);\r\n  font-weight: var(--font-weight);\r\n  color: var(--color);\r\n  cursor: pointer;\r\n  width: 150px;\r\n  background-color: transparent;\r\n  border: none;\r\n  padding-left: 20px;\r\n}\r\n.aboutBtn:hover {\r\n  color: rgb(4, 69, 126);\r\n}\r\n\r\n.contactBtn {\r\n  font-family: var(--font-family);\r\n  font-size: var(--font-size);\r\n  font-weight: var(--font-weight);\r\n  color: var(--color);\r\n  cursor: pointer;\r\n  width: 150px;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n.contactBtn:hover {\r\n  color: rgb(4, 69, 126);\r\n}\r\n.aboutTitle {\r\n  font-family: var(--font-family);\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  color: rgb(28, 39, 52);\r\n}\r\n.aboutText {\r\n  font-family: var(--font-family);\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: rgb(45, 45, 81);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: start;\r\n}\r\n.about-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 600px;\r\n  height: 650px;\r\n  margin: 0 auto;\r\n  margin-top: 40px;\r\n  padding: 25px 35px;\r\n  overflow: hidden;\r\n  backdrop-filter: blur(40px) brightness(1.15);\r\n  border-radius: 40px;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;\r\n  animation: 0.3s ease-out 0s 1 moveup;\r\n}\r\n@keyframes moveup {\r\n  0% {\r\n    transform: translateY(10%) scale(0.9);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateY(0) scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.menu-section {\r\n  border-radius: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 640px;\r\n  height: 650px;\r\n  padding: 20px;\r\n  margin: 0 auto;\r\n  margin-top: 40px;\r\n  overflow: hidden;\r\n  backdrop-filter: blur(40px) brightness(1.15);\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;\r\n  animation: 0.3s ease-out 0s 1 moveup;\r\n}\r\n\r\n.menu-img {\r\n  width: 100px;\r\n  height: 80px;\r\n  margin: 20px;\r\n  margin-top: 45px;\r\n  border-radius: 5px;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 6px 5px 19px 15px;\r\n}\r\n.secondmenu {\r\n  margin: 10px;\r\n  font-family: var(--font-family);\r\n  font-weight: var(--font-weight);\r\n  font-size: 13px;\r\n  color: rgb(18, 29, 40);\r\n}\r\n\r\n.divmenu {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.menu-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.contact {\r\n  border-radius: 40px;\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  width: 640px;\r\n  height: 650px;\r\n  margin: 0 auto;\r\n  margin-top: 40px;\r\n  overflow: hidden;\r\n  backdrop-filter: blur(40px) brightness(1.15);\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;\r\n  animation: 0.3s ease-out 0s 1 moveup;\r\n}\r\n.close-button {\r\n  font-family: var(--font-family);\r\n  font-size: var(--font-size);\r\n  font-weight: var(--font-weight);\r\n  color: var(--color);\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border: none;\r\n  width: 150px;\r\n  padding-left: 20px;\r\n}\r\n\r\n.close-button:hover {\r\n  color: rgb(4, 69, 126);\r\n  cursor: pointer;\r\n}\r\n\r\n.contText {\r\n  font-family: var(--font-family);\r\n  font-size: 24px;\r\n  line-height: 24px;\r\n  font-weight: var(--font-weight);\r\n  color: rgb(22, 65, 107);\r\n}\r\n\r\n.link {\r\n  width: 100%;\r\n  height: 100hv;\r\n  text-indent: -9999px;\r\n  color: green;\r\n}\r\n.contactsItem {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 60px;\r\n  margin-top: 100px;\r\n  text-decoration: none;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n  width: 200px;\r\n  text-indent: px;\r\n  height: 200px;\r\n  background-size: contain;\r\n  border-radius: 104px;\r\n  box-shadow: 2px 2px 20px 14px #103e28;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restoran-hive/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restoran-hive/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restoran-hive/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restoran-hive/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restoran-hive/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restoran-hive/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restoran-hive/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restoran-hive/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restoran-hive/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restoran-hive/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restoran-hive/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _img_sadik_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/sadik.jpg */ \"./img/sadik.jpg\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet body = document.querySelector(\"body\");\r\nbody.classList.add(\"container\");\r\nbody.className = \"container\";\r\nconst header = document.createElement(\"header\");\r\nheader.classList.add(\"header\");\r\nbody.append(header);\r\nconst h1 = document.createElement(\"h1\");\r\nh1.textContent = \"Добро пожаловать в наш ресторан!\";\r\nh1.classList.add(\"h1\");\r\nheader.append(h1);\r\n\r\nconst firstDiv = document.createElement(\"div\");\r\nfirstDiv.className = \"firstDiv\";\r\nheader.append(firstDiv);\r\nconst aboutBtn = document.createElement(\"button\");\r\naboutBtn.className = \"aboutBtn\";\r\n\r\naboutBtn.textContent = \"О нас\";\r\naboutBtn.classList.add(\"about\");\r\nconst menuBtn = document.createElement(\"button\");\r\nmenuBtn.className = \"menuBtn\";\r\nmenuBtn.textContent = \"Меню\";\r\n\r\nconst contactBtn = document.createElement(\"button\");\r\ncontactBtn.className = \"contactBtn\";\r\ncontactBtn.textContent = \"Контакты\";\r\nconst resetBtn = document.createElement(\"button\");\r\nresetBtn.classList.add(\"close-button\");\r\nresetBtn.textContent = \"Закрыть\";\r\nfirstDiv.append(aboutBtn, menuBtn, contactBtn, resetBtn);\r\n\r\nresetBtn.addEventListener(\"click\", () => {\r\n  location.reload();\r\n});\r\n\r\nconst pageObj = {\r\n  aboutBtn: _about__WEBPACK_IMPORTED_MODULE_2__.getAbout,\r\n  menuBtn: _menu__WEBPACK_IMPORTED_MODULE_3__.getMenu,\r\n  contactBtn: _contact__WEBPACK_IMPORTED_MODULE_4__.getContact,\r\n};\r\n\r\nconst getBtnArray = [\r\n  { btn: aboutBtn, page: \"aboutBtn\" },\r\n  { btn: menuBtn, page: \"menuBtn\" },\r\n  { btn: contactBtn, page: \"contactBtn\" },\r\n];\r\n\r\nfunction renderPage(page) {\r\n  if (pageObj[page]) {\r\n    body.textContent = \"\";\r\n    body.append(header);\r\n    body.append(pageObj[page]());\r\n  }\r\n}\r\n\r\ngetBtnArray.forEach(({ btn, page }) => {\r\n  btn.addEventListener(\"click\", () => {\r\n    renderPage(page);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://restoran-hive/./script.js?");

/***/ }),

/***/ "./fonts/Fredoka-VariableFont_wdth,wght.ttf":
/*!**************************************************!*\
  !*** ./fonts/Fredoka-VariableFont_wdth,wght.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1cfa1639746e014c46fc.ttf\";\n\n//# sourceURL=webpack://restoran-hive/./fonts/Fredoka-VariableFont_wdth,wght.ttf?");

/***/ }),

/***/ "./img/CH1apilg2.jpg":
/*!***************************!*\
  !*** ./img/CH1apilg2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28d447cbef15a605040f.jpg\";\n\n//# sourceURL=webpack://restoran-hive/./img/CH1apilg2.jpg?");

/***/ }),

/***/ "./img/Holtmash-s-dikoy-zelenyu.jpg":
/*!******************************************!*\
  !*** ./img/Holtmash-s-dikoy-zelenyu.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eecfdf67a15288bfb28e.jpg\";\n\n//# sourceURL=webpack://restoran-hive/./img/Holtmash-s-dikoy-zelenyu.jpg?");

/***/ }),

/***/ "./img/boootcamp.jpg":
/*!***************************!*\
  !*** ./img/boootcamp.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9e78e49ffa0e2fb59dc.jpg\";\n\n//# sourceURL=webpack://restoran-hive/./img/boootcamp.jpg?");

/***/ }),

/***/ "./img/sadik.jpg":
/*!***********************!*\
  !*** ./img/sadik.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c2a9ce6b625a69fa629c.jpg\";\n\n//# sourceURL=webpack://restoran-hive/./img/sadik.jpg?");

/***/ }),

/***/ "./img/unnamed.jpg":
/*!*************************!*\
  !*** ./img/unnamed.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd030537fcf1d08b4a0c.jpg\";\n\n//# sourceURL=webpack://restoran-hive/./img/unnamed.jpg?");

/***/ }),

/***/ "./img/vtoraya_zhena_16.jpg":
/*!**********************************!*\
  !*** ./img/vtoraya_zhena_16.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ed7bbffbc4928fec411.jpg\";\n\n//# sourceURL=webpack://restoran-hive/./img/vtoraya_zhena_16.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;