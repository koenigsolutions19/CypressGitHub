describe('SuiteName', () => {
 it('TestName', () => {
 cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
 cy.get('.nomargin').should('not.be.checked');
  cy.wait(3000)

 cy.get('.nomargin').check();
 cy.get('.nomargin').should('be.checked');
  cy.wait(3000)

 cy.get('.nomargin').uncheck();
 cy.wait(3000)
 })
})
