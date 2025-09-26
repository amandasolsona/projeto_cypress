
export class PaginaLogin {
  paginaInicial() {
    cy.visit('/');
  }

  preencherUsuario(username) {
    cy.get('#user-name').type(username);
  }

  preencherSenha(password) {
    cy.get('#password').type(password);
  }

  tentarLogar() {
    cy.get('#login-button').click();
  }

  validarSucessoLogin() {
    cy.url().should('include', '/inventory.html');
  }

  validarFalhaLogin() {
    cy.get('[data-test="error"]').should('be.visible');
  }
}
