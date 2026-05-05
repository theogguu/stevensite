/* globals cy */

describe ('Test Card + Modal interaction', () => {
    it ('clicking on a card opens a modal', () => {
      cy.visit ('/');
      cy.get('[data-cy=modal]').should('have.css', 'visibility', 'hidden');
      cy.get('[data-cy=project-card-hoverable-0]').click();
      cy.get('[data-cy=modal]').should('have.css', 'visibility', 'visible');
      cy.get('body').type('{esc}');
    });

    it ('pressing the escape key should close the modal', () => {
      cy.visit ('/');
      cy.get('[data-cy=project-card-hoverable-0]').click();
      cy.get('body').type('{esc}');
      cy.get('[data-cy=modal]').should('have.css', 'visibility', 'hidden');
    });

    it ('clicking outside the modal should close it', () => {
      cy.visit ('/');
      cy.get('[data-cy=project-card-hoverable-0]').click();
      cy.get('[data-cy=modal]').click('topRight');
      cy.get('[data-cy=modal]').should('have.css', 'visibility', 'hidden');
    });
  });