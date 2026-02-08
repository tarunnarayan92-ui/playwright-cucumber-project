@regression
Feature: Footer social links validation

Scenario: Validate Facebook icon in footer
  Given User is logged in
  When User scrolls to footer
  And User clicks Facebook icon
  Then Facebook page should open in new tab