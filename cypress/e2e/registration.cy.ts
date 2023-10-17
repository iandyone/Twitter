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
  it('Should to sign up after passing all required data', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-testid=auth-button-email]').click();

    cy.get('[data-testid=signup-input-email]').as('email');
    cy.get('[data-testid=signup-input-email-error]').as('emailError');
    cy.get('[data-testid=signup-input-phone]').as('phone');
    cy.get('[data-testid=signup-input-phone-error]').as('phoneError');
    cy.get('[data-testid=signup-input-password]').as('password');
    cy.get('[data-testid=signup-input-password-error]').as('passwordError');
    cy.get('[data-testid=signup-button]').as('submit');

    cy.get('[data-testid=signup-select-month]').as('month');
    cy.get('[data-testid=signup-select-day]').as('day');
    cy.get('[data-testid=signup-select-year]').as('year');

    cy.fixture('account.json').then((data: ITestAccount) => {
      const { email, phone, password } = data;
      const currentDate = new Date();
      const userEmail = email + currentDate.getTime();
      const userAge = currentDate.getFullYear() - 18;

      cy.get('@email').clear().type(userEmail).should('have.value', userEmail);
      cy.get('@phone').clear().type(phone).should('have.value', `+375${phone}`);
      cy.get('@submit').click();
      cy.get('@password').clear().type(password).should('have.value', password);

      cy.get('@submit').click();

      cy.get('@month').click();
      cy.get('[data-testid=select-option-september]').click();
      cy.get('@day').click();
      cy.get('[data-testid=select-option-13]').click();
      cy.get('@year').click();
      cy.get(`[data-testid=select-option-${userAge}]`).click();

      cy.get('@submit').click();
      cy.get('[data-testid=feed-page]').should('be.visible');
      cy.get('[data-testid=account-button-logout]').click();
    });
  });

  it('Should to not signed up when form has empty fields', () => {
    cy.get('[data-testid=auth-button-email]').click();

    cy.get('[data-testid=signup-input-email]').as('email');
    cy.get('[data-testid=signup-input-email-error]').as('emailError');
    cy.get('[data-testid=signup-input-phone]').as('phone');
    cy.get('[data-testid=signup-input-phone-error]').as('phoneError');
    cy.get('[data-testid=signup-input-password]').as('password');
    cy.get('[data-testid=signup-input-password-error]').as('passwordError');
    cy.get('[data-testid=signup-button]').as('submit');

    cy.get('[data-testid=signup-select-month]').as('month');
    cy.get('[data-testid=signup-select-day]').as('day');
    cy.get('[data-testid=signup-select-year]').as('year');

    cy.fixture('account.json').then((data: ITestAccount) => {
      const { email, phone, password } = data;
      const currentDate = new Date();
      const userEmail = email + currentDate.getTime();

      cy.get('@email').clear().type(userEmail).should('have.value', userEmail);
      cy.get('@submit').click();
      cy.get('@email').clear();

      cy.get('@phone').clear().type(phone).should('have.value', `+375${phone}`);
      cy.get('@submit').click();
      cy.get('@phone').clear();

      cy.get('@password').clear().type(password).should('have.value', password);
      cy.get('@submit').click();
      cy.get('@password').clear();
    });
  });
});
