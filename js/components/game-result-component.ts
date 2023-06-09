import { DIFFICULTY_PAGE } from '../routes'
import { game } from '../main'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function renderResultMessagePageComp({ appEl, goToPage }) {
    const minutes = Math.floor(game.gameTime / 60);
    const seconds = game.gameTime % 60;
        const appHtml = ` <div class = "body-box center">
    <div class = 'main box'>
        <div class="img-block">
            <img src="dist/static/img/${game.isWin ? 'win-img.png' : 'loose-img.png'} alt="win-img" class="winimg">
        </div>
        <p class="box__title result-box__title">
       ${game.isWin ? 'Вы выиграли!' : 'Вы проиграли!'}
        </p>
        <p class="timer_title">Затраченное время:</p>
            <div class="timer time-result">
                <div class="timer__block">
                    <span id="minutes">${minutes < 10 ? "0" + minutes : minutes}</span>
                  </div>
                  <span class="timer__dot">.</span>
                  <div class="timer__block">
                    <span id="seconds">${seconds < 10 ? "0" + seconds : seconds}</span>
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
