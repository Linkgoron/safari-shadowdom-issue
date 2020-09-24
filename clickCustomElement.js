const webdriver = require('selenium-webdriver');
async function main() {
    try {
        var driver = new webdriver.Builder().forBrowser('safari').usingServer('http://localhost:4444/wd/hub').build();
        await driver.get('http://jsbin.testim.io/bol/1');
        const toggleElement = await driver.findElement(webdriver.By.css('custom-toggle-element'));
        await toggleElement.click();
        
        await driver.get('http://jsbin.testim.io/geg/11');
        const selectElement = await driver.findElement(webdriver.By.css('custom-select'));
        await selectElement.click();                
    } finally {
        if (driver) {
            driver.quit();
        }
    }
}

main();
