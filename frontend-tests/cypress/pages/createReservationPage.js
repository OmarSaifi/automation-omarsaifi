/// <reference types="cypress" />


// Elements
const goToReservation = ':nth-child(4) > .btn'
const createNewBtn = 'h2 > .btn'
const startField = ':nth-child(1) > input'
const endField = ':nth-child(2) > input'
const clientField = ':nth-child(3) > select'
const floorRoomField = ':nth-child(4) > select'
const billField = ':nth-child(5) > select'
const saveBtn = '.blue'
const backBtn = ':nth-child(3) > .btn'
// Client name
const pClient_1 = 'Jonas Hellman (#1)'
const pClient_2 = 'Mikael Eriksson (#2)'
// Floor, room
const fRoom_1 = 'Floor 1, Room 101'
const fRoom_2 = 'Floor 1, Room 102'
// Bill id
const idBill_1 = 'ID: 1'

// Input values
// yyyy-mm-dd
const start = '2021-11-04'
// yyyy-mm-dd
const end = '2021-11-20'

// actions / functions
function viewReservation(cy){
    cy.get(goToReservation).click()
}

function createNewReservation(cy) {
    cy.get('h2 > div').should("contain", "Reservations")
    cy.get(createNewBtn).click()
    cy.get('h2 > div').should("contain", "New Reservation")
    cy.get(startField).type(start)
    cy.get(endField).type(end)
    cy.get(clientField).select(pClient_1)
    cy.get(floorRoomField).select(fRoom_2)
    cy.get(billField).select(idBill_1)
    cy.get(saveBtn).click()
    cy.get('h2 > div').should("contain", "Reservations")
    cy.get(backBtn).click()
    cy.get('h2').should("contain", "Tester Hotel Overview")
}

// Exports
module.exports = {
    viewReservation,
    createNewReservation
}