/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as clientFuncs from '../pages/createClientPage'



// Test suite
describe('Testsuite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
       
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Client')
    })

    afterEach(()=>{
       // dashboardFuncs.performLogout(cy, 'Login')
    })

     // Test case
     it('Test case 3 - Create a new Client', function(){
         
        clientFuncs.viewClient(cy)
        clientFuncs.createNewClient(cy)
    })
})


