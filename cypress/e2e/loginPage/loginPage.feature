Feature: Log in functionality

  Scenario: Successfully log in with valid credentials
    Given I am on the login page
    When I enter valid login credentials
    And I click the login button
    Then I should be redirected to my account dashboard

  Scenario: Attempt to log in with invalid credentials
    Given I am on the login page
    When I enter invalid login credentials
    And I click the login button
    Then I should see an error message indicating incorrect credentials