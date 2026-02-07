@smoke @regression
Feature: Login functionality

  @smoke
  Scenario: Successful login with valid credentials
    Given User navigates to SauceDemo login page
    When User logs in with username "standard_user" and password "secret_sauce"
    Then User should land on inventory page

  @regression
  Scenario: Login with invalid password
    Given User navigates to SauceDemo login page
    When User logs in with username "standard_user" and password "wrong_password"
    Then Error message should be displayed "Epic sadface: Username and password do not match any user in this service"

  @regression
  Scenario: Login with empty credentials
    Given User navigates to SauceDemo login page
    When User clicks login without entering credentials
    Then Error message should be displayed "Epic sadface: Username is required"