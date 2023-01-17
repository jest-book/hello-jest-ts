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
    Math.random = jest
      .fn()
      .mockImplementationOnce(() => '0.2')
      .mockImplementationOnce(() => '0.1')

    expect(chohan()).toBe('丁')
    expect(chohan()).toBe('半')
    expect(chohan()).toBe(undefined)
  })
})
