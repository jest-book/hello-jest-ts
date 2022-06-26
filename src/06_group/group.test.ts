describe('グループ名', () => {
  describe('グループ名', () => {
    test('テストケース', () => {
      expect(true).toBe(true)
    })
  })
})

describe('テスト', function () {
  const tmpThis = this;
  console.log(this)
  test('test', () => {
    expect(tmpThis).toBe(this)
  })
})
