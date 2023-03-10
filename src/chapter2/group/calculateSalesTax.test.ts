// 複数のテストケースを利用したcalculateSalesTax関数のテスト
// 消費税を計算。税率を10%に固定。
const calculateSalesTax = (price: number) =>
  price > 0 ? Math.floor((price / 100) * 10) : 0

describe('calculateSalesTax', () => {
  test('calculates the sales tax for a price equal to 100', () => {
    expect(calculateSalesTax(100)).toBe(10)
  })

  test('calculates the sales tax for a price equal to 99', () => {
    expect(calculateSalesTax(99)).toBe(9)
  })

  test('calculates the sales tax for a price equal to 1', () => {
    expect(calculateSalesTax(1)).toBe(0)
  })

  test('calculates the sales tax for a price equal to 0.1', () => {
    expect(calculateSalesTax(0.1)).toBe(0)
  })

  test('calculates the sales tax for a price equal to 0', () => {
    expect(calculateSalesTax(0)).toBe(0)
  })

  test('calculates the sales tax for a price equal to -1', () => {
    expect(calculateSalesTax(-1)).toBe(0)
  })
})

// パラメタライズドテストを利用したcalculateSalesTax関数のテスト
describe('calculateSalesTax with Parameterized Tests', () => {
  test.each([
    { price: 100, expected: 10 },
    { price: 99, expected: 9 },
    { price: 1, expected: 0 },
    { price: 0.1, expected: 0 },
    { price: 0, expected: 0 },
    { price: -1, expected: 0 },
  ])(
    'calculates the sales tax for a price equal to $price',
    ({ price, expected }) => {
      expect(calculateSalesTax(price)).toBe(expected)
    },
  )
})
