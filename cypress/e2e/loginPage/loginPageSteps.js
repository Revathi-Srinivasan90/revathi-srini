import LoginPage from '../../page_objects/loginPage';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
  LoginPage.visit();
});

When('I enter valid login credentials', () => {
  cy.fixture('user.json').then((user) => {
    LoginPage.login(user.validUser.email, user.validUser.password);
  });
});

When('I enter invalid login credentials', () => {
  cy.fixture('user.json').then((user) => {
    LoginPage.login(user.invalidUser.email, user.invalidUser.password);
  });
});

And('I click the login button', () => {
  LoginPage.clickLoginButton();
});

Then('I should be redirected to my account dashboard', () => {
  LoginPage.verifyDashboard();
});

Then('I should see an error message indicating incorrect credentials', () => {
  LoginPage.verifyErrorMessage();
});