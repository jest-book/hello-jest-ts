/* eslint-disable */
const Greeter = require('./Greeter.js')

describe('Greeter', () => {
  it.each([
    ['Taka', 'Hello Taka'],
    ['Daniel', 'Hello Daniel'],
  ])('Says Hello and %s', (name, expected) => {
    const greeter = new Greeter()
    expect(greeter.greet(name)).toBe(expected)
  })
})
