
describe('Rediffmail', () => {
 
 it('HandlingEditbox', () => {
 
 cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')
 cy.title().should('eq', 'Rediffmail - Free Email for Login with Secure Access')
 
 cy.get('#login1').type('satishgangwani19')
 cy.get('#password').type('Sati1234$')
})

})
