Feature: Locator Interaction with Playwright

  @locatorinteraction
  Scenario: Verify Playwright Locators
    Given User opens the browser
    And User navigates to SauceDemo login page
    When User enters valid username and password
    And User clicks on login button
    Then User should see the products page
    When User uses stable Playwright locators on the products page
    Then User should successfully interact with elements using those locators