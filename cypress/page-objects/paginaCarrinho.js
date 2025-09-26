
export class PaginaCarrinho {
  irParaOCarrinho() {
    cy.get('.shopping_cart_link').click();
  }

  validarItemDoCarrinho(itemName) {
    cy.contains('.cart_item', itemName).should('be.visible');
  }

  validarCarrinhoVazio() {
    cy.get('.cart_item').should('not.exist');
  }

  irParaCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}
