@regression
Feature: Menu, Sorting and Cart navigation validation

Scenario: Validate product sorting dropdown (Z to A)
  Given User is logged in
  When User selects "za" sorting option
  Then Products should be sorted accordingly

Scenario: Validate product sorting dropdown (Price high to low)
  Given User is logged in
  When User selects "hilo" sorting option
  Then Products should be sorted accordingly

Scenario: Validate menu logout
  Given User is logged in
  When User opens the menu and clicks logout
  Then User should be redirected to login page

Scenario: Validate continue shopping button
  Given User has product in cart
  When User clicks Continue Shopping
  Then User should return to inventory page