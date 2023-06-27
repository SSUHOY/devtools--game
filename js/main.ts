import '../scss/styles.css'
import { DIFFICULTY_PAGE, GAME_PAGE, RESULT_PAGE } from './routes'
import { renderDifficultPageComponent } from './components/difficulty-page-component'
import { renderGamePageComponent } from './components/game-page-component'
import { renderResultMessagePageComp } from './components/game-result-component'
import { Card } from './helpers'

let page = ''

interface Game {
    gameTime: number
    difficulty: number | null
    gameStatus: string
    cards: Card[]
    selectedCards: { element: HTMLElement; index: number }[]
    isWin: boolean | null
}

export const game: Game = {
    gameTime: 0,
    difficulty: null,
    gameStatus: page,
    cards: [],
    selectedCards: [],
    isWin: null,
}

console.log(game.difficulty);

const goToPage = (newPage: string) => {
    if ([DIFFICULTY_PAGE, GAME_PAGE, RESULT_PAGE].includes(newPage)) {
        if (newPage === DIFFICULTY_PAGE) {
            page = DIFFICULTY_PAGE
            return renderApp()
        }
        if (newPage === GAME_PAGE) {
            renderApp()
        }

        if (newPage === RESULT_PAGE) {
            renderApp()
        }

        page = newPage
        renderApp()
        return
    }
    throw new Error('Страницы не существует')
}

export const renderApp = () => {
    const appEl = document.getElementById('gameApp')
    if (page === DIFFICULTY_PAGE) {
        return renderDifficultPageComponent({
            appEl: appEl ? appEl : document.createElement('div'),
            goToPage,
        })
    }

    if (page === GAME_PAGE) {
        const playCards = game.cards
        return renderGamePageComponent({
            appEl: appEl ? appEl : document.createElement('div'),
            goToPage,
            playCards,
        })
    }

    if (page === RESULT_PAGE) {
        return renderResultMessagePageComp({
            appEl: appEl ? appEl : document.createElement('div'),
            goToPage,
        })
    }
}

goToPage(DIFFICULTY_PAGE)

