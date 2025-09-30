
export class PaginaCarrinho {
  irParaOCarrinho() {
    cy.get('.shopping_cart_link').click();
  }

  adicionarItemCarrinho(itemName) {
    
   cy.contains('div.single-products',itemName)
  .find('.productinfo > .btn')
  .click();

  }

  validarMensagemAoAdiconarProduto(mensagem){
    cy.get(".modal-content").contains(mensagem)
  }


  removerProdutoCarrinho(){
    cy.get('.cart_quantity_delete').should('be.visible').click()
  }


  validarProdutoRemovido(){
    cy.get("#empty_cart").contains("Cart is empty! Click here to buy products.")
  }



}
