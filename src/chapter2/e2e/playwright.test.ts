jest.setTimeout(10000)

import { Browser, Page, chromium, firefox, webkit } from 'playwright'

describe.each([
  { browserType: chromium, browserName: 'chromium' },
  { browserType: firefox, browserName: 'firefox' },
  { browserType: webkit, browserName: 'webkit' },
])('e2e test with playwright and $browserName', ({ browserType }) => {
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    browser = await browserType.launch() // ブラウザの起動
    // browser = await browserType.launch({ headless: false }) // 実際にブラウザの挙動を見たい場合はheadlessモードを無効化する
  })

  afterAll(async () => {
    await browser.close() //ブラウザの終了
  })

  beforeEach(async () => {
    page = await browser.newPage({
      recordVideo: {
        dir: 'videos',
      },
    }) // 新しいページを立ち上げる
  })

  it('a search keyword will be on the page title in google.com', async () => {
    await page.goto('https://www.google.com/ncr')
    // 検索ボックスの要素を探し、puppeteerを入力しエンターキーをクリック
    await page.type('input[name="q"]', 'playwright')
    await page.keyboard.press('Enter')

    // ページのタイトルが`playwright - Google Search`に切り替わるまで待つ
    await page.waitForNavigation({
      timeout: 2000,
      waitUntil: 'domcontentloaded',
    })
    expect(await page.title()).toBe('playwright - Google Search')
  })

  it('should work with Code generator testscases', async () => {
    // Go to https://www.google.com/ncr
    await page.goto('https://www.google.com/ncr')
    // Click [aria-label="Search"]
    await page.locator('[aria-label="Search"]').click()
    // Fill [aria-label="Search"]
    await page.locator('[aria-label="Search"]').fill('playwright')
    // Press Enter
    await page.locator('[aria-label="Search"]').press('Enter')

    // ページのタイトルが`playwright - Google Search`に切り替わるまで待つ
    await page.waitForNavigation({
      timeout: 2000,
      waitUntil: 'domcontentloaded',
    })
    expect(await page.title()).toBe('playwright - Google Search')
  })
})
