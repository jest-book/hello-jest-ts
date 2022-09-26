describe('#reset mocks with jest.fn', () => {
  const targetDate = '2020-12-25'
  const mockDate = new Date('2019-12-25') //targetDateの1年前

  beforeEach(() => {
    Date = jest.fn(() => mockDate) as unknown as jest.MockedFunction<typeof Date>
  })

  it('jest.clearAllMocks', () => {
    // new DateでmockDate以外の値を指定してもモック化されているため、必ずmockDateがリターンされる
    expect(new Date(targetDate)).toEqual(mockDate)
    // new Dateの引数であるtargetDateの値がセットされている
    expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([['2020-12-25']])
    expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual([{ type: 'return', value: mockDate }])

    // リセット
    jest.clearAllMocks()

    // mockのプロパティがすべてリセットされる
    expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([])
    expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual([])

    // mock関数は引き続き利用できる
    expect(new Date(targetDate)).toEqual(mockDate)
  })

  it('jest.resetAllMocks', () => {
    expect(new Date(targetDate)).toEqual(mockDate)
    expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([['2020-12-25']])
    expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual([{ type: 'return', value: mockDate }])

    // リセット
    jest.resetAllMocks()

    // mockのプロパティがすべてリセットされる
    expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([])
    expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual([])

    // mock関数もリセットされ、デフォルトでは`{}`が返される
    expect(new Date(targetDate)).toEqual({})
  })

  it('jest.restoreAllMocks', () => {
    expect(new Date(targetDate)).toEqual(mockDate)
    expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([['2020-12-25']])
    expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual([{ type: 'return', value: mockDate }])

    jest.restoreAllMocks()

    // mockのプロパティはリセットされない
    expect((Date as jest.MockedFunction<typeof Date>).mock.calls).toEqual([['2020-12-25']])
    expect((Date as jest.MockedFunction<typeof Date>).mock.results).toEqual([{ type: 'return', value: mockDate }])

    // spyOnの場合と異なり、jest.fnで関数にモック関数を上書きした場合は、restoreAllMocksを利用してもオリジナルの関数へは元に戻らない
    expect(new Date(targetDate)).toEqual(mockDate)
  })
})
