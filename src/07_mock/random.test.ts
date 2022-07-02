describe('Math.random', () => {
  const spy = jest.spyOn(Math, 'random').mockImplementation(() => 1) // Math.random()は1を返す、オリジナルの関数では0から1以下を返します

  afterEach(() => {
    spy.mockRestore() // モック関数をオリジナルの関数へ戻す
    // jest.restoreAllMocks() // 他にモック化している関数があれば、こちら1行ですべてのモック化した関数を元に戻すことができます
  })

  it('Math.random return 1', () => {
    expect(Math.random()).toEqual(1)
  })

  it('Math.random return under 1', () => {
    expect(Math.random()).toBeLessThan(1) // 1未満である
    // expect(Math.random() < 1).toEqual(true) // toEqualで1未満であることを評価する
  })
})
