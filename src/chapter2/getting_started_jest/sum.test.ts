import { sum } from './sum'

// テストケースを定義
test('1 + 2 equals 3', () => {
  // この例ではsum(1,2)を実行する際に結果として3が返されることを検証しています。
  expect(sum(1, 2)).toBe(3)
})
