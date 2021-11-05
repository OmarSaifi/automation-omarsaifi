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

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })

    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    })
    
    // Test case 1 - With my last commit - This Case 1 does not work because beforeEach and afterEach is included and works.
    //it('Test case 1 - Perform login and logout', function(){
        //indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        //dashboardFuncs.performLogout(cy, 'Login')
    //})

    // Test case 2
    it('Test case 2 - Create a new room', function(){
        //indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        roomFuncs.viewRoom(cy)
        roomFuncs.createNewRoom(cy)
        //dashboardFuncs.performLogout(cy, 'Login')
    })

    // Test case 3
    it('Test case 3 - Create a new Client', function(){
        //indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        clientFuncs.viewClient(cy)
        clientFuncs.createNewClient(cy)
        //dashboardFuncs.performLogout(cy, 'Login')
    })

    // Test case 4
    it('Test case 4 - Create a new Bill', function(){
        //indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        billFuncs.viewBill(cy)
        billFuncs.createNewBill(cy)
        //dashboardFuncs.performLogout(cy, 'Login')
    })

    // Test case 5
    it('Test case 5 - Create a new Reservation', function(){
        //indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        reservationFuncs.viewReservation(cy)
        reservationFuncs.createNewReservation(cy)
        //dashboardFuncs.performLogout(cy, 'Login')
    })
})