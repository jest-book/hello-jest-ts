describe('#reset mocks with jest.fn', () => {
  const mockDate = new Date('2019-12-21') // 1年前の今日
  const originalDate = new Date('2020-12-25')

  it('jest.clearAllMocks', () => {
    expect(new Date('2020-12-25')).toEqual(mockDate)
    expect(Date.mock.calls).toEqual([['2020-12-25']])
    expect(Date.mock.instances).toEqual([{}])
    expect(Date.mock.results).toEqual([{ type: 'return', value: mockDate }])
  })

  //   // リセット
  //   jest.clearAllMocks();

  //   // mockのプロパティがすべてリセットされる
  //   expect(Date.mock.calls).toEqual([]);
  //   expect(Date.mock.instances).toEqual([]);
  //   expect(Date.mock.results).toEqual([]);

  //   // mock関数は引き続き利用できる
  //   expect(new Date('2020-12-25')).toEqual(mockDate);
  // });

  // it('jest.resetAllMocks', () => {
  //   expect(new Date('2020-12-25')).toEqual(mockDate);
  //   expect(Date.mock.calls).toEqual([['2020-12-25']]);
  //   expect(Date.mock.instances).toEqual([{}]);
  //   expect(Date.mock.results).toEqual([{ type: 'return', value: mockDate }]);

  //   // リセット
  //   jest.resetAllMocks();

  //   // mockのプロパティがすべてリセットされる
  //   expect(Date.mock.calls).toEqual([]);
  //   expect(Date.mock.instances).toEqual([]);
  //   expect(Date.mock.results).toEqual([]);

  //   // mock関数もリセットされ、デフォルトでは`{}`が返される
  //   expect(new Date('2020-12-25')).toEqual({})
  // })

  // it('jest.restoreAllMocks', () => {
  //   expect(new Date('2020-12-25')).toEqual(mockDate);
  //   expect(Date.mock.calls).toEqual([['2020-12-25']]);
  //   expect(Date.mock.instances).toEqual([{}]);
  //   expect(Date.mock.results).toEqual([{ type: 'return', value: mockDate }]);

  //   jest.restoreAllMocks();

  //   // mockのプロパティはリセットされない
  //   expect(Date.mock.calls).toEqual([['2020-12-25']]);
  //   expect(Date.mock.instances).toEqual([{}]);
  //   expect(Date.mock.results).toEqual([{ type: 'return', value: mockDate }]);

  //   // spyOnの場合と異なり、jest.fnで関数にモック関数を上書きした場合は、restoreAllMocksを利用してもオリジナルの関数へは元に戻らない
  //   expect(new Date('2020-12-25')).not.toEqual(originalDate);
  //   expect(new Date('2020-12-25')).toEqual(mockDate);
  // });
});
