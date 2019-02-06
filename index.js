const puppeteer = require('puppeteer');

const pdfUrl = 'https://proff.io/p/tanakaworld';

async function printPDF() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(pdfUrl, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({path: `./pdf/test.pdf`, format: 'A4', printBackground: true});

    await browser.close();
    return pdf;
}

(async () => {
    await printPDF();
})();
