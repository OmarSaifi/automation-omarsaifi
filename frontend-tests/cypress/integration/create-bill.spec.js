/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as billFuncs from '../pages/createBillPage'


// Test suite
describe('Testsuite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
       
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Bill')
    })

    afterEach(()=>{
       // dashboardFuncs.performLogout(cy, 'Login')
    })

     // Test case
     it('Test case 4 - Create a new Bill', function(){
         
        billFuncs.viewBill(cy)
        billFuncs.createNewBill(cy)
    })
})