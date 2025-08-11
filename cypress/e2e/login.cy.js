import {email , password} from "../fixtures/user_test.json"; 

describe('Teste_Login', () => {
  beforeEach (() => {
        cy.visit('https://idsecure.com.br'); 
    })

  it('Deve acessar a conta', () => {  
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.contains('button','Entrar').click();
    cy.location('pathname').should('equal' , '/dashboard')
  })
})
