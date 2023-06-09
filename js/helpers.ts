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
        .flatMap((card) => [card, { ...card }])
    return compareRandom(cardDesk)
}

function compareRandom(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

