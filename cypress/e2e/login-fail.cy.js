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

        it ('Deve detectar a mensagem de obrigatoriedade de preenchimento do campo' , 
            () => { 
                cy.contains('button','Entrar').click();
                cy.contains('Insira seu e-mail').should('be.visible');
                cy.contains('Informe sua Senha').should('be.visible');
    })
        it ('Deve detectar a mensagem de erro no e-mail quando colocado em formato incorreto ( sem o @ )' , 
            () => {
                cy.get('input[name="email"]').type('Testedeemail'); 
                cy.contains('button','Entrar').click();
                cy.contains('Email não é valido').should('be.visible');
      })
})