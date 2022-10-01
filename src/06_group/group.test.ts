describe('グループ名', () => {
  test('テストケース1', () => {
    expect(true).toBe(true)
  })
  test('テストケース2', () => {
    expect(true).toBe(true)
  })
  test('テストケース3', () => {
    expect(true).toBe(true)
  })

  describe('グループ名', () => {
    test('テストケース', () => {
      expect(true).toBe(true)
    })
  })
})

describe('before/after timing', () => {
  beforeAll(() => console.log('1 - beforeAll'))
  afterAll(() => console.log('1 - afterAll'))
  beforeEach(() => console.log('1 - beforeEach'))
  afterEach(() => console.log('1 - afterEach'))
  test('', () => console.log('1 - test')) // テスト1
  describe('Scoped / Nested block', () => {
    beforeAll(() => console.log('2 - beforeAll'))
    afterAll(() => console.log('2 - afterAll'))
    beforeEach(() => console.log('2 - beforeEach'))
    afterEach(() => console.log('2 - afterEach'))
    test('', () => console.log('2 - test')) // テスト2
  })
})
