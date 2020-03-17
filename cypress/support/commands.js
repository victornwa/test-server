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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('loginLocal', () => {
    cy.visit('http://localhost:8080/login')
    cy.get(':nth-child(3) > .col-xs-12 > .form-group > :nth-child(1) > .form-control').type('tbmenu-local')
    cy.get(':nth-child(4) > .col-xs-12 > .form-group > :nth-child(1) > .form-control').type('test')
    cy.get('[data-cy=submit-button]').click()
    cy.get('.sidebar > :nth-child(2) > :nth-child(1) > .section-header').should('have.text', 'Menu 2.0 (Beta)').click()
    cy.get('h2').should('have.text', 'Menu 2.0 (Beta)')
    cy.get('.btn').should('have.text', 'Take me there').click()
    cy.get('.MuiToolbar-root > .MuiTypography-root').should('have.text', 'Sales Categories')
  })