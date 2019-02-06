const fs = require('fs');
const puppeteer = require('puppeteer');

async function printPDF() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://proff.io/p/tanakaworld', {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({format: 'A4'});

    await browser.close();
    return pdf;
}

(async () => {
    const pdf = await printPDF();
    fs.writeFile('./pdf/test.pdf', pdf, (error) => {
        if (error) {
            console.error('error:', error);
            return;
        }
        console.log('completed');
    });
})();
