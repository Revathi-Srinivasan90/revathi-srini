class LoginPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/');
  }

  login(email, password) {
    cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/login/"]').contains('Sign In').click();
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
  }

  clickLoginButton(){
    cy.get('#send2').click();
  }

  verifyDashboard() {
    cy.url().should('include','/customer/account/');
  }

  verifyErrorMessage() {
    cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible');
  }
}

export default new LoginPage();