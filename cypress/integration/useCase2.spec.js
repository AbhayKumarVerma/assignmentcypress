import testData from '../fixtures/testData.json';
import LearningPage from '../support/pages/LearningPage';

describe('Use Case 2 – Create Learning Instance', () => {
  before(() => {
    cy.login(testData.login.username, testData.login.password);
  });

  it('should create an instance with user-defined fields', () => {
    LearningPage.open();
    LearningPage.clickNewInstance();
    LearningPage.fillInstanceName(testData.useCase2.instanceName);
    LearningPage.fillCustomField('#field1', testData.useCase2.customField1);
    LearningPage.fillCustomField('#field2', testData.useCase2.customField2);
    LearningPage.submit();
    LearningPage.assertInstanceCreated();
  });

  after(() => {
    cy.logout();
  });
});
