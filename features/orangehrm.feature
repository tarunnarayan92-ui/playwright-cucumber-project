@orangehrm
Feature: OrangeHRM functionality testing

  Scenario: Validate links on the login page
    Given User navigates to OrangeHRM login page
    When User clicks on "Forgot your password?"
    And User clicks on OrangeHRM INC link
    And User clicks on LinkedIn icon
    And User clicks on Facebook icon
    And User clicks on Twitter icon
    And User clicks on YouTube icon

  Scenario: Admin dashboard navigation
    Given User navigates to OrangeHRM login page
    When User logs into OrangeHRM with username "Admin" and password "admin123"
    Then User should be navigated to the dashboard
    When User clicks on "Admin" from side menu
    And User clicks on "PIM" from side menu
    And User clicks on "Leave" from side menu
    And User clicks on "Time" from side menu
    And User clicks on "Recruitment" from side menu
    And User clicks on "My Info" from side menu
    And User clicks on "Performance" from side menu
    And User clicks on "Dashboard" from side menu
    And User clicks on "Directory" from side menu
    And User clicks on "Maintenance" from side menu
    And User clicks on "Claim" from side menu
    And User clicks on "Buzz" from side menu
