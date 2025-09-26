
import { PaginaLogin } from '../page-objects/paginaLogin';
import { PaginaInicial } from '../page-objects/paginaInicial';
import { PaginaCarrinho } from '../page-objects/paginaCarrinho';

const paginaLogin = new PaginaLogin();
const paginaInicial = new PaginaInicial();
const paginaCarrinho = new PaginaCarrinho();

describe('Teste do Checkout', () => {
  beforeEach(() => {
    paginaLogin.paginaInicial();
    paginaLogin.preencherUsuario('standard_user');
    paginaLogin.preencherSenha('secret_sauce');
    paginaLogin.tentarLogar();
    paginaInicial.validarPaginaInicial();
  });

  it('devera completar o processo de checkout', () => {
    paginaInicial.adicionarItemAoCarrinho('Sauce Labs Backpack');
    paginaCarrinho.irParaOCarrinho();
    paginaCarrinho.validarItemDoCarrinho('Sauce Labs Backpack');
    paginaCarrinho.irParaCheckout();

    // Preenchendo o formulario de checkout
    cy.get('[data-test="firstName"]').type('Usuario');
    cy.get('[data-test="lastName"]').type('Teste');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Completando a compra
    cy.get('[data-test="finish"]').click();
    cy.contains('Thank you for your order').should('be.visible');
  });
});
