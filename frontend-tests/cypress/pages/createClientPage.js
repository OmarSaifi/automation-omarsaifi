/// <reference types="cypress" />


// Elements
const goToClient ='div.block:nth-child(2) > a:nth-child(3)'
const createnNewBtn = 'h2 > .btn'
const nameField = ':nth-child(1) > input'
const emailField = ':nth-child(2) > input'
const telephoneField = ':nth-child(3) > input'
const saveBtn = '.blue'
const backBtn = ':nth-child(3) > .btn'

// Input values
const fullname = 'Omar Saifi'
const email = 'omarsalisaifi@hotmail.com'
const phonenumber = '0732365202'

// actions / functions
function viewClient(cy){
    cy.get(goToClient).click()
}

function createNewClient(cy){
    cy.get(createnNewBtn).click()
    cy.get('h2 > div').should("contain", "New Client")
    cy.get(nameField).type(fullname)
    cy.get(emailField).type(email)
    cy.get(telephoneField).type(phonenumber)
    cy.get(saveBtn).click()
    cy.get('h2 > div').should("contain", "Clients")
    cy.get(backBtn).click()
    cy.get('h2').should("contain", "Tester Hotel Overview")
}

// Exports
module.exports = {
    viewClient,
    createNewClient
}