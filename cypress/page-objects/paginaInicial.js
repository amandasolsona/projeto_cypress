
export class PaginaInicial {
  validarPaginaInicial() {
    cy.get('.inventory_list').should('be.visible');
  }

  adicionarItemAoCarrinho(itemName) {
    cy.contains(itemName).parents('.inventory_item').find('.btn_inventory').click();
  }

  removerItemDoCarrinho(itemName) {
    cy.contains('.cart_item', itemName).should('be.visible').find('button').should('contain.text', 'Remove').click();
  }
}
