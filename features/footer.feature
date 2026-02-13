@footer
Feature: Footer validation

Scenario: Validate footer is visible
  Given User is logged in
  When User scrolls to footer
  Then Footer section should be visible

Scenario: Validate copyright text in footer
  Given User is logged in
  When User scrolls to footer
  Then Footer should display copyright text

Scenario: Validate Facebook icon in footer
  Given User is logged in
  When User scrolls to footer
  And User clicks Facebook icon
  Then Facebook page should open in new tab

Scenario: Validate Twitter icon in footer
  Given User is logged in
  When User scrolls to footer
  And User clicks Twitter icon
  Then Twitter page should open in new tab

Scenario: Validate LinkedIn icon in footer
  Given User is logged in
  When User scrolls to footer
  And User clicks LinkedIn icon
  Then LinkedIn page should open in new tab

Scenario: Validate Privacy Policy text in footer
  Given User is logged in
  When User scrolls to footer
  Then Privacy Policy text should be visible

Scenario: Validate all social icons are clickable
  Given User is logged in
  When User scrolls to footer
  Then All social media icons should be visible and clickable