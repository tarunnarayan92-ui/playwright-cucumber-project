@regression
Feature: Checkout using scrollIntoViewIfNeeded

  Scenario: User scrolls to product, adds to cart and completes checkout
    Given User navigates to SauceDemo login page
    When User logs in with username "standard_user" and password "secret_sauce"
    Then User should land on inventory page

    When User scrolls to Sauce Labs Onesie and clicks it
    And User adds the product to cart
    And User opens the cart
    And User proceeds to checkout
    And User enters checkout details and continues
    Then Order should be placed successfully