/* globals cy */

describe('Homepage components render on both views', () => {
    it ('should have render more than 2 cards', () => {
        cy.visit('/');
        cy.get('[data-cy=project-card-0]').should('exist');
        cy.get('[data-cy=project-card-1]').should('exist');

        cy.viewport('iphone-6')
        cy.get('[data-cy=project-card-0]').should('exist');
        cy.get('[data-cy=project-card-1]').should('exist');
    });

    it ('should render the intro icons', () => {
        cy.visit('/');
        cy.get('[data-cy=intro-icons]').should('exist');

        cy.viewport('iphone-6')
        cy.get('[data-cy=intro-icons]').should('exist');
    });

    it ('intro icon links works', () => {
        cy.visit('/');
        cy.get('[data-cy=intro-icons]').children().each(($icon) => {
            cy.wrap($icon).find('button').should('have.attr', 'href');
        });

        cy.viewport('iphone-6')
        cy.get('[data-cy=intro-icons]').children().each(($icon) => {
            cy.wrap($icon).find('button').should('have.attr', 'href');
        });
    });

});