/// <reference types="cypress" />


// Elements
const goToRoom = ':nth-child(1) > .btn'
const createNewButton = 'h2 > .btn'
const categoryField = ':nth-child(1) > select'
const numberField = ':nth-child(2) > input'
const floorField = ':nth-child(3) > input'
const availableBox = '.checkbox'
const priceField = ':nth-child(5) > input'
const features = ':nth-child(6) > select'

// Features
const featBalcony = 'Balcony'
const featEnsuite = 'Ensuite'
const featSeaView = 'Sea View'
const featPenthouse = 'Penthouse'

// Buttons
const saveButton = '.blue'
const backButton = ':nth-child(3) > .btn'

// Input values
const category = 'Double'
const roomNumber = '1000'
const floorNumber = '80'
const price = '3790'

// Faker
// faker.random.number({min: 1, Max: 100})
// let roomNumber = faker.random.number(1000)
// let floorNumber = faker.random.number(100)
// faker.random.number(4)


// actions / functions
function viewRoom(cy){
    cy.get(goToRoom).click()
}

function createNewRoom(cy){
    cy.get(createNewButton).click()
    cy.get(categoryField).select(category)
    cy.get(numberField).type(roomNumber)
    cy.get(floorField).type(floorNumber)
    cy.get(availableBox).click()
    cy.get(priceField).type(price)
    cy.get(features).select(featSeaView)
    cy.get(saveButton).click()
    cy.get('h2').should("contain", "Rooms")
    cy.get(backButton).click()
    cy.get('h2').should("contain", "Tester Hotel Overview")
}

// Exports
module.exports = {
    viewRoom,
    createNewRoom
}