
export default class PaginaInicial {
  validarPaginaInicial() {
    cy.get('.shop-menu > .nav').should('be.visible').contains('Logged in');
  }
}