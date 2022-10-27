import * as locations from '../selectors/locations';
import mainPage from '../selectors/mainPage'

beforeEach(() => {
  cy.visit('/')
})

describe('Story one', () => {
  // Each property on the hub should have an easy Favorite on/off button indicating that this property has been saved.
  it('Each property on the hub should have an easy Favorite on/off button indicating that this property has been saved.',
  () => {
    cy.get('.bt-teaser-wrapper').should('have.length', 12)
    cy.get('.bt-teaser-wrapper :button').each((item, index, list) => {
      // cy.get(`${item}`).should('exist').and('have.attr', 'aria-checked', 'false')
      //expect(`${item} :button`).to.exist
      // expect(`${item} :button`).have.attr('aria-checked', false)
    })
  })
  
  it.only('Check if favorite property can be saved and used', () => {
    
    cy.get(mainPage.changeFavoriteStatus, {timeout: 6000}).first().should('exist').click();

    //toggle favorite
    cy.get(mainPage.changeFavoriteStatus).first().should('have.attr', 'aria-checked', 'true');
    cy.get(mainPage.btResultsCount).should('have.text', '(1)')
    
    //total saved properties
    cy.get(mainPage.changeFavoriteStatus).eq(1).should('exist').click();
    cy.get(mainPage.btResultsCount).should('have.text', '(2)');

    //When the indicator is clicked the hub should only display saved properties.
    cy.get(mainPage.favoritesPageToggle).should('exist').click({force: true});
    cy.get(mainPage.offerContainer).should('have.length', 2);

    //Unsaving property from favorites view
    cy.get(locations.default.revMaxFavbtn).click();
    cy.get(mainPage.btResultsCount).should('have.length', 1);
    cy.get(mainPage.btResultsCount).should('have.text', '(1)');
    cy.get(locations.revMaxOneDayBtn).click();
    cy.get(mainPage.btResultsCount).should('have.text', '(0)');
    cy.get(mainPage.offerContainer).should('have.length', 0);
    cy.get(mainPage.noFavorites).should('be.visible');

    //going back from favorites
    cy.get(mainPage.favoritesPageToggle).click();
    cy.get(mainPage.offerContainer).each((item, index, list) => {
    cy.get(mainPage.unflaggedFavoriteBtn).should('exist').and('have.attr', 'aria-checked', 'false');
    });
  })
})