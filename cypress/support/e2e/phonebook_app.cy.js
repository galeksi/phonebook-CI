describe('Phonebook app', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:3001');
    cy.contains('Phonebook');
    cy.contains('Add a new');
  });
});
