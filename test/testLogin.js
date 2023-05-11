const { Builder, By, Key, until} = require ('selenium-webdriver');
const should = require('chai').should();
require('dotenv').config();

//login data
let user = process.env.USER;
let pass = process.env.PASS;

/* 
As a user of Luma webstore,
I would like to be able to login,
so that I can see my profile
*/
//.only() - only this test will run. No matter how many others we have
describe('Login to Luma Demostore', () => {
    context('I click on login and enter my credentials', () => {
        it('I should be logged in and see my profile', async () => {
            const driver = await new Builder().forBrowser('firefox').build();

            try{
            //go to store
            await driver.get('https://magento.softwaretestingboard.com');
            await driver.findElement(By.css('.authorization-link > a:nth-child(1)')).click();


            //Get the form -- wait for input
            await driver.wait(until.elementLocated(By.id('email')), 10000);
            // Send keys
            await driver.findElement(By.id('email')).sendKeys(user);
            await driver.findElement(By.id('pass')).sendKeys(pass);

            //
            await driver.findElement(By.css('#send2')).click();
            await driver.sleep(1000);

            await driver.wait(until.elementLocated(By.css('.action.switch')), 20000);
            await driver.findElement(By.css('.action.switch')).click(); 

            await driver.wait(until.elementLocated(By.css('a[href$="/customer/account/"]')),10000);
            await driver.findElement(By.css('a[href$="/customer/account/"]')).click();

            await driver.wait(until.elementLocated(By.css('.box-information .box-content p')), 10000);
            const information = await driver.findElement(By.css('.box-information .box-content p')).getText();

            console.log(information);

            // Assert
            information.should.contain('Test Testsson');

           
            } finally {
                await driver.quit();
            }
        
        });
    });

});