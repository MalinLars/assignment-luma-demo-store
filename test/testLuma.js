
const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();

/*
   As a customer I want to find a a product 
   that Erin recommends*/


// Test grouping: Search
describe.only('Go to womens t-shirts and find the ones Erin recomends', () => {
    //Test case
    context('I go to women, chose t-shirtas and filter to only show Erins recomendations', () => {
        it('I see all t-shirts recomended by Erin', async () => {
                // Start web browser ---- Här bestämmer vi vilken browser som ska öppnas
                const driver = await new Builder().forBrowser('firefox').build();  
               
                try{
                    // Go to the store
                    await driver.get('https://magento.softwaretestingboard.com/')
                
                    
                    // Go to womans items  
                    await driver.wait(until.elementLocated(By.id('ui-id-4')), 10000);
                    await driver.findElement(By.id('ui-id-4')).click();
                    console.log('wrks1');

                    //select t-shirts
                    await driver.wait(until.elementLocated(By.css('.more.icon')), 10000);
                    await driver.findElement(By.css('.more.icon')).click();
                    console.log('wrks2');

                   // await driver.wait(until.elementLocated(By.css('a[href="http://magento.softwaretestingboard.com/women/bottoms-women/shorts-women.html"]')), 10000);
                    //await driver.findElement(By.css('a[href="http://magento.softwaretestingboard.com/women/bottoms-women/shorts-women.html"]')).click();

                   //go to recomended by Erin

                   var nodeList = await driver.findElements(By.css(".filter-options-title"));

                    for (var i = 0; i < nodeList.length; i++) {
                     if (i === [6]) {
                     await nodeList[i].click();
                     break;
                        }
                    }
                console.log('wrks3');


                
                 
                }catch(error) {
                    console.log(error);
                } //finally {
                   // await driver.quit();

                //}

        });
    });
});
