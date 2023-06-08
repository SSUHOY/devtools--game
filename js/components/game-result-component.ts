// @ts-ignore
import { DIFFICULTY_PAGE } from '../routes.ts'
// @ts-ignore
import { game } from '../main.ts'

// @ts-ignore
export function renderResultMessagePageComp({ appEl, goToPage }) {
    const appHtml = ` <div class = "body-box center">
    <div class = 'main box'>
        <div class="img-block">
            <img src="dist/static/img/win-img.svg" alt="win-img" class="winimg">
        </div>
        <p class="box__title result-box__title">
       ${game.isWin ? 'Вы выиграли!' : 'Вы проиграли!'}
        </p>
        <p class="timer_title">Затраченное время:</p>
            <div class="timer time-result">
                <div class="timer__block">
                    <span id="minutes">00</span>
                  </div>
                  <span class="timer__dot">.</span>
                  <div class="timer__block">
                    <span id="seconds">00</span>
                  </div> 
            </div>
            <form class="btn-container">
                <button class="restart-button" id='restartBtn'>Играть снова</button>
            </form>
    </div>
</div>
    `

    appEl.innerHTML = appHtml;

    document.getElementById('restartBtn')?.addEventListener('click', () => {
        goToPage(DIFFICULTY_PAGE);
    })
}
