import { usuarios }  from "../fixtures/users_test.json"; 

describe('Teste_Login', () => {
  beforeEach (() => {
        cy.visit('https://idsecure.com.br'); 
    })

  usuarios.forEach(usuario => {
        it ('Deve fazer o Login quando os dados do usuário estiverem certo e falhar quando estiver incorreto' , 
            () => {
                 cy.get('input[name="email"]').clear().type(usuario.email);
                 cy.get('input[name="password"]').clear().type(usuario.password); 
                 cy.contains('button','Entrar').click();
                 cy.contains('E-mail ou senha inválidos').should('be.visible');
        })
    })
})
