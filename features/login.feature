Feature: Open browser and visit site

  Scenario: Open example website
    Given I open the browser
    When I navigate to "https://example.com"
    Then I should see the page title "Example Domain"