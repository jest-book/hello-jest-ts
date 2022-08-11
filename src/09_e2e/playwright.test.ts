/**
 * @jest-environment node
 */

import playwright, { Browser, Page } from 'playwright'

describe.each([
  { browserType: "chromium" },
  { browserType: "firefox" },
  { browserType: "webkit" },
])('e2e test with playwright and $browserType', ({ browserType }) => {
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    browser = await playwright[browserType].launch() // ブラウザの起動
    // browser = await playwright[browserType].launch({ headless: false }) // 実際にブラウザの挙動を見たい場合はheadlessを無効化する
  })

  afterAll(async () => {
    await browser.close() //ブラウザの終了
  })

  beforeEach(async () => {
    page = await browser.newPage() // 新しいページを立ち上げる
  });
  afterEach(async () => {
    await page.close() // ページを終了する
  });

  it('a search keyword will be on the page title in google.com', async () => {
    await page.goto('https://www.google.com/ncr')
    // 検索ボックスの要素を探し、puppeteerを入力しエンターキーをクリック
    await page.type('input[name="q"]', 'playwright')
    await page.keyboard.press("Enter")

    // ページのタイトルが`playwright - Google Search`に切り替わるまで待つ
    await page.waitForNavigation({ timeout: 2000, waitUntil: 'domcontentloaded' })
    expect(await page.title()).toBe('playwright - Google Search')
  })

  it('should work with Code generator testscases', async () => {
    // Go to https://www.google.com/ncr
    await page.goto('https://www.google.com/ncr');
    // Click [aria-label="Search"]
    await page.locator('[aria-label="Search"]').click();
    // Fill [aria-label="Search"]
    await page.locator('[aria-label="Search"]').fill('playwright');
    // Press Enter
    await page.locator('[aria-label="Search"]').press('Enter');

    // ページのタイトルが`playwright - Google Search`に切り替わるまで待つ
    await page.waitForNavigation({ timeout: 2000, waitUntil: 'domcontentloaded' })
    expect(await page.title()).toBe('playwright - Google Search')
  })
})
