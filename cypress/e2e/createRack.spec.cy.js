describe("Rack Creation", () => {
  it("creates a rack", () => {
    const email = Cypress.env("LAB_ADMIN_EMAIL");
    const password = Cypress.env("LAB_ADMIN_PASSWORD");
    const baseUrl = Cypress.env("BASE_URL");
    cy.login(email, password);

    cy.visit(`${baseUrl}/lab/racks`);

    // login
    // cy.get('input[name="email"]').type(email);
    // cy.get('input[name="password"]').type(`${password}{enter}`);

    // create a new rack
    cy.get('a[href*="racks"]').click();
    cy.get("#cl-icon-rack-create").click();
    cy.get("div.sc-1tfw9m-2.kAjBSV > label:nth-child(1)").click();
    cy.get('input[name="barcodeId"]').type(
      `${Math.floor(Math.random() * (100000 - 10 + 1) + 10)}{enter}`
    );
    cy.get("section:nth-child(3) > div.sc-1tfw9m-1.iwCpKj > label").click();
    cy.get("#cl-button-continue-toggle-protocol").click();

    // sample 1
    cy.get('input[name="labSampleId"]').type(
      `${Math.floor(Math.random() * (100000 - 10 + 1) + 10)}{enter}`
    );
    cy.get("#cl-field-select-add-sample-analysis > button")
      .contains("Select Analysis")
      .click();
    cy.get("ul").as("analysisList");
    cy.get("@analysisList")
      .find("li")
      .contains("Acinetobacter (4.05 MB)")
      .click();
    cy.get("select").select("10 - 20x");
    cy.get("#cl-lab-wgs-add-rack-sample").click();

    // sample 2
    cy.get('input[name="labSampleId"]').type(
      `${Math.floor(Math.random() * (100000 - 10 + 1) + 10)}{enter}`
    );
    cy.get("#cl-field-select-add-sample-analysis > button")
      .contains("Select Analysis")
      .click();
    cy.get("@analysisList")
      .find("li")
      .contains("Campylobacter (1.73 MB)")
      .click();
    cy.get("select").select("30 - 40x");
    cy.get("#cl-lab-wgs-add-rack-sample").click();

    // sample 3
    cy.get('input[name="labSampleId"]').type(
      `${Math.floor(Math.random() * (100000 - 10 + 1) + 10)}`
    );
    cy.get("#cl-field-select-add-sample-analysis > button")
      .contains("Select Analysis")
      .click();
    cy.get("@analysisList").find("li").contains("Bacillus (5.68 MB)").click();
    cy.get("select").select("30 - 40x");
    cy.get("#cl-lab-wgs-add-rack-sample").click();
    cy.get("#cl-button-continue-toggle-protocol").click();

    // plate preview
    cy.contains("Rack successfully created.").should("be.visible");
    cy.contains("Plate Preview").should("be.visible");
  });
});
