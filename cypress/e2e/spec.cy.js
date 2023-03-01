describe("it should navigate to the login page", () => {
  beforeEach(() => {
    cy.visit("http://wgs.app.dev.clearlabs.com/login");

    cy.get('input[name="email"]').type("century.marlone@clearlabs.com");
    cy.get('input[name="password"]').type("test1234{enter}");
  });

  it("opens the filter", () => {
    cy.get("#cl-button-menu-toggle-filter").click();
  });
  it("selects sample stage - analyzing", () => {
    cy.get("#cl-button-menu-toggle-filter").click();
    cy.get("#cl-field-checkbox-sample-filter-stage-IN_RUN").click();
    cy.get("#cl-button-submit-apply-filters").click();
  });
  it("selects sample stage - complete", () => {
    cy.get("#cl-button-menu-toggle-filter").click();
    cy.get("#cl-field-checkbox-sample-filter-stage-COMPLETE").click();
    cy.get("#cl-button-submit-apply-filters").click();
  });
});
