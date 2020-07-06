const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    console.log('Web browser started');
    const page = await browser.newPage();
    const URL = 'http://en.wikipedia.org/wiki/Node.js';
    await page.goto(URL);
    console.log('Navegated to:', URL);
    var title1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1.innerHTML;
    })
    console.log('Web page title scrapped:', title1);
    await browser.close();
    console.log('Browser closed');
})();