import { Browser, chromium, firefox, webkit } from 'playwright'

describe.each([
  { browserType: chromium, browserName: 'chromium' },
  { browserType: firefox, browserName: 'firefox' },
  { browserType: webkit, browserName: 'webkit' },
])('e2e test with playwright and $browserName', ({ browserType }) => {
  let browser: Browser

  beforeAll(async () => {
    browser = await browserType.launch() // ブラウザの起動
    // 実際にブラウザの挙動を見たい場合はheadlessモードを無効化する
    // browser = await browserType.launch({ headless: false })
  })

  afterAll(async () => {
    await browser.close() //ブラウザの終了
  })

  it('a search keyword will be on the page title in google.com', async () => {
    // 新しいページを立ち上げる
    const page = await browser.newPage()
    await page.goto('https://www.google.com/ncr')
    // 検索ボックスの要素を探し、playwrightを入力しエンターキーをクリック
    await page.type('input[name="q"]', 'playwright')
    await page.keyboard.press('Enter')

    // 次のページに切り替わるまで待つ
    await page.waitForURL('https://www.google.com/search?q=playwright*', {
      timeout: 2000,
    })
    expect(await page.title()).toBe('playwright - Google Search')
    // ページを終了する
    await page.close()
  })

  it('should work with Code generator test code', async () => {
    // 新しいページを立ち上げる
    const page = await browser.newPage()
    // Go to https://www.google.com/ コードジェネレーター上ではリダイレクトされ、`ncr`のパスが消えているため手動で追加
    await page.goto('https://www.google.com/ncr')
    // Click [aria-label="Search"]
    await page.locator('[aria-label="Search"]').click()
    // Fill [aria-label="Search"]
    await page.locator('[aria-label="Search"]').fill('playwright')
    // Press Enter
    await page.locator('[aria-label="Search"]').press('Enter')

    // コードジェネレーター上では次のURLをチェックしているが、検索毎にURLのパラメータは変わるため、ページタイトルを利用
    // 次のページに切り替わるまで待つ
    await page.waitForURL('https://www.google.com/search?q=playwright*', {
      timeout: 2000,
    })
    expect(await page.title()).toBe('playwright - Google Search')
    // ページを終了する
    await page.close()
  })
})
