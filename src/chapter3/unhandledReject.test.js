/* eslint-disable */
const fetchDataReject = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Failed fetching data')), 1000, {}),
  )

// パブリックな関数と想定
const magicalFunction = () => {
  const response = fetchDataReject()
  return response ? true : false
}

// Promiseがキャッチできないため、テストケースは成功となるが、コンソールにはエラーが表示される
// 実際に試す場合は test.skip の .skipを削除
test.skip('magicalFunction returns true if fetchDataReject returns any object', () => {
  expect(magicalFunction()).toBe(true)
})
