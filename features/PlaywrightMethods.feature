Feature: Playwright Methods

  Scenario: User Verify Playwright Methods
    Given User navigates to SauceDemo login page
    When User logs in with username "standard_user" and password "secret_sauce"
    Then User should land on inventory page
    When User clicks Sauce Labs Bolt T-Shirt using getByText
    And User clicks Add to cart using getByRole
    Then User should see the cart page