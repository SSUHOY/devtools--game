/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/styles.css":
/*!*************************!*\
  !*** ./scss/styles.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/routes.ts":
/*!**********************!*\
  !*** ./js/routes.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DIFFICULTY_PAGE: () => (/* binding */ DIFFICULTY_PAGE),
/* harmony export */   GAME_PAGE: () => (/* binding */ GAME_PAGE),
/* harmony export */   RESULT_PAGE: () => (/* binding */ RESULT_PAGE)
/* harmony export */ });
var DIFFICULTY_PAGE = 'difficulty';
var GAME_PAGE = 'game';
var RESULT_PAGE = 'result';


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game),
/* harmony export */   renderApp: () => (/* binding */ renderApp)
/* harmony export */ });
/* harmony import */ var _scss_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.css */ "./scss/styles.css");
/* harmony import */ var _routes_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.ts */ "./js/routes.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/difficulty-page-component.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/game-page-component.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




var page = null;
var game = {
    gameTime: 0,
    difficulty: null,
    gameStatus: page,
    cards: [],
    selectedCards: [],
};
// @ts-ignore
var goToPage = function (newPage) {
    if ([
        _routes_ts__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE,
        _routes_ts__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE,
    ].includes(newPage)) {
        if (newPage === _routes_ts__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE) {
            page = _routes_ts__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE;
            return renderApp();
        }
        if (newPage === _routes_ts__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE) {
            renderApp();
        }
        page = newPage;
        renderApp();
        return;
    }
    throw new Error('Страницы не существует');
};
var renderApp = function () {
    var appEl = document.getElementById('gameApp');
    if (page === _routes_ts__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE) {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/difficulty-page-component.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            appEl: appEl,
            goToPage: goToPage,
        });
    }
    if (page === _routes_ts__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE) {
        var playCards = game.cards;
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/game-page-component.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            appEl: appEl,
            goToPage: goToPage,
            playCards: playCards,
        });
    }
};
goToPage(_routes_ts__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE);
// let difficult = [{ value: 1 }, { value: 2 }, { value: 3 }]
// // Рендер страницы запуска игры
// const renderApp = () => {
//     const appEl = document.getElementById('gameApp')
//     const difficultHtml = difficult
//         .map((item) => {
//             return ` 
//         <div class = 'r-all'>
//         <span class="r-group">
//         <label for="${item.value}" class="difficult__values-buttons">${item.value}
//         <input type="radio" id="${item.value}" class="value" name="difficult"/>
//         </label>
//         </span>
//         </div>`
//         })
//         .join('')
//     const appHtml = `
//     <div class="difficult__items-block center">
//     <div class="container">
//         <form class="difficult__values-container">
//             <legend class="dif-header">Выбери сложность</legend>
//             <fieldset class="difficult__values-form">  
//             <div class = 'difficult__values'>
//                     ${difficultHtml}
//             </div>
//                 <div class = 'difficult__btn'>
//                 <button class="start-button" id ='start'>Старт</button>
//                 </div>
//             </fieldset>
//         </form>
//     </div>
// </div>
//     `
//     appEl.innerHTML = appHtml
// }
// renderApp()
// Рендер уровней
// const renderLevel = (value) => {
//     const appEl = document.getElementById('gameApp')
//     let rd1 = document.getElementById('1')
//     let rd2 = document.getElementById('2')
//     let rd3 = document.getElementById('3')
//     if (rd1.checked === true) {
//         value = 1
//     } else if (rd2.checked === true) {
//         value = 2
//     } else if (rd3.checked === true) {
//         value = 3
//     } else {
//         alert('Уровень сложности не выбран')
//         return
//     }
//     appEl.innerHTML = appHtml
//     initBackToBtn()
// }
// // Инициализация кнопки старт
// const initStartBtn = () => {
//     let btn = document.querySelector('.start-button')
//     btn.addEventListener('click', () => {
//         renderLevel()
//     })
// }
// // initStartBtn()
// // Инициализация кнопки "назад к началу"
// const initBackToBtn = () => {
//     let backToBtn = document.querySelector('.back-to-btn')
//     backToBtn.addEventListener('click', () => {
//         console.log('Чек')
//         renderApp()
//         initStartBtn()
//     })
// }
// // Рендер карточек

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map