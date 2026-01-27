Feature: Login functionality

  @smoke
  Scenario: Successful login to SauceDemo
    Given User opens the browser
    And User navigates to SauceDemo login page
    When User enters valid username and password
    And User clicks on login button
    Then User should see the products page