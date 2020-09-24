const webdriver = require('selenium-webdriver');
async function main() {
    try {
        var driver = new webdriver.Builder().forBrowser('safari').usingServer('http://localhost:4444/wd/hub').build();
        await driver.get('http://jsbin.testim.io/geg/11');
        const element = await driver.findElement(webdriver.By.css('custom-select'));
        const selectElement = await driver.executeScript('return arguments[0].shadowRoot.querySelector("select")', element);
        await selectElement.click();
    } finally {
        if(driver) {
            driver.quit();
        }
    }
}

main();
