/// <reference types="cypress" />


// Elements
const goToRoom = ':nth-child(1) > .btn'

const createNewButton = 'h2 > .btn'
const titleOfRoomPage = 'Testers Hotel'
const assertRoom = 'New Room'
const categoryField = ':nth-child(1) > select'
const numberField = ':nth-child(2) > input'
const floorField = ':nth-child(3) > input'
const availableBox = '.checkbox'
const priceField = ':nth-child(5) > input'
const features = ':nth-child(6) > select'

const featBalcony = 'Balcony'
const featEnsuite = 'Ensuite'
const featSeaView = 'Sea View'
const featPenthouse = 'Penthouse'

const saveButton = '.blue'

// input values
const category = 'Double'
const roomNumber = '1000'
const floorNumber = '80'
const price = '3790'

// Faker
// faker.random.number({min: 1, Max: 100})
// let roomNumber = faker.random.number(500)
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
}


function assertNewRoom(cy){
cy.contains(assertRoom)
cy.title().should('eq',assertRoom)
}

// Exports
module.exports = {
    viewRoom,
    createNewRoom,
    assertNewRoom
}