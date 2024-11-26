class SignupPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/');
  }

  fillSignupForm(user) {
    cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/create/"]').contains('Create an Account').click();
    cy.get('#firstname').type(user.firstname);
    cy.get('#lastname').type(user.lastname);
    cy.get('#email_address').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('#password-confirmation').type(user.password);
  }

  submitForm() {
    cy.get('button[type="submit"]').click();
  }

  verifySuccessMessage() {
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
  }

  verifyErrorMessage() {
    cy.contains('There is already an account').should('be.visible');
  }
}

export default new SignupPage();