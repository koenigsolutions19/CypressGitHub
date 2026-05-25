
describe('Rediffmail', () => {
 
 it('HandlingEditbox', () => {
 cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')
 cy.title().should('eq', 'Rediffmail - Free Email for Login with Secure Access')
 
 cy.get('#login1').type('satishgangwani19')
 cy.xpath('//*[@id="password"]').type('Sati1234$')
 
 //cy.wait(3000)
 cy.get('#login1').clear().type('satishgangwani19')
 cy.get('#login1').should('have.value', 'satishgangwani19')
 cy.get('#login1').should('be.enabled')
 
 cy.get('#login1').invoke('val').then((text) => {
    cy.log(text)
    })

/*
const editBox = cy.get('#login1');
editBox.type('satishgangwani19')
editBox.should('have.value', 'satishgangwani19')
editBox.should('be.enabled')
editBox.clear()
*/
})
})
