/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as reservationFuncs from '../pages/createReservationPage'



// Test suite
describe('Testsuite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
       
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Reservation')
    })

    afterEach(()=>{
       // dashboardFuncs.performLogout(cy, 'Login')
    })

     // Test case
     it('Test case 4 - Create a new Reservation', function(){
         
        reservationFuncs.viewReservation(cy)
        reservationFuncs.createNewReservation(cy)
        
    })
})