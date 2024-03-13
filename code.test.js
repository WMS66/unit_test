const { sum, subtract, inOneHour } = require('./code')

describe('math functions', () => {
    // beforeAll(() => {
    //     console.log('before All')
    // })
    // beforeEach(() => {
    //     console.log('before each')
    // })
    // afterAll(() => {
    //     console.log('After All')
    // })
    // afterEach(() => {
    //     console.log('After Each')
    // })
    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('subtracts 2 numbers', () => {
        expect(subtract(4, 2)).toBe(2)
    })
})

describe('time functions', () => {
    it('returns the timestamap for one hour ahead', () => {
        const realDateNow = Date.now.bind(global.Date)
        global.Date.now = jest.fn(() => 0)
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDateNow
    })
})
