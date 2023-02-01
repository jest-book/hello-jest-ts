describe('Math.random with jest.fn', () => {
  beforeEach(() => {
    Math.random = jest.fn(() => 0.2)
  })

  it('returns 0.2', () => {
    expect(Math.random()).toBe(0.2)
  })

  it('has mock property', () => {
    expect(Math.random).toHaveProperty('mock') // Math.random関数はmockプロパティを持っている
  })

  it('calls once', () => {
    Math.random()
    expect(
      (Math.random as jest.MockedFunction<typeof Math.random>).mock.calls
        .length,
    ).toBe(1) // Math.random関数は1度呼び出された
  })

  it("doesn't have any arguments when it's called", () => {
    Math.random()
    expect(
      (Math.random as jest.MockedFunction<typeof Math.random>).mock.calls[0],
    ).toEqual([]) // mockRandom関数が1度呼び出された際に、引数は空だった
  })

  it('has an item in results property', () => {
    Math.random()
    expect(
      (Math.random as jest.MockedFunction<typeof Math.random>).mock.results
        .length,
    ).toBe(1) // mockRandom関数の結果は1つある
  })

  it('returns a result successfully', () => {
    Math.random()
    expect(
      (Math.random as jest.MockedFunction<typeof Math.random>).mock.results[0]
        .type,
    ).toBe('return') // mockRandom関数が1度目に呼び出された結果は正常にリターンされている
  })

  it('returns 0.2', () => {
    Math.random()
    expect(
      (Math.random as jest.MockedFunction<typeof Math.random>).mock.results[0]
        .value,
    ).toBe(0.2) // Math.random関数の結果は0.2である
  })
})
