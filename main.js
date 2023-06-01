import "./styles.css"
let difficult = [{ value: 1 }, { value: 2 }, { value: 3 }]

// Рендер страницы запуска игры
const renderApp = () => {
    const appEl = document.getElementById("gameApp")

    const difficultHtml = difficult
        .map((item) => {
            return ` 
        <div class = 'r-all'>
        <span class="r-group">
        <label for="${item.value}" class="difficult__values-buttons">${item.value}
        <input type="radio" id="${item.value}" class="value" name="difficult"/>
        </label>
        </span>
        </div>`
        })
        .join("")
    const appHtml = `
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
    appEl.innerHTML = appHtml
}

renderApp()

// Рендер уровней
const renderLevel = (value) => {
    const appEl = document.getElementById("gameApp")
    let rd1 = document.getElementById("1")
    let rd2 = document.getElementById("2")
    let rd3 = document.getElementById("3")

    if (rd1.checked === true) {
        value = 1
    } else if (rd2.checked === true) {
        value = 2
    } else if (rd3.checked === true) {
        value = 3
    } else {
        alert("Уровень сложности не выбран")
        return
    }

    const appHtml = `<h1 class="dif-header">${value} уровень сложности</h2>
  <button class='back-to-btn'>К выбору сложности</button>`
    appEl.innerHTML = appHtml
    initBackToBtn()
}

// Инициализация кнопки старт
const initStartBtn = () => {
    let btn = document.querySelector(".start-button")

    btn.addEventListener("click", () => {
        renderLevel()
    })
}
initStartBtn()

// Инициализация кнопки "назад к началу"
const initBackToBtn = () => {
    let backToBtn = document.querySelector(".back-to-btn")
    backToBtn.addEventListener("click", () => {
        console.log("Чек")
        renderApp()
        initStartBtn()
    })
}

// КОД ДЛЯ СТРАНИЦЫ ИГРЫ
// const cards = document.querySelectorAll(".card")
// timeTag = document.querySelector(".timer")
// refreshBtn = document.querySelector(".restart-button")
// let matchedCards = 0
// let cardOne, cardTwo, timer
// isPlaying = false

// function flipCard({ target: clickedCard }) {
//     if (!isPlaying) {
//         isPlaying = true
//         timer = setInterval(initTimer, 1000)
//     }
//     if (clickedCard !== cardOne) {
//         clickedCard.classList.add("flip")
//     }
//     if (!cardOne) {
//         return (cardOne = clickedCard)
//     }
//     cardTwo = clickedCard
//     let cardOneIcon = cardOne.querySelector(".front-view i").classList.value
//     cardTwoIcon = cardTwo.querySelector(".front-view i").classList.value
//     matchedCards(cardOneIcon, cardTwoIcon)
// }
