// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("setAppMode", (appMode) => {
  cy.session([appMode], () => {
    window.sessionStorage.setItem("appMode", appMode);
  });
});

Cypress.Commands.add("login", (email, password, appMode) => {
  cy.session([email, password], () => {
    const apiEndpoint = Cypress.env("API_ENDPOINT");
    cy.request({
      method: "POST",
      url: `${apiEndpoint}/login`,
      body: { email, password, appMode },
    }).then(({ body }) => {
      console.log("body", body);
      window.sessionStorage.setItem("appMode", appMode);
      window.sessionStorage.setItem("token", body.access_token);
    });
  });
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
