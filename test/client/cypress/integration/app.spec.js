context('App', () => {
  describe('<App/>', () => {
    before(() => {
      cy.visit('http://localhost:3000');
    });
    it('Renders without crashing', () => {
      cy.get('h1').contains('STORD URL Shortener');
    });

    it('Renders a button component', () => {
      cy.get('button').should('have.length', 1);
    });

    it('Renders an input field', () => {
      cy.get('input').should('have.length', 1);
    });
  });

  describe('Shortening URL', () => {
    it('When shorten button is pressed, user should not have success', () => {
      cy.get('button').click();
      cy.get('[id=standard-error-helper-text]').should('have.length', 1);
    });

    it('When invalid URL is used, user should not have success', () => {
      cy.get('input').type('test.com');
      cy.get('button').click();
      cy.get('[id=standard-error-helper-text]').should('have.length', 1);
    });

    it('When user clears input field, error should disappear', () => {
      cy.get('input').clear();
      cy.get('[id=standard-error-helper-text]').should('have.length', 0);
    });

    it('When a valid URL is used, success modal should pop up', () => {
      cy.get('input').type(
        'https://www.stord.com/services-data-science-and-design'
      );
      cy.get('button').click();
      cy.get('[id=successDialog]').should('have.length', 1);
      cy.get('[id=shortURL]').should('have.length', 1);
    });

    it('Modal should disappear when user clicks outside box', () => {
      cy.get('[id=successDialog]').should('have.length', 1);
      cy.get('[id=successDialog').click(0, 0);
      cy.get('[id=successDialog]').should('have.length', 0);
    });

    it('Short URL should generate correctly for given original URL', () => {
      cy.get('input').clear();
      cy.get('input').type(
        'https://www.stord.com/services-data-science-and-design'
      );
      cy.get('button').click();
      cy.get('[id=successDialog]').should('have.length', 1);
      cy.get('[id=shortURL]').should('have.length', 1);
      cy.contains('http://localhost:3000/W-QAgLdXx');
    });
  });
});
