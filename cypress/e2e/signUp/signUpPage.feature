Feature: Sign up functionality

  Scenario: Successfully create a new account
    Given I am on the sign-up page
    When I fill in the sign-up form with valid details
    And I submit the form
    Then I should see a success message indicating account creation

  Scenario: Attempt to sign up with an already registered email
    Given I am on the sign-up page
    When I fill in the sign-up form with an already registered email
    And I submit the form
    Then I should see an error message indicating the email is already in use