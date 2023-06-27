import { createDeck, cardDesk } from './helpers'
// Здесь будут тесты

const { test, describe, expect } = require('@jest/globals')

describe('createDeck', () => {
    test('should render card deck with 6 cards according to selected difficult 1', () => {
        createDeck(1)
        expect(cardDesk.length).toEqual(6)
    })
    test('should render card deck with 12 cards according to selected difficult 2', () => {
        createDeck(2)
        expect(cardDesk.length).toEqual(12)
    })
    test('should render card deck with 18 cards according to selected difficult 3', () => {
        createDeck(3)
        expect(cardDesk.length).toEqual(18)
    })
})
