import { chohan } from './chohan'

describe('chohan', () => {
  it('returns 丁 when Math.random returns an even number like 0.2', () => {
    Math.random = jest.fn(() => 0.2)
    expect(chohan()).toBe('丁')
  })
  it('returns 半 when Math.random returns an odd number like 0.1', () => {
    Math.random = jest.fn(() => 0.1)
    expect(chohan()).toBe('半')
  })

  it('return `丁` once then it returns `半`', () => {
    Math.random = jest.fn()
      .mockImplementationOnce(() => '0.2')
      .mockImplementationOnce(() => '0.1')

    expect(chohan()).toBe('丁')
    expect(chohan()).toBe('半')
    expect(chohan()).toBe(undefined)
  })
})

// describe('#jest.fn', () => {
//   it('Math.random returns 1', () => {
//     const mockFunction = jest.fn(() => 1)
//     Math.random = mockFunction
//     expect(Math.random()).toBe(1)
//   })

//   it('Check jest.fn() specification', () => {
//     const mockRandom = jest.fn(() => 1)
//     Math.random = mockRandom
//     Math.random()
//     expect(mockRandom).toHaveProperty('mock'); // mockRandom関数はmockプロパティを持っている
//     expect(mockRandom.mock.calls.length).toBe(1); // mockRandom関数は1度呼び出された
//     expect(mockRandom.mock.calls[0]).toEqual([]); // mockRandom関数が1度呼び出された際に、引数は空だった
//     expect(mockRandom.mock.results.length).toBe(1); // mockRandom関数の結果は1つある
//     expect(mockRandom.mock.results[0].type).toBe('return'); // mockRandom関数が1度目に呼び出された結果は正常にリターンされている
//     expect(mockRandom.mock.results[0].value).toBe(1); // mockRandom関数の1度目の結果は`undefined`である
//   });
// })
