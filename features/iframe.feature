@iframe
Feature: Iframe handling

Scenario: Enter text inside iframe
Given User navigates to iframe page
When User enters text "Hello Playwright"
Then Text should appear in iframe