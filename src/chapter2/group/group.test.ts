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

// グループ1
describe('before/after timing', () => {
  // グループ1の前後処理
  beforeAll(() => console.log('1 - beforeAll'))
  afterAll(() => console.log('1 - afterAll'))
  beforeEach(() => console.log('1 - beforeEach'))
  afterEach(() => console.log('1 - afterEach'))
  // グループ1のテスト1
  test('', () => console.log('1 - test1'))
  // グループ2
  describe('Scoped / Nested block', () => {
    // グループ2の前後処理
    beforeAll(() => console.log('2 - beforeAll'))
    afterAll(() => console.log('2 - afterAll'))
    beforeEach(() => console.log('2 - beforeEach'))
    afterEach(() => console.log('2 - afterEach'))
    // グループ2のテスト1
    test('', () => console.log('2 - test1'))
    // グループ2のテスト2
    test('', () => console.log('2 - test2'))
  })
})
