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

// グループ１
describe('before/after timing', () => {
  // グループ１の前後処理
  beforeAll(() => console.log('1 - beforeAll'))
  afterAll(() => console.log('1 - afterAll'))
  beforeEach(() => console.log('1 - beforeEach'))
  afterEach(() => console.log('1 - afterEach'))
  // グループ１のテスト１
  test('', () => console.log('1 - test1'))
  // グループ２
  describe('Scoped / Nested block', () => {
    // グループ２の前後処理
    beforeAll(() => console.log('2 - beforeAll'))
    afterAll(() => console.log('2 - afterAll'))
    beforeEach(() => console.log('2 - beforeEach'))
    afterEach(() => console.log('2 - afterEach'))
    // グループ２のテスト１
    test('', () => console.log('2 - test1'))
    // グループ２のテスト２
    test('', () => console.log('2 - test2'))
  })
})
