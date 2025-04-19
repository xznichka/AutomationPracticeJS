describe('Sauce Demo End-to-End Tests', () => {
  it('should load the homepage', () => {
    cy.visit('/'); // Visits the base URL defined in cypress.config.js
    cy.contains('Swag Labs'); // Verifies the text on the homepage
  });
});
