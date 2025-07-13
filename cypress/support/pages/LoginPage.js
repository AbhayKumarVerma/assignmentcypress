class LoginPage {
  visit()      { cy.visit('/login'); }
  fillUser(u)  { cy.get('#username').type(u); }
  fillPass(p)  { cy.get('#password').type(p); }
  submit()     { cy.get('button[type="submit"]').click(); }
}
export default new LoginPage();
