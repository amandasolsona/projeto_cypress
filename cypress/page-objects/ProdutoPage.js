
export class ProdutoPage {

  clicarNoMenuProdutos(){
       cy.contains('a', 'Products').click();
  }

  buscarProduto(nome){
    cy.get('#search_product').type(nome)
    cy.get('#submit_search').click()
    cy.get('.productinfo > p').contains(nome)

  }

}
