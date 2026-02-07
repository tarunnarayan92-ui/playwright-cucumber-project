@regression
Feature: Checkout flow

  @smoke
  Scenario: Successful checkout
    Given User has product in cart
    When User completes checkout with valid details
    Then Order confirmation page should be displayed

  @regression
  Scenario: Checkout without first name
    Given User has product in cart
    When User tries checkout without first name
    Then Checkout error should be displayed "Error: First Name is required"