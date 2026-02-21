@alerts
Feature: Alerts Handling

  Scenario: Handle simple alert
    Given User navigates to alerts practice page
    When User clicks Simple Alert and accepts it

  Scenario: Accept confirmation alert
    Given User navigates to alerts practice page
    When User clicks Confirmation Alert and accepts it
    Then Confirmation result should display "You pressed OK!"

  Scenario: Dismiss confirmation alert
    Given User navigates to alerts practice page
    When User clicks Confirmation Alert and dismisses it
    Then Confirmation result should display "You pressed Cancel!"

  Scenario: Handle prompt alert
    Given User navigates to alerts practice page
    When User clicks Prompt Alert and enters "Tarun"
    Then Prompt result should display "Hello Tarun! How are you today?"