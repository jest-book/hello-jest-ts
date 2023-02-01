// foo関数
const foo = () => ({
  bar: {
    status: 'apply',
  },
})

// test('foo', () => {
//   const result = foo()

//   // １つのオブジェクトに対して複数のチェックを行っている
//   expect(result).toHaveProperty('bar')
//   expect(result['bar']).toHaveProperty('status')
//   expect(result['bar'].status).toBe('apply')
// })

// 改善版
test('foo', () => {
  const result = foo()

  expect(result).toEqual({
    bar: {
      status: 'apply',
    },
  })
})
