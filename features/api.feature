@api
Feature: API Testing

Scenario: Get users API
When User calls GET users API
Then Response status should be 200

Scenario: Create user API
When User creates a new user
Then Response status should be 201