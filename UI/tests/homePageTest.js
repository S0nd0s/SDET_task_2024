module.exports = {
    'Homepage Search Tests': function(browser) {
      const homePage = browser.page.HomePage();
  //TC01
      homePage
        .navigate() // Navigate to the homepage
        .waitForElementVisible('@searchBar', 1000) // Wait for the search bar to be visible
        .setValue('@searchBar', 'dress') // Enter the search term 'dress'
        .click('@searchButton') // Click the search button
        .waitForElementVisible('@searchResults', 1000) // Wait for the search results to be visible
        .assert.containsText('@searchResults', 'dress') // Verify that the search results contain the word 'dress'
        .end(); // End the browser session
    }
  };
  