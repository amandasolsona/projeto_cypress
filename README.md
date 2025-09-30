
# Projeto Cypress

Este projeto foi configurado para executar testes automatizados usando Cypress no site [Automation Exercise](https://www.automationexercise.com/).

## Instalação

1. Certifique-se de ter o Node.js instalado.
2. Instale as dependências com:

   ```bash
   npm install
   ```

## Comandos Disponíveis

- `npm run test`: Executa os testes no modo headless.
- `npm run open`: Abre a interface do Cypress.
- `npm run report`: Gera e abre o relatório Allure.

## Estrutura do Projeto

- `cypress/fixtures`: Massa de testes.
- `cypress/integration/tests`: Testes automatizados.
- `cypress/page-objects`: Arquitetura Page Object.
- `cypress/support`: Arquivos de suporte e comandos customizados.

## Configuração do Relatório Allure

Instale o Allure com:

```bash
npm install -g allure-commandline --save-dev
```

Certifique-se de que o Allure está configurado corretamente para gerar relatórios.
