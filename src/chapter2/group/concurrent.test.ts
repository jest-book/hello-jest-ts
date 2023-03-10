// 1秒後に`lemon`文字列を返します
const fetchData = () =>
  new Promise(resolve => setTimeout(resolve, 1000, 'lemon'))

// fetchData関数を100回実行するテスト
// skipを追加
test.concurrent.skip.each(
  Array.from(new Array(100).keys()).map(n => ({
    n,
    expected: 'lemon',
  })),
)('fetchData $n', async ({ n, expected }) => {
  console.log(n)
  await expect(fetchData()).resolves.toBe(expected)
})
