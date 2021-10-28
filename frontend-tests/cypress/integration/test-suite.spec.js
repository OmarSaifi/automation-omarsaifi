/// <reference types="cypress" />

// Test suite
describe('Test suite', function(){

    // Test case 1 - Login & Logout
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

    // Test case 2 - Create a room
    it('test case 2', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Rooms')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.contains('Create Room')
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > select').select('Double')
        cy.contains('Category')
        cy.get(':nth-child(2) > input').type('1000')
        cy.contains('Number')
        cy.get(':nth-child(3) > input').type('80')
        cy.contains('Floor')
        cy.get('.checkbox').click()
        cy.contains('Available')
        cy.get(':nth-child(5) > input').type('3790')
        cy.contains('Price')
        cy.get(':nth-child(6) > select').select('Sea View')
        cy.contains('Features (Hold Ctrl / ⌘ to select multiple)')
        cy.get('.blue').click()
        cy.contains('Floor 80, Room 1000')
    })


})