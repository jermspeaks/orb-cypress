import { generateLabSampleId } from "../../support/generate";

describe("Racks", () => {
  describe("Rack Creation", () => {
    it("creates a rack", () => {
      const email = Cypress.env("CDX_LAB_ADMIN_EMAIL");
      const password = Cypress.env("CDX_LAB_ADMIN_PASSWORD");
      const baseUrl = Cypress.env("CDX_BASE_URL");
      const appMode = "WGS";

      cy.login(email, password, appMode);

      cy.visit(`${baseUrl}/lab/racks`);

      // create a new rack
      cy.get('a[href*="racks"]').click();
      cy.get("#cl-icon-rack-create").click();
      cy.contains(/Select Assay Category/).should("be.visible");
      cy.get(
        `input[name="taxonomySubset"]#cl-field-taxonomy-subset-selection-0`
      ).click();
      cy.get('input[name="barcodeId"]').type(
        `${Math.floor(Math.random() * (100000 - 10 + 1) + 10)}{enter}`
      );
      cy.contains(/Protocol Selection/).should("be.visible");
      cy.get(`input[name="selectableProtocolId"]#cl-field-protocol-selection-0`).click();
      cy.get("#cl-button-continue-toggle-protocol").click();

      // sample 1
      cy.get('input[name="labSampleId"]').type(
        `${generateLabSampleId()}{enter}`
      );
      cy.get("#cl-field-select-add-sample-analysis > button")
        .contains("Select Analysis")
        .click();
      cy.get("ul").as("analysisList");
      cy.get("@analysisList")
        .find("li")
        .contains(/Acinetobacter/)
        .click();
      cy.get("select").select("10 - 20x");
      cy.get("#cl-lab-wgs-add-rack-sample").click();

      // sample 2
      cy.get('input[name="labSampleId"]').type(
        `${generateLabSampleId()}{enter}`
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
      cy.contains(/Rack successfully created/).should("be.visible");
      cy.contains(/Plate Preview/).should("be.visible");
    });
  });
});
