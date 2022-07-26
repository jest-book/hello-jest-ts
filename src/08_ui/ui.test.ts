import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8')

describe('simple ui test', () => {
  let document: JSDOM = {}

  beforeEach(() => {
    const dom = new JSDOM(html, { runScripts: 'dangerously' })
    document = dom.window.document
  })

  it('doesn\'t show a message at the initial state', () => {
    const message = document.querySelector('#message > p') //message配下のpタグ要素を取得
    expect(message).toBe(null)
  })

  it('shows a message after clicking the button', () => {
    const button = document.querySelector('#showMessage') // showMessageボタンの要素を取得
    const click = document.createEvent('Event') // イベントを作成
    click.initEvent('click') // clickイベントとして初期化
    button.dispatchEvent(click) // buttonをクリックする

    const message = document.querySelector('#message > p') //message配下のpタグ要素を取得
    expect(message.textContent).toBe('You Passed!!!')
  })

  it('shows only one message after clicking the button twice', () => {
    const button = document.querySelector('#showMessage')
    const click = document.createEvent('Event')
    click.initEvent('click')
    button.dispatchEvent(click)
    button.dispatchEvent(click) // 2回ボタンをクリックする

    const messages = document.querySelectorAll('#message > p')
    // TODO expect１つで書ける方法を後で調査
    // expect(messages).toEqual(['<p>You Passed!!!</p>'])
    expect(messages.length).toBe(1)
    expect(messages[0].textContent).toBe('You Passed!!!')
  })
})

