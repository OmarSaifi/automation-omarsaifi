/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as roomFuncs from '../pages/createRoomPage'



// Test suite
describe('Test Suite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    //afterEach(()=>{
        //dashboardFuncs.performLogout(cy, 'Login')

    //})
    
    // Test case
    it('Test case 1 - Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.performLogout(cy, 'Login')
    })

    it('Test case 2 - Create a new room', function(){
        //roomFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        
            roomFuncs.viewRoom(cy)
            roomFuncs.createNewRoom(cy)
            roomFuncs.assertNewRoom(cy)

    })

})
