/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    // 非同期の処理が成功したときはresolve()を呼ぶ
    setTimeout(() => { resolve(true) }, 1000)
    // 非同期の処理が失敗したときにはreject()を呼ぶ
    // setTimeout(() => { reject(false) }, 1000)
  })
}

const successCallback = () => { console.log('成功した') }
const failureCallback = () => { console.log('失敗した') }

// thenとcatchを利用した例
doSomethingAsync()
  .then(successCallback)
  .catch(failureCallback)

// thenのみを利用した例
doSomethingAsync()
  .then(successCallback, failureCallback)


// コールバックでネストを繰り返した例
const task = (callback, name, total) => {
  setTimeout(() => {
    total += 1
    console.log(`${name} finished! Total is ${total}.`)
    callback(total)
  }, 1000)
}

task(total => {
  task(total => {
    task(total => {
      task(total => {
        task(() => {},'task-5', total)
      },'task-4', total)
    },'task-3', total)
  },'task-2', total)
},'task-1', 0)

// コールバックをPromiseで書き直した例
const taskPromise = (name, total) => {
  return new Promise(resolve => {
    setTimeout(() => {
      total += 1
      console.log(`${name} finished! Total is ${total}.`)
      resolve(total)
    }, 1000)
  })
}

taskPromise('task-1', 0)
  .then(total => taskPromise('task-2', total))
  .then(total => taskPromise('task-3', total))
  .then(total => taskPromise('task-4', total))
  .then(total => taskPromise('task-5', total))
