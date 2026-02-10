@table
Feature: Table validations

Scenario: Validate static web table and print data
  Given User navigates to table practice page
  When User scrolls to book table
  And User checks row and column count
  And User prints full table data
  Then Table should contain book "Learn Selenium"