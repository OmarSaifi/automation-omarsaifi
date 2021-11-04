/// <reference types="cypress" />


// Elements
const goToBill = ':nth-child(3) > .btn'
const createNewButton = 'h2 > .btn'
const valueField = 'input'
const paidBox = '.checkbox'
const saveButton = '.blue'
const backButton = ':nth-child(3) > .btn'

// Input values
const value = '2000'

// actions / functions
function viewBill(cy){
    cy.get(goToBill).click()
}

function createNewBill(cy){
    cy.get('h2 > div').should("contain", "Bills")
    cy.get(createNewButton).click()
    cy.get('h2 > div').should("contain", "New Bill")
    cy.get(valueField).type(value)
    cy.get(paidBox).click()
    cy.get(saveButton).click()
    cy.get('h2 > div').should("contain", "Bills")
    cy.get(backButton).click()
    cy.get('h2').should("contain", "Tester Hotel Overview")
}

// Exports
module.exports = {
    viewBill,
    createNewBill
}