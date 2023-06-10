
export interface Card {
    suit:string;
    rank: string;
}


export function createDeck(difficulty) {
    let cardDesk = []

    const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades']
    const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6']

    for (const suit of compareRandom(suits)) {
        for (const rank of compareRandom(ranks)) {
            cardDesk.push({ suit, rank })
        }
    }

    cardDesk = compareRandom(cardDesk)
        .slice(0, difficulty * 3)
        .flatMap((card) => [card, { ...card }] as const)
    return compareRandom(cardDesk) as Card[];
}

function compareRandom(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

let timerInterval = null
export let gameTime = 0

export function startTimer() {
    let minutes = 0
    let seconds = 0
    const minutesElement = document.getElementById('minutes')
    const secondsElement = document.getElementById('seconds')

    timerInterval = setInterval(() => {
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
        }
        gameTime = minutes * 60 + seconds
        if (minutesElement !== null) {
            minutesElement.textContent =
                (minutes < 10 ? '0' : '') + minutes.toString()
        }

        if (secondsElement !== null) {
            secondsElement.textContent =
                (seconds < 10 ? '.0' : '') + seconds.toString()
        }
    }, 1000)
    return gameTime
}

export function stopTimer() {
    clearInterval(timerInterval)
}
