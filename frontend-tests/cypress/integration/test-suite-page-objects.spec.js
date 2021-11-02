/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'


// Test suite
describe(' Test suite', function(){

    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        indexFuncs.checkTitleOfIndexPage(cy)
    })

    
    // Test case
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
        dashboardFuncs.performLogout(cy, 'Login')
    })

})