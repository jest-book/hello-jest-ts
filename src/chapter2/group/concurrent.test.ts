// 1秒後に`lemon`文字列を返します
const fetchData = () =>
  new Promise(resolve => setTimeout(resolve, 1000, 'lemon'))

// 100回数fetchData関数をテスト
test.concurrent.each(
  Array.from(new Array(100).keys()).map(n => ({
    n,
    expected: 'lemon',
  })),
)('concurrent tests $n', async ({ n, expected }) => {
  console.log(n)
  await expect(fetchData()).resolves.toBe(expected)
})
