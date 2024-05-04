import puppeteer from "puppeteer";

// using this script we can take screenshot of any web page using puppeteer.
// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.npmjs.com/package/puppeteer/v/14.0.0');
//     await page.screenshot({ path: 'example.png' });
//     console.log('screenshot taken . exit')
//     await browser.close();
   
//   })();

export async function getDynamicImagesFromURL(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Navigate to the URL
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Wait for dynamic content to load
    // This could be a specific element or a timeout
    // await page.waitForTimeout(3000); // Adjust as needed
    await page.evaluate(() => {
        return new Promise(resolve => {
            setTimeout(resolve, 3000); // Adjust as needed
        });
    });
    // Extract images
    const images = await page.evaluate(() => {
        const imageElements = document.querySelectorAll('img');
        const imageUrls = [];
        imageElements.forEach(img => {
            imageUrls.push(img.src);
        });
        return imageUrls;
    });

    await browser.close();

    return images;
}

