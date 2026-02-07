@regression
Feature: Inventory and cart operations

  @smoke
  Scenario: Add products to cart
    Given User is logged in
    When User adds 2 products to cart
    Then Cart badge should show 2

  @regression
  Scenario: Remove product from cart
    Given User is logged in
    When User adds 1 products to cart
    And User removes the product
    Then Cart badge should not be visible