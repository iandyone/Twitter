const postText = 'Сypress tweet';

describe('Tweets test', () => {
  it('Tweet area should be visible on the feed page', () => {
    cy.visit('http://localhost:5173');
    cy.get('[data-testid=auth-button-login]').as('login');
    cy.get('@login').should('be.visible');
    cy.get('@login').click();

    cy.get('[data-testid=login-form-email]').as('email');
    cy.get('[data-testid=login-form-pass]').as('pass');
    cy.get('[data-testid=login-form-submit]').as('submit');
    cy.get('@email').should('be.visible');
    cy.get('@pass').should('be.visible');
    cy.get('@submit').should('be.visible');

    cy.get('@email').type('cypress@cy.io');
    cy.get('@pass').type('cypress173');
    cy.get('@submit').click();

    cy.get('[data-testid=tweet-area]').as('area');
    cy.get('[data-testid=tweet-upload-media-label]').as('label');
    cy.get('[data-testid=tweet-upload-media-button]').as('media');
    cy.get('[data-testid=tweet-submit-button]').as('submit');

    cy.get('@area').should('be.visible');
    cy.get('@label').should('be.visible');
    cy.get('@submit').should('be.visible');
  });

  it('Tweet area should be visible on the profile page', () => {
    cy.get('[data-testid=route-button-profile]').should('be.visible').click();
    cy.get('[data-testid=profile-page]').should('be.visible');

    cy.get('[data-testid=tweet-area]').as('area');
    cy.get('@area').should('be.visible');
  });

  it('Tweet area should be visible on the tweet popup', () => {
    cy.get('[data-testid=tweet-area]').as('area');
    cy.get('[data-testid=tweet-popup-button]').as('tweet');

    cy.get('@tweet').should('be.visible').click();

    cy.get('[data-testid=tweet-popup]').as('modal');
    cy.get('@modal').should('be.visible');

    cy.get('[data-testid=tweet-area]').should('have.length', 2);
  });

  it('Should send tweet', () => {
    cy.get('[data-testid=tweet-input]').as('input');
    cy.get('[data-testid=tweet-submit-button]').as('submit');

    cy.get('@input').eq(1).type(`${postText}`);
    cy.get('@submit').eq(1).click();
    cy.get('[data-testid=route-button-home]').click();
  });

  it('Should be able to like the post', () => {
    cy.get('[data-testid=like-button]').eq(0).as('like');
    cy.get('@like').should('be.visible').click();

    cy.get('[data-testid=like-counter]').eq(0).as('counter');
    cy.get('@counter').should('be.visible').should('have.text', 1);
  });

  it('Should be able to remove the post', () => {
    cy.get('[data-testid=post-remove-button]').eq(0).as('remove');
    cy.get('@remove').should('be.visible').click();

    cy.get('[data-testid=post]').eq(0).as('post');
    cy.get('@post').should('not.have.text', `${postText}`);
  });

  it('Should attach a file to the post', () => {
    cy.get('[data-testid=tweet-area]').as('area');
    cy.get('[data-testid=tweet-input]').as('input');
    cy.get('[data-testid=tweet-upload-media-button]').as('media');

    cy.fixture('example.jpg').then((fileContent) => {
      cy.get('@media').attachFile({
        fileContent: fileContent,
        fileName: 'example.jpg',
        mimeType: 'image/jpg',
      });
    });

    cy.get('[data-testid=tweet-filename]').as('filename');
    cy.get('[data-testid=tweet-filename-remove-button]').as('remove');

    cy.get('@filename').should('be.visible').should('have.text', 'example.jpg');
    cy.get('@remove').should('be.visible');

    cy.get('@input').type(`${postText}`);
    cy.get('[data-testid=tweet-submit-button]').click();
    cy.get('[data-testid=post-media]').should('be.visible');

    cy.get('[data-testid=post-remove-button]').eq(0).click();
  });
});
