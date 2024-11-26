import SignupPage from '../../page_objects/signUp';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the sign-up page', () => {
  SignupPage.visit();
});

When('I fill in the sign-up form with valid details', () => {
  cy.fixture('user.json').then((user) => {
    SignupPage.fillSignupForm(user.validUser);
  });
});

When('I fill in the sign-up form with an already registered email', () => {
  cy.fixture('user.json').then((user) => {
    SignupPage.fillSignupForm(user.existingUser);
  });
});

When('I submit the form', () => {
  SignupPage.submitForm();
});

Then('I should see a success message indicating account creation', () => {
  SignupPage.verifySuccessMessage();
});

Then('I should see an error message indicating the email is already in use', () => {
  SignupPage.verifyErrorMessage();
});