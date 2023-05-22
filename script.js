// Рендер страницы 
const renderApp = () => {
    const appEl = document.getElementById('gameApp')

    const appHtml = `
    <section class="difficult__items-block center">
    <div class="container">
        <form class="difficult__values-container">
            <legend class="dif-header">Выбери сложность</legend>
            <fieldset class="difficult__values-form">  
            <div class = 'difficult__values'>
                    <label for="1" class="difficult__values-buttons">1
                    <input type="radio" value="1" id="1" class="value_1" name="difficult"/>
                    </label>
                    <label for="2" class="difficult__values-buttons">2
                    <input type="radio" value="2" id="2" class="value_2" name="difficult"/>
                    </label>
                    <label for="3" class="difficult__values-buttons">3
                    <input type="radio" value="3" id="3" class="value_3" name="difficult"/>
                    </label>
            </div>
                <div class = 'difficult__btn'>
                <button class="start-button" id ='start'>Старт</button>
                </div>
            </fieldset>
        </form>
    </div>
</section>
    `
    appEl.innerHTML = appHtml;
}

renderApp();

// Инициализация кнопки старт
const initStartBtn = () => {
    let btn = document.querySelector('.start-button')

    btn.addEventListener('click', () => {
        let rd1 = document.getElementById('1');
        let rd2 = document.getElementById('2');
        let rd3 = document.getElementById('3');
        if (rd1.checked == true) {
            renderGamePage_1();
        } else if (rd2.checked == true) {
            renderGamePage_2();
        } else if (rd3.checked == true) {
            renderGamePage_3();
        } else {
            alert('Уровень сложности не выбран');
        }
    });
}
initStartBtn();

// Инициализация кнопки "назад к началу"
const initBackToBtn = () => {
    let backToBtn = document.querySelector('.back-to-btn')
    backToBtn.addEventListener('click', () => {
        console.log('Чек');
        renderApp();
        initStartBtn();
    })
}

// Рендер страницы игры, в зависимости от выбранной сложно
const renderGamePage_1 = () => {
    const appEl = document.getElementById('gameApp')
    const appHtml = `
    <h1 class="dif-header">Первый уровень сложности</h2>
    <button class='back-to-btn'>К выбору сложности</button>
    `
    appEl.innerHTML = appHtml
    initBackToBtn();
   
}

const renderGamePage_2 = () => {
    const appEl = document.getElementById('gameApp')

    const appHtml = `
    <h1 class="dif-header">Второй уровень сложности</h2>
    <button class='back-to-btn'>К выбору сложности</button>
    `
    appEl.innerHTML = appHtml
    initBackToBtn();
}

const renderGamePage_3 = () => {
    const appEl = document.getElementById('gameApp')
    const appHtml = `
    <h1 class="dif-header">Третий уровень сложности</h2>
    <button class='back-to-btn'>К выбору сложности</button>
    `
    appEl.innerHTML = appHtml
    initBackToBtn();
}




