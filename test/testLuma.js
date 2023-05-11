
const {Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();

/*
   As a customer I want to find a product 
   that Erin recommends
*/

// Test grouping: Search
describe.only('Go to shorts and find the items Erin recomends', () => {
    //Test case
    context('I go to shorts, and filters to only show Erins recomendations', () => {
        it('I see shorts recomended by Erin', async () => {
                // Start web browser ---- Här bestämmer vi vilken browser som ska öppnas
                const driver = await new Builder().forBrowser('firefox').build();   

                // Search for a product ---- steg för att söka produkten
                try{
                    //Move to magento site ---- Välj vilken hemsida som testas
                    await driver.get('https://magento.softwaretestingboard.com/')
                    
                    // Get the search input ----  
                    await driver.wait(until.elementLocated(By.id('ui-id-4')), 10000);
                    await driver.findElement(By.id('ui-id-4')).click();

                    await driver.wait(until.elementLocated(By.className('.item'[11])), 10000);
                    await driver.findElement(By.className('.item'[11])).click();

                    

                 
                }catch(error) {
                    console.log(error);
                } //finally {
                   // await driver.quit();

                //}

        });
    });
});