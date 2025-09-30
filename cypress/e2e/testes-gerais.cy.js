import PageInicial from "../page-objects/paginaInicial.js"
import { PaginaCarrinho } from '../page-objects/paginaCarrinho.js';
import { ProdutoPage } from "../page-objects/ProdutoPage.js";


const pageInicial = new PageInicial()
const paginaCarrinho = new PaginaCarrinho();
const pageProdutos = new ProdutoPage()



describe('Funcionalidade: Adicionando produto ao carrinho', () => {
  beforeEach(() => {
    cy.visit("login")
    cy.fixture("users.json").then((user) => {
      cy.login(user.validUser.email, user.validUser.password)
    })

  });

  it("Validar se o usuário está logado", () => {
    pageInicial.validarPaginaInicial()

  })

  it("Adiconar item no carrinho", () => {
    cy.fixture("produtos.json").then((produto) => {
      paginaCarrinho.adicionarItemCarrinho(produto.produto1)
      paginaCarrinho.validarMensagemAoAdiconarProduto("Your product has been added to cart.")

    })
  })


});

describe("Funcionalidade: Busca por produto", () => {
  beforeEach(() => {
    cy.visit("/")
    pageProdutos.clicarNoMenuProdutos()

  });

  it("Buscando pelo produto", () => {
    cy.fixture("produtos.json").then((produto) => {
      pageProdutos.buscarProduto(produto.produto2)

    })

  })

});

describe('Funcionalidade: Remoção de produto do carrinho', () => {
  beforeEach(() => {
    //Realizando login
    cy.visit("login")
    cy.fixture("users.json").then((user) => {
    cy.login(user.validUser.email, user.validUser.password)

    })

    //Adicionando produto ao carrinho 

    cy.fixture("produtos.json").then((produto) => {
      paginaCarrinho.adicionarItemCarrinho(produto.produto1)
      paginaCarrinho.validarMensagemAoAdiconarProduto("Your product has been added to cart.")
    })

  });

  it("Deve remover o produto do carrinho", () => {
    cy.visit("/view_cart")
    paginaCarrinho.removerProdutoCarrinho()
    paginaCarrinho.validarProdutoRemovido()


  })

})


