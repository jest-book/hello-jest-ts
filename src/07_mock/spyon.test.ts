describe('Math.random with spyOn', () => {
  let spy

  afterEach(() => {
    spy.mockRestore() // モック関数を元の関数へ戻す
    // jest.restoreAllMocks() // 他にモック化している関数があれば、jest.restoreAllMocksですべてのSpyOnを利用してモック化した関数を元の関数へ戻すことができます。
  })

  it('Math.random return 1', () => {
    spy = jest.spyOn(Math, 'random').mockImplementation(() => 1) // Math.random()は1を返す。元の関数では0から1未満を返します。
    expect(Math.random()).toBe(1)
  })

  it('Math.random return under 1', () => {
    expect(Math.random()).toBeLessThan(1) // 1未満である
    // expect(Math.random() < 1).toBe(true) // 上記のtoBeLessThanをtoBeで評価した場合の例になります
  })
})
