const numberValue = 0
const stringValue = '文字列'
const booleanValue = true

test('premitive values equal the same values with toEqual', () => {
  expect(numberValue).toEqual(0)
  expect(stringValue).toEqual('文字列')
  expect(booleanValue).toEqual(true)
})

test('premitive values eqaul to the same values with toBe', () => {
  expect(numberValue).toBe(0)
  expect(stringValue).toBe('文字列')
  expect(booleanValue).toBe(true)
})

const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
}

const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
}
const can3 = can2

// ❶ can1 と can2 は等しいと評価される
test('can1 and can2 have the same properties', () => {
  expect(can1).toEqual(can2)
})

// ❷ can1 と can2 は異なると評価される
test('can1 and can2 are not the exact same instance', () => {
  expect(can1).not.toBe(can2)
})

// ❸ can2 と can3 は等しいと評価される
test('can2 and can3 are the same instance', () => {
  expect(can2).toBe(can3)
})

class Foo {
  message: string
  constructor() {
    this.message = 'hello';
  }
}

class Bar extends Foo {
  constructor() {
    super();
  }
  echo() {
    console.log(this.message)
  }
}

test('foo equals to bar', () => {
  const foo = new Foo();
  const bar = new Bar();

  // まったく同じプロパティを持つため、toEqualではtrueと評価される
  expect(foo).toEqual(bar);

  console.log(Object(foo))
  // ただしクラス名を評価した場合は、異なると評価できます
  expect(foo.constructor.name).not.toEqual(bar.constructor.name);
});

class User {
  name: string
  password: string
  constructor({ name, password }: { name: string, password: string }) {
    // passwordは6文字以下の場合Errorをthrowする
    if (password.length < 6) throw new Error('The length of the password should be longer than 6 charactors');
    this.name = name;
    this.password = password;
  }
}

test('throw Error when the length of password is less than 6', () => {
  expect(() => new User({ name: "hoge", password: "12345" })).toThrow(); // Errorがthrowされたかのチェック
  expect(() => new User({ name: "hoge", password: "12345" })).toThrow(Error); //型のチェック
  expect(() => new User({ name: "hoge", password: "12345" })).toThrow('The length of the password should be longer than 6 charactors'); //エラーメッセージのチェック
});

const fetchDataWithCallback = callback => {
  setTimeout(callback, 3000, 'lemon')
}

test('return lemon', (done) => {
  const callback = (message: string) => {
    expect(message).toBe('lemon')
    done()
  }
  fetchDataWithCallback(callback)
})

const fetchData = () => Promise.resolve('lemon')

test('resolves to lemon', () => {
  return expect(fetchData()).resolves.toBe('lemon')
});

test('resolves to lemon with async/await', async () => {
  await expect(fetchData()).resolves.toBe('lemon');
});

const fetchDataWithError = () => Promise.reject(new Error('not exist'))

test('rejects with fish', () => {
  return expect(fetchDataWithError()).rejects.toThrow('not exist')
})

