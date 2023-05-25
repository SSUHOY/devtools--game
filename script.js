let difficult = [{ value: 1 }, { value: 2 }, { value: 3 }]

// Рендер страницы 
const renderApp = () => {

    const appEl = document.getElementById('gameApp')

    const difficultHtml = difficult.map((item) => {
        return ` 
        <div class = 'r-all'>
        <span class="r-group">
        <label for="${item.value}" class="difficult__values-buttons">${item.value}
        <input type="radio" id="${item.value}" class="value" name="difficult"/>
        </label>
        </span>
        </div>`

    }).join('')
    const appHtml =
        `
    <section class="difficult__items-block center">
    <div class="container">
        <form class="difficult__values-container">
            <legend class="dif-header">Выбери сложность</legend>
            <fieldset class="difficult__values-form">  
            <div class = 'difficult__values'>
                    ${difficultHtml}
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
    const appEl = document.getElementById('gameApp')

    let rd1 = document.getElementById('1');
    let rd2 = document.getElementById('2');
    let rd3 = document.getElementById('3');

    btn.addEventListener('click', () => {
        if (rd1.checked == true) {
            const appHtml = `
            <h1 class="dif-header">Первый уровень сложности</h2>
            <button class='back-to-btn'>К выбору сложности</button>
            `
            appEl.innerHTML = appHtml
            initBackToBtn();
        } else if (rd2.checked == true) {
            const appHtml = `
            <h1 class="dif-header">Второй уровень сложности</h2>
            <button class='back-to-btn'>К выбору сложности</button>
            `
            appEl.innerHTML = appHtml
            initBackToBtn();
        } else if (rd3.checked == true) {
            const appHtml =
            `
    <h1 class="dif-header">Третий уровень сложности</h2>
    <button class='back-to-btn'>К выбору сложности</button>
    `
    appEl.innerHTML = appHtml
    initBackToBtn();
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


