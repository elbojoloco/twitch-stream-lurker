
const puppeteer = require('puppeteer');

const settings = require('./settings.json');

const args = process.argv.slice(2);

async function run() {
    var browserSettings = {
        headless: args.indexOf('-h') >= 0 ? false : true,
        slowMo: 50
    };

    if (settings.executablePath.length) {
        browserSettings.executablePath = settings.executablePath
    }

    const browser = await puppeteer.launch(browserSettings);

    var isBrowserActive = true;

    const page = await browser.newPage();

    const usernameSelector = 'input[autocomplete="username"]';
    const passwordSelector = 'input[autocomplete="current-password"]';
    const buttonSelector = 'button[data-a-target="passport-login-button"]';

    page.setViewport({width: 1500, height: 1000});

    await page.goto('https://www.twitch.tv/login');

    await page.waitForSelector(usernameSelector, { visible: true });

    await page.screenshot({ path: 'screenshots/login-popup.png' });

    await page.type(usernameSelector, settings.credentials.username);
    await page.type(passwordSelector, settings.credentials.password);

    await page.screenshot({ path: 'screenshots/credentials-entered.png' });

    await page.click(buttonSelector);

    await page.screenshot({ path: 'screenshots/credentials-submit.png' });

    await page.waitForNavigation({ timeout: 10000 })
                .catch(async error => {
                    console.log('Login submit timout reached (10s)');

                    await page.screenshot({ path: 'screenshots/login-timeout.png' });

                    browser.close();

                    isBrowserActive = false;
                });

    if (! isBrowserActive) {
        return false;
    }

    await page.screenshot({ path: 'screenshots/login-success.png' });

    await page.goto(`https://www.twitch.tv/${settings.channel}`);

    await page.screenshot({ path: 'screenshots/visit-hugo.png' });
}

run();

// // Keep the script alive
// new Promise(_ => null)