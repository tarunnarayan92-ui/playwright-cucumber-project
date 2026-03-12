@tableValidation
Feature: Table validation on Herokuapp

  Scenario: Validate sorting, email format, dues calculation and edit link
    Given User navigates to the tables page
    When User clicks Last Name header to sort ascending
    Then Last Name column should be sorted in ascending order

    When User clicks Last Name header again
    Then Last Name column should be sorted in descending order

    Then All email values should match email format

    When User calculates total dues
    Then Total dues should be "$251.00"

    When User clicks edit for First Name "Jason"
    Then URL should contain "edit"