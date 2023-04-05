describe('Phonebook', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:3001');
    cy.contains('Phonebook');
  });
  it('Names are loaded', function () {
    cy.visit('http://localhost:3001');
    cy.contains('Aleksi Rendel');
  });
});
