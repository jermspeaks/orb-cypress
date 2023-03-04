describe("Login", () => {
  it("logs in a lab admin user", () => {
    const baseUrl = Cypress.env("CDX_BASE_URL");
    const email = Cypress.env("CDX_LAB_ADMIN_EMAIL");
    const password = Cypress.env("CDX_LAB_ADMIN_PASSWORD");

    cy.setAppMode("WGS");
    cy.visit(`${baseUrl}/login`);

    // login
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(`${password}{enter}`);

    // Default samples page
    cy.contains("Samples").should("be.visible");
  });
});
