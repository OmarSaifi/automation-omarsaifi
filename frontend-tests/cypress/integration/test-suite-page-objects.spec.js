/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as roomFuncs from '../pages/createRoomPage'
import * as clientFuncs from '../pages/createClientPage'
import * as billFuncs from '../pages/createBillPage'
import * as reservationFuncs from '../pages/createReservationPage'


// Test suite
describe('Test Suite', function(){

    before(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    afterEach(()=>{
        
    })
    
    // Test case 1
    it('Test case 1 - Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.performLogout(cy, 'Login')
    })

    // Test case 2
    it('Test case 2 - Create a new room', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        roomFuncs.viewRoom(cy)
        roomFuncs.createNewRoom(cy)
    })

    // Test case 3
    it('Test case 3 - Create a new Client', function(){
        clientFuncs.viewClient(cy)
        clientFuncs.createNewClient(cy)
    })

    // Test case 4
    it('Test case 4 - Create a new Bill', function(){
        billFuncs.viewBill(cy)
        billFuncs.createNewBill(cy)
    })

    // Test case 5
    it('Test case 5 - Create a new Reservation', function(){
        reservationFuncs.viewReservation(cy)
        reservationFuncs.createNewReservation(cy)
        dashboardFuncs.performLogout(cy, 'Login')
    })

})
