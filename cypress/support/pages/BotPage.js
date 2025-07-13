class BotPage {
  open()                { cy.visit('/bots'); }
  clickNewBot()         { cy.get('#new-bot-btn').click(); }
  typeBotName(name)     { cy.get('#bot-name').type(name); }
  sendTestMessage(msg)  { cy.get('#bot-input').type(msg + '{enter}'); }
  assertBotCreated()    { cy.contains('Bot created successfully').should('be.visible'); }
}
export default new BotPage();
