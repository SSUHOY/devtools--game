// @ts-ignore
import { game } from '../main.ts'
// @ts-ignore
import { GAME_PAGE } from '../routes.ts'
// @ts-ignore
import { createDeck } from '../helpers.ts'
// @ts-ignore
export function renderDifficultPageComponent({ appEl, goToPage }) {
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
// @ts-ignore
    let prevSelectedBtn = null

    difficultyBtnElements.forEach((difficultyBtnEl) => {
        difficultyBtnEl.addEventListener('click', () => {
            setError('')
            // @ts-ignore
            if (prevSelectedBtn !== null) {
                // @ts-ignore
                prevSelectedBtn.classList.remove('selected')
            }
            difficultyBtnEl.classList.add('selected')
            prevSelectedBtn = difficultyBtnEl
        })
    })
// @ts-ignore
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
        // @ts-ignore
        game.difficulty = selectedDifficulty
        // @ts-ignore
        game.gameStatus = GAME_PAGE
        game.cards = createDeck(selectedDifficulty)
        goToPage(GAME_PAGE)
    })
// @ts-ignore
    function setError(message) {
        formErrorEl.textContent = message
    }
}
