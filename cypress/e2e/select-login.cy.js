import {email , password} from "../fixtures/user_test.json"

describe('Teste_Select_Login', () => {
  beforeEach (() => {
    cy.visit('https://idsecure.com.br'); 
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.contains('button','Entrar').click();
    })

  it('Depois de acessar a conta, deve escolher a base que gostaria de acessar', () => {  
    cy.get('select').select('90870297000139 - TESTE BUG 5')
    cy.contains('button','Entrar').click();

    })
})

