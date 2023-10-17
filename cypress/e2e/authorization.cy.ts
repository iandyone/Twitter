interface ITestAccount {
  name: string;
  surname: string;
  email: string;
  telegram: string;
  password: string;
  passwordNew: string;
  phone: string;
}

describe('Registration tests', () => {
  it('Should to login after passing  user data', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-testid=auth-button-login]').click();

    cy.fixture('account.json').then((data: ITestAccount) => {
      const { email, password } = data;

      cy.get('[data-testid=login-form-email]').as('email');
      cy.get('[data-testid=login-form-password]').as('password');
      cy.get('[data-testid=login-form-submit]').as('submit');

      cy.get('@email').clear().type(email).should('have.value', email);
      cy.get('@password').clear().type(password).should('have.value', password);

      cy.get('@submit').click();

      cy.get('[data-testid=feed-page]').as('page');
      cy.get('[data-testid=account-button-logout]').as('logout');
      cy.get('@page').should('be.visible');
      cy.get('@logout').should('be.visible').click();
    });
  });

  it('Should to login after passing all required data', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-testid=auth-button-login]').click();

    cy.fixture('account.json').then((data: ITestAccount) => {
      const { email, password } = data;

      cy.get('[data-testid=login-form-email]').as('email');
      cy.get('[data-testid=login-form-password]').as('password');
      cy.get('[data-testid=login-form-submit]').as('submit');

      cy.get('@email').clear().type(email).should('have.value', email);
      cy.get('@submit').click();
      cy.get('@email').clear();

      cy.get('@password').clear().type(password).should('have.value', password);
      cy.get('@submit').click();

      cy.get('@email').clear().type(email).should('have.value', email);
      cy.get('@password').clear().type(password).should('have.value', password);
      cy.get('@submit').click();

      cy.get('[data-testid=feed-page]').as('page');
      cy.get('[data-testid=account-button-logout]').as('logout');
      cy.get('@page').should('be.visible');
      cy.get('@logout').should('be.visible').click();
    });
  });

  it('Should to login only after passing the valid user email', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-testid=auth-button-login]').click();

    cy.fixture('account.json').then((data: ITestAccount) => {
      const { email, password } = data;

      const invalidEmail = email + '_invalid';

      cy.get('[data-testid=login-form-email]').as('email');
      cy.get('[data-testid=login-form-password]').as('password');
      cy.get('[data-testid=login-form-submit]').as('submit');

      cy.get('@email').clear().type(invalidEmail).should('have.value', invalidEmail);
      cy.get('@password').clear().type(password).should('have.value', password);
      cy.get('@submit').click();

      cy.get('@email').clear().type(email).should('have.value', email);
      cy.get('@submit').click();

      cy.get('[data-testid=feed-page]').as('page');
      cy.get('[data-testid=account-button-logout]').as('logout');
      cy.get('@page').should('be.visible');
      cy.get('@logout').should('be.visible').click();
    });
  });

  it('Should to login only after passing the valid user pass', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-testid=auth-button-login]').click();

    cy.fixture('account.json').then((data: ITestAccount) => {
      const { email, password } = data;

      const invalidPassword = password + '_password';

      cy.get('[data-testid=login-form-email]').as('email');
      cy.get('[data-testid=login-form-password]').as('password');
      cy.get('[data-testid=login-form-submit]').as('submit');

      cy.get('@email').clear().type(email).should('have.value', email);
      cy.get('@password').clear().type(invalidPassword).should('have.value', invalidPassword);
      cy.get('@submit').click();

      cy.get('@password').clear().type(password).should('have.value', password);
      cy.get('@submit').click();

      cy.get('[data-testid=feed-page]').as('page');
      cy.get('[data-testid=account-button-logout]').as('logout');
      cy.get('@page').should('be.visible');
      cy.get('@logout').should('be.visible').click();
    });
  });
});
