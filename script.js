// Рендер страницы 
const renderApp = () => {
    const appEl = document.getElementById('gameApp')

    const appHtml = `
    <section class="difficult__items-block center">
    <div class="container">
        <form class="difficult__values-container">
            <legend class="dif-header">Выбери сложность</legend>
            <fieldset class="difficult__values-form">  
                    <label for="1" class="difficult__values-buttons">1
                    <input type="radio" value="1" id="1" class="value_1" name="difficult"/>
                    </label>
                    <label for="2" class="difficult__values-buttons">2
                    <input type="radio" value="2" id="2" class="value_2" name="difficult"/>
                    </label>
                    <label for="3" class="difficult__values-buttons">3
                    <input type="radio" value="3" id="3" class="value_3" name="difficult"/>
                    </label>
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

// Инициализация кнопки старт
initStartBtn = () => {
    const startButtons = document.querySelectorAll('.start-button')

for (const startButton of startButtons) {
    startButton.addEventListener('click', (event) => {
        event.stopPropagation()
        let selected = document.querySelector('input[type="radio"]:checked');
console.log(selected.value);
        if (selected.value === 1) {
          console.log('Выбран первый уровень сложности');
        }
    });
}
    
    
}
initStartBtn();


// Рендер страницы игры, в зависимости от выбранной сложно
const renderGamePage_1 = () => {
    const appEl = document.getElementById('gameApp')
    const appHtml = "<h1>Первый уровень сложности</h2>"
    appEl.innerHTML = appHtml
}

const renderGamePage_2 = () => {
    const appEl = document.getElementById('gameApp')

const appHtml = "<h1>Второй уровень сложности</h2>"
    appEl.innerHTML = appHtml
}

const renderGamePage_3 = () => {
    const appEl = document.getElementById('gameApp')
    const appHtml = "<h1>Третий уровень сложности</h2>"
    appEl.innerHTML = appHtml
}