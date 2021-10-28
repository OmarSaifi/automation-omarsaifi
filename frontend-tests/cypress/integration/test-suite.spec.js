/// <reference types="cypress" />

// Test suite
describe('Test suite', function(){

    // Test case 1
    it('test case 1', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.contains('Rooms')
        cy.get('.user > .btn').click()
    })
    


})