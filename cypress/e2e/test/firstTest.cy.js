describe('My First Test', () => {
  it('Visits the Cypress docs', () => {
      cy.visit('https://docs.cypress.io')
      cy.wait(2000)
      cy.contains('Get Started').click()
      cy.url().should('include', '/get-started')
  })
})