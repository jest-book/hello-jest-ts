// 1秒後に`lemon`文字列を返します
const fetchData = () => new Promise(resolve => setTimeout(resolve, 1000, 'lemon'))

describe.skip('concurrent tests', () => {
  // n回数fetchDataを実行しテストする
  const runConcurrentTests = n => {
    Array.from(new Array(n).keys()).map(i => {
      it.concurrent(`test-${i}: return lemon`, async () => {
        await expect(fetchData()).resolves.toBe('lemon')
      })
    })
  }

  // 100回呼び出す
  runConcurrentTests(100)
})
