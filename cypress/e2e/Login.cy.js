
import { PaginaLogin } from '../page-objects/paginaLogin';

const paginaLogin = new PaginaLogin();

describe('Testes de Login', () => {
  beforeEach(() => {
    paginaLogin.paginaInicial();
  });

  it('devera logar com sucesso com credenciais validas', () => {
    paginaLogin.preencherUsuario('standard_user');
    paginaLogin.preencherSenha('secret_sauce');
    paginaLogin.tentarLogar();
    paginaLogin.validarSucessoLogin();
  });

  it('devera mostrar erro com credenciais invalidas', () => {
    paginaLogin.preencherUsuario('usuario_invalido');
    paginaLogin.preencherSenha('senha_errada');
    paginaLogin.tentarLogar();
    paginaLogin.validarFalhaLogin();
  });
});
