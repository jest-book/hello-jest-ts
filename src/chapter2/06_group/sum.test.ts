import { sum } from '../getting_started_jest/sum'

describe('one test case', () => {
  test('sum', () => {
    expect(sum(1, 1)).toBe(2)
    expect(sum(-1, 1)).toBe(0)
    expect(sum(-1, -1)).toBe(-2)
    expect(sum(0, 0)).toBe(0)
  })
})

describe('multiple test case', () => {
  test('1 plus 1 equals 2', () => {
    expect(sum(1, 1)).toBe(2)
  })

  test('-1 plus 1 equals 0', () => {
    expect(sum(-1, 1)).toBe(0)
  })

  test('-1 plus -1 equals -2', () => {
    expect(sum(-1, -1)).toBe(-2)
  })

  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
})

describe('use test.each', () => {
  test.each([
    { a: 1, b: 1, expected: 2 },
    { a: -1, b: 1, expected: 0 },
    { a: -1, b: -1, expected: -2 },
    { a: 0, b: 0, expected: 0 },
  ])('$a plus $b equals $expected', ({ a, b, expected }) => {
    expect(sum(a, b)).toBe(expected)
  })
})
