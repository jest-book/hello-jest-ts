import * as users from './users'

describe('getNameList', () => {
  test('すべてのユーザー名を返す', async () => {
    const expected = ['Bob']

    // getUsersをモック化
    jest
      .spyOn(users, 'getUsers')
      .mockReturnValueOnce(Promise.resolve([{ name: 'Bob' }]))

    await expect(users.getNameList()).resolves.toEqual(expected)
  })
})
