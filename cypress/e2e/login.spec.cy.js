describe("it should login to the application and create a rack", () => {
  it("creates a rack", () => {
    const baseUrl = Cypress.env("BASE_URL");
    const email = Cypress.env("LAB_ADMIN_EMAIL");
    const password = Cypress.env("LAB_ADMIN_PASSWORD");

    cy.visit(`${baseUrl}/login`);

    // login
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(`${password}{enter}`);

    // Default samples page
    cy.contains("Samples").should("be.visible");
  });
});
