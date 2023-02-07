describe('jest.fn()', () => {
  test('mock object specification', () => {
    const mockFunction = jest.fn()

    // mockFunction関数の結果は`undefined`である
    expect(mockFunction('foo', 'bar')).toBe(undefined)

    // mockプロパティを持っている
    expect(mockFunction).toHaveProperty('mock')

    // mockにはcallsプロパティを持っている
    expect(mockFunction.mock).toHaveProperty('calls')

    // 1度呼び出された
    expect(mockFunction.mock.calls).toHaveLength(1)

    // 1度呼び出された際に、引数は'foo'と'bar'だった
    expect(mockFunction.mock.calls[0]).toEqual(['foo', 'bar'])

    // mockにはresultsプロパティを持っている
    expect(mockFunction.mock).toHaveProperty('results')

    // 1度呼び出された
    expect(mockFunction.mock.results).toHaveLength(1)

    // 1度目の返り値はundefinedである
    expect(mockFunction.mock.results[0].value).toBe(undefined)

    // 1度目の結果は正常にリターンされている
    expect(mockFunction.mock.results[0].type).toBe('return')
  })

  test('return `Hello`', () => {
    const mockFunction = jest.fn(() => 'Hello')
    // const mockFunction = jest.fn().mockImplementation(() => 'Hello') // 上記と同じ設定
    expect(mockFunction()).toBe('Hello')
  })

  test('return `Hello` once then it returns `Goodbye`', () => {
    const mockFunction = jest
      .fn()
      .mockImplementationOnce(() => 'Hello')
      .mockImplementationOnce(() => 'Goodbye')

    expect(mockFunction()).toBe('Hello')
    expect(mockFunction()).toBe('Goodbye')
    expect(mockFunction()).toBe(undefined) // デフォルトの返り値である`undefined`がリターンされる
  })
})

describe('Matchers for mock.calls', () => {
  // mockFunctionは１回以上呼び出された
  test('mockFunction calls once', () => {
    const mockFunction = jest.fn()
    mockFunction()
    expect(mockFunction).toHaveBeenCalled()
  })

  // mockFunctionは２回呼び出された
  test('mockFunction calls twice', () => {
    const mockFunction = jest.fn()
    mockFunction()
    mockFunction()
    expect(mockFunction).toHaveBeenCalledTimes(2)
  })

  // １回目にmockFunctionが実行された際の引数が'hoge'である
  test('mockFunction calls with `hello` at the first time', () => {
    const mockFunction = jest.fn()
    mockFunction('hello')
    mockFunction('hoge')
    mockFunction('goodbye')
    expect(mockFunction).toHaveBeenCalledWith('hello')
  })

  // 最後にmockFunctionが実行された際の引数が'goodbye'である
  test('mockFunction calls with `goodbye` at the last time', () => {
    const mockFunction = jest.fn()
    mockFunction('hello')
    mockFunction('hoge')
    mockFunction('goodbye')
    expect(mockFunction).toHaveBeenLastCalledWith('goodbye')
  })

  // ２回目にmockFunctionが実行された際の引数が'hoge'である
  test('mockFunction calls with `hoge` at the second time', () => {
    const mockFunction = jest.fn()
    mockFunction('hello')
    mockFunction('hoge')
    mockFunction('goodbye')
    expect(mockFunction).toHaveBeenNthCalledWith(2, 'hoge')
  })
})
