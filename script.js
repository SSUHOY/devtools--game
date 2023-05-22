// Рендер страницы 

const renderApp = () => {
    const appEl = document.getElementById('gameApp') 

    const appHtml = `
    <section class="difficult__items-block center">
    <div class="container">
        <form class="difficult__values-container">
            <legend class="dif-header">Выбери сложность</legend>
            <fieldset class="difficult__values-form">
                <div>
                    <input type="radio" value="1" id="1" class="value_1"/>
                    <label for="1" class="difficult__values-buttons">1</label>
                </div>
                <div>
                    <input type="radio" value="2" id="2" class="value_2"/>
                    <label for="2" class="difficult__values-buttons">2</label>
                </div>
                <div>
                    <input type="radio" value="3" id="3" class="value_3"/>
                    <label for="3" class="difficult__values-buttons">3</label>
                </div>
            </fieldset>
            <div class="button-container">
                <button class="start-button">Старт</button>
            </div>
        </form>
    </div>
</section>
    `
   appEl.innerHTML = appHtml;
}

renderApp();

const initDifficultBtn = () => {
    const diffButtons = document.querySelectorAll(".difficult__values-buttons")
    for (const diffButton of diffButtons) {
        diffButton.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log('Нажата');
        })
    }

}
initDifficultBtn();


initStartBtn = () => {
    const startButtons = document.querySelectorAll('.start-button')

    for (const startButton of startButtons) {
        startButton.addEventListener('click', (event) => {
            event.stopPropagation();

            console.log('Start');
            renderGameApp();
        });

    }
}
initStartBtn();

