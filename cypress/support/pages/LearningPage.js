class LearningPage {
  open()                     { cy.visit('/learning'); }
  clickNewInstance()         { cy.get('#new-instance-btn').click(); }
  fillInstanceName(name)     { cy.get('#instance-name').type(name); }
  fillCustomField(selector, value) { cy.get(selector).type(value); }
  submit()                   { cy.get('button[type="submit"]').click(); }
  assertInstanceCreated()    { cy.contains('Instance created').should('be.visible'); }
}
export default new LearningPage();
