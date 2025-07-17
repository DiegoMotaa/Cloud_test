import { usuarios }  from "../fixtures/users_test.json"; 

describe('Teste_Login', () => {
  beforeEach (() => {
        cy.visit('https://idsecure.com.br'); 
    })

  usuarios.forEach(usuario => {
        it ('Deve preencher os campos do usuário corretamente para cadastrar um novo usuário' , 
            () => {
                 cy.get('input[name="email"]').clear().type(usuario.email);
                 cy.get('input[name="password"]').clear().type(usuario.password); 
                 cy.contains('button','Entrar').click();
                 cy.contains('E-mail ou senha inválidos').should('be.visible');
        })
    })
})
