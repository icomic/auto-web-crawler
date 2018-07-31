const puppeteer = require('puppeteer');






module.exports = {
	driver: async () => {
		const browser = await puppeteer.launch({
			headless: false,
			executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
			args: [
				'--start-maximized'
			]
		});

		const mainPage = await browser.newPage();
		await mainPage.setViewport({
			width: 1920,
			height: 1080
		})
		await mainPage.goto('https://www.autoscout24.com');

	}
}