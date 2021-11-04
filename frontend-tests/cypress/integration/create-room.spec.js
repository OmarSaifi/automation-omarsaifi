/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as roomFuncs from '../pages/createRoomPage'



// Test suite
describe('Testsuite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
       
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Rooms')
        //roomFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })
    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    })
    
    
    // Test case
    it('Test case 2 - Create a new room', function(){
        
        roomFuncs.viewRoom(cy)
        roomFuncs.createNewRoom(cy)
        roomFuncs.assertNewRoom(cy)
    })

})