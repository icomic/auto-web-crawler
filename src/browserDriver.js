const puppeteer = require('puppeteer');








(async () => {
	const browser = await puppeteer.launch({headless: false, executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'});
	const page = await browser.newPage();
	await page.goto('https://www.autoscout24.com')
	
	await browser.close();
})();