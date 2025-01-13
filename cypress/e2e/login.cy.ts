describe('Login Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173'); // Adjust based on your app's route
    });
   
    it('shows error message when inputs are empty', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('Email and Password are required!').should('be.visible');
    });
   
    it('logs in when valid inputs are provided', () => {
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Logged in!');
      });
    });

    //if need to test api calls
    //cy.intercept('POST', '/api/login', { statusCode: 200 }).as('login'); cy.get('button[type="submit"]').click(); cy.wait('@login');
    //alias given to login and waits for it

    //to check responsiveness of the node in any device based on devide number or device name
    //cy.viewport('iphone-6');

    //cypress explore
  });