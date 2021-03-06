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
        cy.contains('Login')
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
        cy.get(':nth-child(3) > input').type('80')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('3790')
        cy.get(':nth-child(6) > select').select('Sea View')
        cy.contains('Features (Hold Ctrl / ⌘ to select multiple)')
        cy.get('.blue').click()
        cy.contains('Floor 80, Room 1000')
        cy.get(':nth-child(3) > .btn').click()
        cy.title().should('include', 'Hotel')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    // Test case 3 - Create a client
    it('test case 3', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('View')
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get('h2 > .btn').click()
        cy.contains('New Client')
        cy.get(':nth-child(1) > input').type('Omar Saifi')
        cy.get(':nth-child(2) > input').type('omaralisaifi@hotmail.com')
        cy.get(':nth-child(3) > input').type('0732365202')
        cy.get('.blue').click()
        cy.contains('Clients')
        cy.get(':nth-child(3) > .btn').click()
        cy.title().should('include', 'Tester')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

        // Test case 4 - Create a Bill
        it('test case 4', function(){
            cy.visit('http://localhost:3000')
            cy.title().should('include', 'Hotel')
            cy.contains('Login')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.contains('Bills')
            cy.get(':nth-child(3) > .btn').click()
            cy.contains('Bills')
            cy.get('h2 > .btn').click()
            cy.contains('New Bill')
            cy.get('input').type('7995')
            cy.get('.checkbox').click()
            cy.get('.blue').click()
            cy.contains('Bills')
            cy.get(':nth-child(3) > .btn').click()
            cy.title().should('include', 'Tester')
            cy.get('.user > .btn').click()
            cy.contains('Login')
        })

        // Test case 5 - Create a Reservation
        it('test case 5', function(){
            cy.visit('http://localhost:3000')
            cy.title().should('include', 'Hotel')
            cy.contains('Login')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.contains('Reservations')
            cy.get(':nth-child(4) > .btn').click()
            cy.contains('Create Reservation')
            cy.get('h2 > .btn').click()
            cy.get(':nth-child(1) > input').type('2021-12-23')
            cy.get(':nth-child(2) > input').type('2022-01-04')
            cy.get(':nth-child(3) > select').select('Mikael Eriksson (#2)')
            cy.get(':nth-child(4) > select').select('Floor 1, Room 101')
            cy.get(':nth-child(5) > select').select('ID: 1')
            cy.get('.blue').click()
            cy.contains('Reservations')
            cy.get(':nth-child(3) > .btn').click()
            cy.title().should('include', 'Hotel')
            cy.get('.user > .btn').click()
            cy.contains('Login')
        }) 
})