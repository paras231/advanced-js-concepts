import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.npmjs.com/package/puppeteer/v/14.0.0');
    await page.screenshot({ path: 'example.png' });
    console.log('screenshot taken . exit')
    await browser.close();
   
  })();