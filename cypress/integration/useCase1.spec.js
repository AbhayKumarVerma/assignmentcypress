import testData from '../fixtures/testData.json';
import BotPage from '../support/pages/BotPage';

describe('Use Case 1 – Create message box task', () => {
  before(() => {
    cy.login(testData.login.username, testData.login.password);
  });

  it('should create a bot and assert creation', () => {
    BotPage.open();
    BotPage.clickNewBot();
    BotPage.typeBotName(testData.useCase1.botName);
    BotPage.sendTestMessage(testData.useCase1.message);
    BotPage.assertBotCreated();
  });

  after(() => {
    cy.logout();
  });
});
