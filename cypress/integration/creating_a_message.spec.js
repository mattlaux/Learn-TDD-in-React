describe('Creating a message', () => {
    it('Displays the message in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-cy=messageInput]').type('Test Message');

        cy.get('.button').click();

        cy.get('[data-cy="messageInput"]').should('have.value', '');

        cy.contains('New MessageTest Message');
    });
});