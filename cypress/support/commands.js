import LoginPage from './pages/LoginPage';

Cypress.Commands.add('login', (u, p) => {
  LoginPage.visit();
  LoginPage.fillUser(u);
  LoginPage.fillPass(p);
  LoginPage.submit();
  // assert home‑page visible:
  cy.url().should('eq', Cypress.config().baseUrl + '/');
});

Cypress.Commands.add('logout', () => {
  cy.get('#logout-btn').click();
  cy.url().should('include', '/login');
});
import LoginPage from './pages/LoginPage';

Cypress.Commands.add('login', (u, p) => {
  LoginPage.visit();
  LoginPage.fillUser(u);
  LoginPage.fillPass(p);
  LoginPage.submit();
  // assert home‑page visible:
  cy.url().should('eq', Cypress.config().baseUrl + '/');
});

Cypress.Commands.add('logout', () => {
  cy.get('#logout-btn').click();
  cy.url().should('include', '/login');
});
