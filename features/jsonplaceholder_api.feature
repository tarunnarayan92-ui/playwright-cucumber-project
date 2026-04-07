Feature: JsonPlaceholder API Testing
  As an SDET
  I want to verify the CRUD operations of JsonPlaceholder API
  So that I can ensure the framework correctly processes all HTTP methods

  @api
  Scenario: GET - Read Post
    When I send a GET request to fetch a post
    Then the API response status code should be 200
    And the response body should contain the post details

  @api
  Scenario: POST - Create Post
    When I send a POST request to create a post
    Then the API response status code should be 201
    And the response body should reflect the created post

  @api
  Scenario: PUT - Update Post
    When I send a PUT request to update a post
    Then the API response status code should be 200
    And the response body should reflect the updated post

  @api
  Scenario: PATCH - Partially Update Post
    When I send a PATCH request to partially update a post
    Then the API response status code should be 200
    And the response body should reflect the partially updated title

  @api
  Scenario: DELETE - Delete Post
    When I send a DELETE request to remove a post
    Then the API response status code should be 200
