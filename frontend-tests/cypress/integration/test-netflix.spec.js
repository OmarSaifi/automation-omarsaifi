/// <reference types="cypress" />


// Test suite
describe('Test Suite - Netflix', function(){

    it('Test case 1 - Kolla att filmer finns i "Min lista"', function(){
        cy.visit("https://www.netflix.com/se/login")
        cy.get('.nfEmailPhoneControls > .input_id > .placeLabel').type('')
        cy.get('.nfPasswordControls > .input_id > .placeLabel').type('')
        cy.get('.login-remember-me-label-text').click()
        cy.get('.login-form > .btn').click()
        cy.contains('Vem')
        cy.get(':nth-child(2) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon').click()
        // Min lista
        cy.get('.tabbed-primary-navigation > :nth-child(6) > a').click()
        //cy.contains('Min lista')
        cy.wait(7000)
        cy.get('.account-dropdown-button').click()
        cy.get(':nth-child(3) > .sub-menu-link').click()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get('.btn-accept').click()
        cy.get('.authLinks').click()
        cy.contains('Logga in')
    })

    it('Test case 2 - Kollar i under kategori film att navigering A-Ö fungerar', function(){
        cy.visit("https://www.netflix.com/se/login")
        cy.get('.nfEmailPhoneControls > .input_id > .placeLabel').type('')
        cy.get('.nfPasswordControls > .input_id > .placeLabel').type('')
        cy.get('.login-remember-me-label-text').click()
        cy.get('.login-form > .btn').click()
        cy.contains('Vem')
        cy.get(':nth-child(2) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon').click()
        cy.contains('Hem')
        // Kategori Filmer
        cy.get('.tabbed-primary-navigation > :nth-child(4) > a').click()
        cy.contains('Filmer')
        cy.get('.aro-grid-toggle').click()
        cy.contains('Filmer')
        cy.get('.sortGallery > .nfDropDown > .label').click()
        // Sortering A-Ö
        cy.get(':nth-child(3) > .sub-menu-link').click()
        cy.contains('Filmer') 
        cy.wait(7000)
        cy.get('.account-dropdown-button').click()
        cy.get(':nth-child(3) > .sub-menu-link').click()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get('.btn-accept').click()
        cy.get('.authLinks').click()
        cy.contains('Logga in')
    })

    it('Test case 3 - Kollar i under kategori film att navigering Ö-A fungerar', function(){
        cy.visit("https://www.netflix.com/se/login")
        cy.get('.nfEmailPhoneControls > .input_id > .placeLabel').type('')
        cy.get('.nfPasswordControls > .input_id > .placeLabel').type('')
        cy.get('.login-remember-me-label-text').click()
        cy.get('.login-form > .btn').click()
        cy.contains('Vem')
        cy.get(':nth-child(2) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon').click()
        cy.contains('Hem')
        // Kategori Filmer
        cy.get('.tabbed-primary-navigation > :nth-child(4) > a').click()
        cy.contains('Filmer')
        cy.get('.aro-grid-toggle').click()
        cy.contains('Filmer')
        cy.get('.sortGallery > .nfDropDown > .label').click()
        // Sortering Ö-A
        cy.get(':nth-child(4) > .sub-menu-link').click()
        cy.contains('Filmer') 
        cy.wait(7000)
        cy.get('.account-dropdown-button').click()
        cy.get(':nth-child(3) > .sub-menu-link').click()
        cy.get('.btn').click()
        cy.wait(3000)
        cy.get('.btn-accept').click()
        cy.get('.authLinks').click()
        cy.contains('Logga in')
    })

/*
    it('Test case 4 - Skapa en profil', function(){
        cy.visit("https://www.netflix.com/se/login")
        ////cy.get('.authLinks').click({force: true})
        cy.get('.nfEmailPhoneControls > .input_id > .placeLabel').type('')
        cy.get('.nfPasswordControls > .input_id > .placeLabel').type('')
        cy.get('.login-remember-me-label-text').click()
        cy.get('.login-form > .btn').click()
        cy.contains('Vem')
        cy.get('.addProfileIcon').click()
        cy.get('#add-profile-name').type('Test')
        cy.get('.preferred-action > span').click()
        cy.contains('Test')
*/
        // Skapa och ta bort en profil/användare med koden ovan.

        //cy.get(':nth-child(5) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon').click()
        //cy.get('.fixed-button-container > .submitBtnContainer > .nf-btn').click()
        //cy.get('.instructions > .submitBtnContainer > .nf-btn').click()
        //cy.get('.account-dropdown-button').select()
        //cy.get('.sub-menu-item.profile-link > .sub-menu-link').click()
        //cy.get(':nth-child(5) > :nth-child(1) > .profile-link > .avatar-wrapper > .svg-edit-overlay').click()
        //cy.get('[data-uia="profile-delete-button"]').click()
        //cy.get(':nth-child(4) > span').click()
        ////cy.get('.profile-button').click()

    //})

/*
    it('Test case 5 - Ta bort en profil', function(){

        cy.visit("https://www.netflix.com/se/login")
        cy.get('.nfEmailPhoneControls > .input_id > .placeLabel').type('')
        cy.get('.nfPasswordControls > .input_id > .placeLabel').type('')
        cy.get('.login-remember-me-label-text').click()
        cy.get('.login-form > .btn').click()
        cy.contains('Vem')
        cy.get('.profile-button').click()
        cy.get(':nth-child(5) > :nth-child(1) > .profile-link > .avatar-wrapper > .svg-edit-overlay').click()
        cy.get('[data-uia="profile-delete-button"]').click()
        cy.get(':nth-child(4) > span').click()

    })
  */

    /*
    it('Test case 6 - Lägg till en valfri film i "Min Lista" från: Fortsätt titta som "Användare"', function(){
        cy.visit("https://www.netflix.com/se/login")
        cy.get('.nfEmailPhoneControls > .input_id > .placeLabel').type('')
        cy.get('.nfPasswordControls > .input_id > .placeLabel').type('')
        cy.get('.login-remember-me-label-text').click()
        cy.get('.login-form > .btn').click()
        cy.contains('Vem')
        cy.get(':nth-child(2) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon').click()
        // Kategori Filmer
        cy.get('.tabbed-primary-navigation > :nth-child(4) > a').click()
        // assertan
        cy.url().should("include", "/genre/34399")
        
        //*[@id="title-card-6-1"]/div[1]/a/div[1]/img
        //https://occ-0-318-38.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABecJNpdIiDOqCLeSGzG8gQ5j-zYq_XCs4RBugOzptDEFP0iLJ9sFNT_E0d1xHfpNPPUKNpS_OxGWrbd3Zu19199tk1I.webp?r=4a0

        cy.wait(5000)
        cy.visit('Fortsätt titta som')

        // Lägga till en valfri film i min lista från Fortsätt titta som "Användare"
        
        
        //*[@id="title-card-6-0"]/div[1]/a/div[1]/img
        //cy.get('#title-card-6-0 > .ptrack-content > .slider-refocus > .boxart-size-16x9 > .boxart-image').click()

        //cy.contains('Hindispråkiga filmer')
        //cy.get('#title-card-11-2 > .ptrack-content > .slider-refocus > .boxart-size-16x9 > .boxart-image')
        //cy.get('.ptrack-content > .color-supplementary > .ltr-1ksxkn9 > .small > .Hawkins-Icon').click()

    })
*/

})
