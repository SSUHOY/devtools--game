/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/difficulty-page-component.js":
/*!****************************************************!*\
  !*** ./js/components/difficulty-page-component.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDifficultPageComponent: () => (/* binding */ renderDifficultPageComponent)
/* harmony export */ });
/* harmony import */ var _main_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.ts */ "./js/main.ts");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.js */ "./js/routes.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers.js */ "./js/helpers.js");




function renderDifficultPageComponent({ appEl, goToPage }) {
    const appHtml = `<div class="difficult__items-block center">
    <form class="container">
                    <div class="difficult__values-container">
                        <p class="dif-header">Выбери сложность</p>
                        <div class="difficult__values">
                            <label class="difficult__values-buttons">
                                <input type="radio" name="difficulty" value="1" class="value" />
                                <span class="difficulty-box__item-text">1</span>
                            </label>
                            <label class="difficult__values-buttons">
                                <input type="radio" name="difficulty" value="2" class="value" />
                                <span class="difficulty-box__item-text">2</span>
                            </label>
                            <label class="difficult__values-buttons">
                                <input type="radio" name="difficulty" value="3" class="value"/>
                                <span class="difficulty-box__item-text">3</span>
                            </label>
                        </div>
                        <div class = 'difficult__btn'>
                        <button type="submit" class="start-button" id="start-btn">Старт</button>
                        </div>
                        <div class='form-error'></div> 
                    </div>
                </form>
                </div>`

    appEl.innerHTML = appHtml

    const difficultyFormEl = appEl.querySelector('.container')
    const formErrorEl = appEl.querySelector('.form-error')

    const difficultyBtnElements = document.querySelectorAll(
        '.difficult__values-buttons'
    )

    let prevSelectedBtn = null

    difficultyBtnElements.forEach((difficultyBtnEl) => {
        difficultyBtnEl.addEventListener('click', () => {
            setError('')
            if (prevSelectedBtn !== null) {
                prevSelectedBtn.classList.remove('selected')
            }
            difficultyBtnEl.classList.add('selected')
            prevSelectedBtn = difficultyBtnEl
        })
    })

    difficultyFormEl.addEventListener('submit', (e) => {
        e.preventDefault()
        const selectedDifficultyBtn = difficultyFormEl.querySelector(
            "input[name='difficulty']:checked"
        )

        if (!selectedDifficultyBtn) {
            setError('Выберите уровень сложности!')
            return
        }

        const selectedDifficulty = parseInt(selectedDifficultyBtn.value)
        _main_ts__WEBPACK_IMPORTED_MODULE_0__.game.difficulty = selectedDifficulty
        _main_ts__WEBPACK_IMPORTED_MODULE_0__.game.gameStatus = _routes_js__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE
        _main_ts__WEBPACK_IMPORTED_MODULE_0__.game.cards = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.createDeck)(selectedDifficulty)
        goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE)
    })

    function setError(message) {
        formErrorEl.textContent = message
    }
}


/***/ }),

/***/ "./js/components/game-page-component.js":
/*!**********************************************!*\
  !*** ./js/components/game-page-component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGamePageComponent: () => (/* binding */ renderGamePageComponent)
/* harmony export */ });
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./js/routes.js");


function renderGamePageComponent({ appEl, goToPage, playCards }) {
    const cardsHTML = playCards
        .map((card, index) => {
            console.log(card)
            return `<div class="card visible" data-index="${index}">
                    <div class="view back_view">
                        <img src="./static/img/card-back.png" alt="card back">
                    </div>
                    <div class="card__front">
                        <div class="card__top-left">
                            <span class="rank">${card.rank}</span>
                            <span class="small-suit">${getSuitSymbol(
                                card.suit
                            )}</span>
                        </div>
                        <div class="card__center-suit">${getSuitSymbol(
                            card.suit
                        )}
                        </div>
                        <div class="card__down-right">
                            <span class="rank">${card.rank}</span>
                            <span class="small-suit">${getSuitSymbol(
                                card.suit
                            )}</span>
                        </div> 
                    </div>  
                </div>`
        })
        .join('')

        const appHtml = `<div class="top center">
        <div class="details">
        <div class="time-form">
            <div>
                <p class="time">min</p>
                <p class="timer">00.</p>
            </div>
           <div>
            <p class="time">sec</p>
            <p class="timer">00</p>
           </div>
        </div>
        <form>
            <button class="restart-button">Начать заново</button>
        </form>
    </div>
        <div class="cards">${cardsHTML}</div>
      `;
    
        appEl.innerHTML = appHtml;

        const cardElements = appEl.querySelectorAll('.card');
        let selectedCards = [];
        let matchedPairs = 0;
        cardElements.forEach((cardEl) => {
            cardEl.classList.remove('visible');
        });
        setTimeout(() => {
            cardElements.forEach((cardEl) => {
                cardEl.classList.add('visible');
            });
        }, 500);
        setTimeout(() => {
            cardElements.forEach((cardEl) => {
                cardEl.classList.remove('visible');
            });
        }, 5000);
    
        cardElements.forEach((cardEl, index) => {
            cardEl.addEventListener('click', () => {
                if (
                    selectedCards.length < 2 &&
                    !cardEl.classList.contains('matched') &&
                    !cardEl.classList.contains('visible')
                ) {
                    cardEl.classList.add('visible');
                    selectedCards.push({ element: cardEl, index });
    
                    if (selectedCards.length === 2) {
                        const card1 = playCards[selectedCards[0].index];
                        const card2 = playCards[selectedCards[1].index];
    
                        if (
                            card1.rank === card2.rank &&
                            card1.suit === card2.suit
                        ) {
                            selectedCards.forEach((selectedCard) => {
                                setTimeout(() => {
                                    selectedCard.element.classList.add('matched');
                                }, 600);
                            });
                            matchedPairs++;
    
                            if (matchedPairs === playCards.length / 2) {
                                setTimeout(() => {
                                    alert('Вы победили!');
                                    goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_0__.DIFFICULTY_PAGE);
                                }, 800);
                            }
                        } else {
                            setTimeout(() => {
                                alert('Вы проиграли!');
                                goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_0__.DIFFICULTY_PAGE);
                            }, 800);
                        }
    
                        selectedCards = [];
                    }
                }
            });
        });
    
        document.querySelector('.restart-button').addEventListener('click', () => {
            console.log('start');
            goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_0__.DIFFICULTY_PAGE);
        });
}


function getSuitSymbol(suit) {
    const suitSymbols = {
        Hearts: '<img src="./static/img/hearts.svg" alt="hearts">',
        Diamonds: '<img src="./static/img/diamonds.svg" alt="diamonds">',
        Clubs: '<img src="./static/img/clubs.svg" alt="clubs">',
        Spades: '<img src="./static/img/spades.svg" alt="spades">',
    };

    return suitSymbols[suit];
}


/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDeck: () => (/* binding */ createDeck)
/* harmony export */ });
function createDeck(difficulty) {
    let cardDesk = []

    const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades']
    const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6']

    for (let suit of compareRandom(suits)) {
        for (let rank of compareRandom(ranks)) {
            cardDesk.push({ suit, rank })
        }
    }

    cardDesk = compareRandom(cardDesk)
        .slice(0, difficulty * 3)
        .flatMap((card) => [card, { ...card }])
    return compareRandom(cardDesk)
}

function compareRandom(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


/***/ }),

/***/ "./js/routes.js":
/*!**********************!*\
  !*** ./js/routes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DIFFICULTY_PAGE: () => (/* binding */ DIFFICULTY_PAGE),
/* harmony export */   GAME_PAGE: () => (/* binding */ GAME_PAGE),
/* harmony export */   RESULT_PAGE: () => (/* binding */ RESULT_PAGE)
/* harmony export */ });
const DIFFICULTY_PAGE = 'difficulty';
const GAME_PAGE = 'game';
const RESULT_PAGE = 'result';


/***/ }),

/***/ "./scss/styles.css":
/*!*************************!*\
  !*** ./scss/styles.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game),
/* harmony export */   renderApp: () => (/* binding */ renderApp)
/* harmony export */ });
/* harmony import */ var _scss_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.css */ "./scss/styles.css");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.js */ "./js/routes.js");
/* harmony import */ var _components_difficulty_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/difficulty-page-component.js */ "./js/components/difficulty-page-component.js");
/* harmony import */ var _components_game_page_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game-page-component.js */ "./js/components/game-page-component.js");




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
        _routes_js__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE,
        _routes_js__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE,
    ].includes(newPage)) {
        if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE) {
            page = _routes_js__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE;
            return renderApp();
        }
        if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE) {
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
    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE) {
        return (0,_components_difficulty_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderDifficultPageComponent)({
            appEl: appEl,
            goToPage: goToPage,
        });
    }
    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_1__.GAME_PAGE) {
        var playCards = game.cards;
        return (0,_components_game_page_component_js__WEBPACK_IMPORTED_MODULE_3__.renderGamePageComponent)({
            appEl: appEl,
            goToPage: goToPage,
            playCards: playCards,
        });
    }
};
goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PAGE);
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map