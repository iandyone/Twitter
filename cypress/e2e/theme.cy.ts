interface ITestAccount {
  name: string;
  surname: string;
  email: string;
  telegram: string;
  password: string;
  passwordNew: string;
  phone: string;
}

describe('Theme test', () => {
  it('theme button should be on the screen', () => {
    cy.visit('http://localhost:5173');

    cy.fixture('account.json').then((data: ITestAccount) => {
      const { email, password } = data;

      cy.get('[data-testid=auth-button-login]').as('login');
      cy.get('@login').should('be.visible');
      cy.get('@login').click();

      cy.get('[data-testid=login-form-email]').as('email');
      cy.get('[data-testid=login-form-pass]').as('pass');
      cy.get('[data-testid=login-form-submit]').as('submit');
      cy.get('@email').should('be.visible');
      cy.get('@pass').should('be.visible');
      cy.get('@submit').should('be.visible');

      cy.get('@email').type(email).should('have.value', email);
      cy.get('@pass').type(password).should('have.value', password);
      cy.get('@submit').click();

      cy.get('[data-testid=theme-switcher]').as('switcher');
      cy.get('[data-testid=theme-toggler]').as('toggler');
      cy.get('[data-testid=feed-page]').as('page');
      cy.get('@switcher').should('be.visible');
      cy.get('@toggler').should('be.visible');
      cy.get('@page').should('be.visible');
    });
  });

  it('theme button should toggle the app theme', () => {
    cy.get('[data-testid=theme-switcher]').as('switcher');
    cy.get('[data-testid=theme-toggler]').as('toggler');
    cy.get('[data-testid=feed-page]').as('page');

    cy.get('@page').should('have.class', 'light');
    cy.get('@switcher').click();
    cy.get('@page').should('have.class', 'dark');
    cy.get('@toggler').click();
    cy.get('@page').should('have.class', 'light');
  });
});
