// foo関数
const foo = () => ({
  bar: {
    status: 'apply',
  },
})

// 改善前
// test('foo', () => {
//   const result = foo()

//   // 1つのオブジェクトに対して複数のチェックを行っている
//   expect(result).toHaveProperty('bar')
//   expect(result['bar']).toHaveProperty('status')
//   expect(result['bar'].status).toBe('apply')
// })

// 改善後
test('foo', () => {
  const result = foo()

  expect(result).toEqual({
    bar: {
      status: 'apply',
    },
  })
})
