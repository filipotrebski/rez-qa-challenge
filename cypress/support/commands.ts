/// <reference types="cypress" />
import filters from '../selectors/filters';
import mainPage from '../selectors/mainPage';

Cypress.Commands.add('addBedroom', (number) => {
    for(let i=0; i<number; i++){
        cy.get(filters.bedroomIncreaseBtn).click();
    }
});

Cypress.Commands.add('minusBedrooms', (number) => {
    for(let i=0; i<number; i++){
        cy.get(filters.bedroomDecreaseBtn).click();
    }
});

Cypress.Commands.add('addBathroom', (number) => {
    for(let i=0; i<number; i++){
        cy.get(filters.bathroomsIncreseBtn).click();
    }
});

Cypress.Commands.add('minusBathrooms', (number) => {
    for(let i=0; i<number; i++){
        cy.get(filters.bathroomsDecreaseBtn).click();
    }
});

Cypress.Commands.add('dissmissCookieBanner', () => {
    cy.get(mainPage.cookieBanner).click();
});

Cypress.Commands.add('openFilter', () => {
    cy.get(mainPage.filterBtn).click({force: true});
    cy.get(filters.filtersModal).should('be.visible');
})

declare global { 
    namespace Cypress { 
        interface Chainable {
            addBedroom(number: Number):Chainable<void>;
            minusBedrooms(number: Number):Chainable<void>;
            addBathroom(number: Number):Chainable<void>;
            minusBathrooms(number: Number):Chainable<void>;
            dissmissCookieBanner():Chainable<void>;
            openFilter():Chainable<void>
        }
    }
}
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }