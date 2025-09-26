
import { PaginaLogin } from '../page-objects/paginaLogin';
import { PaginaInicial } from '../page-objects/paginaInicial';
import { PaginaCarrinho } from '../page-objects/paginaCarrinho';

const paginaLogin = new PaginaLogin();
const paginaInicial = new PaginaInicial();
const paginaCarrinho = new PaginaCarrinho();

describe('Testes do Carrinho', () => {
  beforeEach(() => {
    paginaLogin.paginaInicial();
    paginaLogin.preencherUsuario('standard_user');
    paginaLogin.preencherSenha('secret_sauce');
    paginaLogin.tentarLogar();
    paginaInicial.validarPaginaInicial();
  });

  it('devera adicionar item para o carrinho', () => {
    paginaInicial.adicionarItemAoCarrinho('Sauce Labs Backpack');
    paginaCarrinho.irParaOCarrinho();
    paginaCarrinho.validarItemDoCarrinho('Sauce Labs Backpack');
  });

  it('devera remover item do carrinho', () => {
    paginaInicial.adicionarItemAoCarrinho('Sauce Labs Backpack');
    paginaCarrinho.irParaOCarrinho();
    paginaCarrinho.validarItemDoCarrinho('Sauce Labs Backpack');
    paginaInicial.removerItemDoCarrinho('Sauce Labs Backpack');
    paginaCarrinho.irParaOCarrinho();
    paginaCarrinho.validarCarrinhoVazio();
  });
});
