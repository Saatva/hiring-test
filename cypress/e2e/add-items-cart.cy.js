describe('add-items-cart', () => {
  it('user can add items to cart', () => {
    cy.viewport(1980, 1080);
    cy.visit('/');

    cy.findByRole('button', { name: /loom & leaf/i }).click();
    cy.findByRole('button', { name: /zenhaven/i }).click();
    cy.findByTestId('nav-kart-item-count').should('have.text', '0');
    cy.findByRole('button', { name: /saatva classic/i }).click();
    cy.findByRole('button', {
      name: /add to cart/i,
    }).click();
    cy.findByTestId('nav-kart-item-count').should('have.text', '1');
    cy.findByRole('button', { name: /saatva classic/i }).click();
    cy.findByRole('button', {
      name: /add to cart/i,
    }).click();
    cy.findByRole('button', { name: /loom & leaf/i }).click();
    cy.findByRole('button', {
      name: /add to cart/i,
    }).click();
    cy.findByTestId('nav-kart-item-count').should('have.text', '3');
  });
});
