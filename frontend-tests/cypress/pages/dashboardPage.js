/// <reference types="cypress" />

// Elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'


// Actions / functions
function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

// Exports
module.exports = {
    checkTitleOfDashboardPage,
    performLogout
}
