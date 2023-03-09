describe('Math.random with spyOn', () => {
  let spy

  afterEach(() => {
    spy.mockRestore() // モック関数を元の関数へ戻す
    // jest.restoreAllMocks() // すべてのモック化した関数をオリジナルの関数へ戻す
  })

  it('Math.random return 1', () => {
    spy = jest.spyOn(Math, 'random').mockImplementation(() => 1) // Math.random()は1を返す。元の関数では0から1未満を返す。
    expect(Math.random()).toBe(1)
  })

  it('Math.random return under 1', () => {
    expect(Math.random()).toBeLessThan(1) // 1未満である
    // expect(Math.random() < 1).toBe(true) // 上記のtoBeLessThanをtoBeで評価した例
  })
})
