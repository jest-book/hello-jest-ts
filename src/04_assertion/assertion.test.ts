// testとitを利用したテストケースの作成

test('testを利用してテストケースを作成する', () => {
  expect(true).toBe(true) // expect関数を利用し結果の評価を行う
})

it('itを利用してテストケースを作成する', () => {
  expect(true).toBe(true)
})

// プリミティブな値の評価

const numberValue = 0
const stringValue = '文字列'
const booleanValue = true

test('premitive values eqaul to the same values with toBe', () => {
  expect(numberValue).toBe(0)
  expect(stringValue).toBe('文字列')
  expect(booleanValue).toBe(true)
})

test('premitive values equal the same values with toEqual', () => {
  expect(numberValue).toEqual(0)
  expect(stringValue).toEqual('文字列')
  expect(booleanValue).toEqual(true)
})

test('premitive values equal the same values with toStrictEqual', () => {
  expect(numberValue).toStrictEqual(0)
  expect(stringValue).toStrictEqual('文字列')
  expect(booleanValue).toStrictEqual(true)
})

// オブジェクトの評価

// canの型を定義
type CanType = {
  flavor: string
  ounces: number
}

// can1とcan2はそれぞれ同じプロパティと同じ値を持つ
const can1: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

const can2: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

// can3はcan2の参照を持つ
const can3: CanType = can2

class Can {
  flavor: string
  ounces: number

  constructor({ flavor, ounces }: CanType) {
    this.flavor = flavor
    this.ounces = ounces
  }
}

// Canクラスでcan4を作成
const can4 = new Can({
  flavor: 'grapefruit',
  ounces: 12,
})

// can1 と can2 は異なると評価される
test('can1 and can2 are not the exact same instance', () => {
  expect(can1).not.toBe(can2)
})

// can2 と can3 は等しいと評価される
test('can2 and can3 are the same instance', () => {
  expect(can2).toBe(can3)
})

// can1 と can2 は等しいと評価される
test('can1 and can2 have the same properties', () => {
  expect(can1).toEqual(can2)
})

// can2 と can4 は等しいと評価される
test('can2 and can4 have the same properties', () => {
  expect(can2).toEqual(can4)
})

// can2 と can4 は等しくないと評価される
test('can2 and can4 are defferent class', () => {
  expect(can2).not.toStrictEqual(can4)
})

// Errorの評価

class User {
  name: string
  password: string
  constructor({ name, password }: { name: string; password: string }) {
    // passwordは6文字以下の場合Errorをthrowする
    if (password.length < 6)
      throw new Error('The password length must be at least 6 characters.')
    this.name = name
    this.password = password
  }
}

test('creates a new user with a 6-charactors password', () => {
  expect(new User({ name: 'hoge', password: '123456' })).toEqual({
    name: 'hoge',
    password: '123456',
  })
})

test('throw Error when the length of password is less than 6', () => {
  expect(() => new User({ name: 'hoge', password: '12345' })).toThrow() // Errorがthrowされたかのチェック
  expect(() => new User({ name: 'hoge', password: '12345' })).toThrow(Error) //型のチェック
  expect(() => new User({ name: 'hoge', password: '12345' })).toThrow(
    'The password length must be at least 6 characters.',
  ) //エラーメッセージのチェック
})

// .resolves/.rejects を利用したPromiseを返す非同期関数の評価

const fetchDataWithCallback = callback => {
  setTimeout(callback, 3000, 'lemon') // 3秒経ってから`lemon`という文字列を返す
}

test('return lemon', done => {
  const callback = data => {
    expect(data).toBe('lemon')
    done() //テストの終了を宣言
  }
  fetchDataWithCallback(callback)
})

const fetchDataWithPromiseResolve = () =>
  new Promise(resolve => setTimeout(resolve, 1000, 'lemon'))

test('return lemon', () => {
  return expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon')
})

test('return lemon by using async/await', async () => {
  await expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon')
})

const fetchDataWithPromiseReject = () => Promise.reject(new Error('not exist'))

test('return Promise.reject', () => {
  return expect(fetchDataWithPromiseReject()).rejects.toThrow('not exist')
})
