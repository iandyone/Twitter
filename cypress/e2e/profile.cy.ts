interface ITestAccount {
  name: string;
  surname: string;
  email: string;
  telegram: string;
  password: string;
  passwordNew: string;
  phone: string;
}

const genders = {
  male: 'male',
  female: 'female',
};

describe('Profile test', () => {
  it('Profie should be visible on the pfofile page', () => {
    cy.visit('http://localhost:5173');

    cy.fixture('account.json').then((data: ITestAccount) => {
      const { email, password } = data;

      cy.get('[data-testid=auth-button-login]').as('login');
      cy.get('@login').should('be.visible');
      cy.get('@login').click();

      cy.get('[data-testid=login-form-email]').as('email');
      cy.get('[data-testid=login-form-password]').as('pass');
      cy.get('[data-testid=login-form-submit]').as('submit');
      cy.get('@email').should('be.visible');
      cy.get('@pass').should('be.visible');
      cy.get('@submit').should('be.visible');

      cy.get('@email').type(email).should('have.value', email);
      cy.get('@pass').type(password).should('have.value', password);
      cy.get('@submit').click();

      cy.get('[data-testid=route-button-profile]').should('be.visible').click();

      cy.get('[data-testid=profile]').as('profile');
      cy.get('@profile').should('be.visible');

      cy.get('[data-testid=profile-edit-button]').as('edit');
      cy.get('[data-testid=profile-avatar]').as('avatar');
      cy.get('[data-testid=profile-user-name]').as('name');
      cy.get('[data-testid=profile-user-email]').as('email');
      cy.get('[data-testid=profile-user-subs]').as('subs');

      cy.get('[data-testid=profile-user-email]').should('be.visible');
      cy.get('[data-testid=profile-avatar]').should('be.visible');
      cy.get('[data-testid=profile-user-name]').should('be.visible');
      cy.get('[data-testid=profile-user-email]').should('be.visible');
      cy.get('[data-testid=profile-user-subs]').should('be.visible');
    });
  });

  it('Should provide the profile edit form', () => {
    cy.get('[data-testid=profile-edit-button]').click();
    cy.get('[data-testid=profile-popup]').should('be.visible');
  });

  it('Should edit the profile data', () => {
    cy.fixture('account.json').then((data: ITestAccount) => {
      const { name, surname, email, telegram } = data;
      const { female, male } = genders;

      cy.get('[data-testid=profile-input-name]').as('inputName');
      cy.get('[data-testid=profile-input-surname]').as('inputSurname');
      cy.get('[data-testid=profile-input-password').as('inputPass');
      cy.get('[data-testid=profile-input-telegram]').as('inputTg');
      cy.get('[data-testid=profile-select-gender]').as('selectGender');
      cy.get('[data-testid=profile-button-save]').as('save');

      cy.get('@inputName').should('be.visible');
      cy.get('@inputSurname').should('be.visible');
      cy.get('@inputPass').should('be.visible');
      cy.get('@inputTg').should('be.visible');
      cy.get('@selectGender').should('be.visible');
      cy.get('@save').should('be.visible');

      cy.get('@inputName').clear().type(name).should('have.value', name);
      cy.get('@inputSurname').clear().type(surname).should('have.value', surname);
      cy.get('@inputTg').clear().type(telegram).should('have.value', telegram);

      cy.get('@selectGender').click();
      cy.get(`[data-testid=select-option-${female}]`).click();
      cy.get('@selectGender').should('have.text', `${female}`);

      cy.get('@selectGender').click();
      cy.get(`[data-testid=select-option-${male}]`).click();
      cy.get('@selectGender').should('have.text', `${male}`);
      cy.get('@save').click();

      cy.get('[data-testid=profile-user-name]').should('have.text', `${name} ${surname}`);
      cy.get('[data-testid=profile-user-email]').should('have.text', `${email}`);
      cy.get('[data-testid=profile-user-telegram]').should('have.text', `@${telegram}`);
      cy.get('[data-testid=account-name]').should('have.text', `${name} ${surname}`);
      cy.get('[data-testid=account-email]').should('have.text', `${email}`);
    });
  });

  it('Should update user password', () => {
    cy.fixture('account.json').then((data: ITestAccount) => {
      const { email, password, passwordNew } = data;

      cy.get('[data-testid=profile-edit-button]').as('edit');
      cy.get('[data-testid=account-button-logout]').as('logout');

      cy.get('@edit').click();
      cy.get('[data-testid=profile-input-password').as('inputPass');
      cy.get('[data-testid=profile-button-save]').as('save');
      cy.get('@inputPass').clear().type(passwordNew).should('have.value', passwordNew);
      cy.get('@save').click();
      cy.get('@logout').click();

      cy.get('[data-testid=auth-button-login]').as('login');
      cy.get('@login').click();

      cy.get('[data-testid=login-form-email]').as('email');
      cy.get('[data-testid=login-form-password]').as('pass');
      cy.get('[data-testid=login-form-submit]').as('submit');
      cy.get('@email').type(email).should('have.value', email);
      cy.get('@pass').type(passwordNew).should('have.value', passwordNew);
      cy.get('@submit').click();

      cy.get('[data-testid=feed-page]').as('page');
      cy.get('@page').should('be.visible');

      cy.get('[data-testid=route-button-profile]').should('be.visible').click();
      cy.get('@edit').click();
      cy.get('@inputPass').clear().type(password).should('have.value', password);
      cy.get('@save').click();
    });
  });
});
