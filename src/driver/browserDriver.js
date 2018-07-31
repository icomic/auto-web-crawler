const puppeteer = require('puppeteer');






module.exports = {
driver: async () =>  {
	const browser = await puppeteer.launch({headless: false, executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'});
	const mainPage = await browser.newPage();
	await mainPage.goto('https://www.autoscout24.com')
	

	await browser.close();
}};


