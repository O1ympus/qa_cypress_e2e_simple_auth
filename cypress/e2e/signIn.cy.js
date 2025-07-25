/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('should login with valid creds', () => {
    cy.loginUser(username, password);

    cy.assertSuccessfulLogin();
  });

  it.skip('should not login with invalid creds', () => {
    const invalidUsername = 'invalid user name';
    const invalidPassword = 'invalid password';

    cy.loginUser(invalidUsername, invalidPassword);

    cy.assertUnsuccessfulLogin();
  });

  it('should logout from the app', () => {
    cy.loginUser(username, password);

    cy.get('.button').click();

    cy.assertSuccessfulLogOut();
  });
});
