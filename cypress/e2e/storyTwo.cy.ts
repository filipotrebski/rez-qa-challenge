import { any } from 'cypress/types/bluebird';
import filters from '../selectors/filters';
import mainPage from '../selectors/mainPage';

describe('story two', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1000, 1000);
    });

    it('filters', () => {

        //clicking filters button open filter
        cy.get(mainPage.filterBtn).click({force: true});
        cy.get(filters.filtersModal).should('be.visible').and('have.attr', 'aria-modal', 'true');

        //bathrooms/bedrooms increase 
        cy.get(filters.bedroomIncreaseBtn).click();
        cy.get(filters.bedroomNumber, {timeout: 6000}).should('have.text', '1');
        cy.get(filters.bathroomsIncreseBtn).should('be.visible').click();
        cy.get(filters.bathroomsNumber).should('have.text', '1')
        
        //can not decrese below 0
        cy.get(filters.bedroomDecreaseBtn).click();
        cy.get(filters.bedroomDecreaseBtn).click();
        cy.get(filters.bathroomsDecreaseBtn).click();
        cy.get(filters.bathroomsDecreaseBtn).click();
        cy.get(filters.bathroomsNumber, {timeout: 6000}).should('have.text', '0');
        cy.get(filters.bedroomNumber).should('have.text', '0');
        //
    });

    it('The Clear Filters button should reset both filters to their lower value.', () => {
        
        //open filter modal
        cy.get(mainPage.filterBtn).click({force: true});
        
        //increase bedroom and bathroom filter nnumber
        cy.addBathroom(1);
        cy.addBedroom(1);

        //check values
        cy.get(filters.bedroomNumber).should('have.text', '1');
        cy.get(filters.bathroomsNumber).should('have.text', '1');
        cy.dissmissCookieBanner();

        //Act - clear values
        cy.get(filters.clearFiltersBtn).should('exist').click();
        
        //Assert - 
        cy.get(filters.bedroomNumber).should('have.text', '0');
        cy.get(filters.bathroomsNumber).should('have.text', '0');
    });

    it.only('The View Results button should close the Filter Results page and display properties on the hub meeting the cryteria', () => {
        cy.openFilter();
        cy.addBathroom(4);
        cy.addBedroom(3);
        cy.intercept({
            method: 'GET',
            url: 'https://blueprint.rezfusion.com/graphql*'
        }).as('result')
        cy.get(filters.bedroomIncreaseBtn).click();
        cy.wait('@result').then((interception) => {
            expect(interception.response?.statusCode).eq(200);
        })
        cy.contains('View results').click();
        cy.get(mainPage.offerContainer).should('be.visible').and('have.length', 7);
    })
})