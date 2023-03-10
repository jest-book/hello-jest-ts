import puppeteer, { Browser } from 'puppeteer'

describe('e2e test with puppeteer', () => {
  let browser: Browser

  beforeAll(async () => {
    // 本書では解説していませんが、CI上で実行する際にはexecutablePathを設定する必要があります。
    if (process.env.CI) {
      browser = await puppeteer.launch({
        executablePath: 'google-chrome-stable',
      })
    } else {
      browser = await puppeteer.launch()
    }
  })

  afterAll(async () => {
    await browser.close()
  })

  it('a search keyword will be on the page title in google.com', async () => {
    // google.comにアクセス
    const page = await browser.newPage()
    await page.goto('https://www.google.com/ncr')

    // 検索ボックスの要素を探し、puppeteerを入力しエンターキーをクリック
    await page.type('input[name="q"]', 'puppeteer')
    await page.keyboard.press('Enter')

    // ページのタイトルが`puppeteer - Google Search`に切り替わるまで待つ
    await page.waitForNavigation({
      timeout: 2000,
      waitUntil: 'domcontentloaded',
    })
    expect(await page.title()).toBe('puppeteer - Google Search')
  })
})
