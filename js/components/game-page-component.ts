// @ts-ignore
import { DIFFICULTY_PAGE } from "../routes.ts";

// @ts-ignore
export function renderGamePageComponent({ appEl, goToPage, playCards }) {
    const cardsHTML = playCards
    // @ts-ignore
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
        // @ts-ignore
        let selectedCards = [];
        let matchedPairs = 0;
        // @ts-ignore
        cardElements.forEach((cardEl) => {
            cardEl.classList.remove('visible');
        });
        setTimeout(() => {
            // @ts-ignore
            cardElements.forEach((cardEl) => {
                cardEl.classList.add('visible');
            });
        }, 500);
        setTimeout(() => {
            // @ts-ignore
            cardElements.forEach((cardEl) => {
                cardEl.classList.remove('visible');
            });
        }, 5000);
    // @ts-ignore
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
                        // @ts-ignore
                        const card1 = playCards[selectedCards[0].index];
                        // @ts-ignore
                        const card2 = playCards[selectedCards[1].index];
    
                        if (
                            card1.rank === card2.rank &&
                            card1.suit === card2.suit
                        ) {
                            // @ts-ignore
                            selectedCards.forEach((selectedCard) => {
                                setTimeout(() => {
                                    selectedCard.element.classList.add('matched');
                                }, 600);
                            });
                            matchedPairs++;
    
                            if (matchedPairs === playCards.length / 2) {
                                setTimeout(() => {
                                    alert('Вы победили!');
                                    goToPage(DIFFICULTY_PAGE);
                                }, 800);
                            }
                        } else {
                            setTimeout(() => {
                                alert('Вы проиграли!');
                                goToPage(DIFFICULTY_PAGE);
                            }, 800);
                        }
    
                        selectedCards = [];
                    }
                }
            });
        });
    // @ts-ignore
        document.querySelector('.restart-button').addEventListener('click', () => {
            console.log('start');
            goToPage(DIFFICULTY_PAGE);
        });
}
// @ts-ignore

function getSuitSymbol(suit) {
    const suitSymbols = {
        Hearts: '<img src="./static/img/hearts.svg" alt="hearts">',
        Diamonds: '<img src="./static/img/diamonds.svg" alt="diamonds">',
        Clubs: '<img src="./static/img/clubs.svg" alt="clubs">',
        Spades: '<img src="./static/img/spades.svg" alt="spades">',
    };
// @ts-ignore
    return suitSymbols[suit];
}
