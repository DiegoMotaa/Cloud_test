describe('Teste_Login', () => {
  beforeEach (() => {
        cy.visit('https://idsecure.com.br'); 
    })

    it('Verifica o documento da "Licença de Uso" ', () => {
        cy.contains('Licença de Uso')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://idsecure.com.br/media/eula-en.pdf');
    });

    it('Verifica o documento da "Política de Privacidade" ', () => {
        cy.contains('Política de Privacidade')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://idsecure.com.br/media/us_privacy_policy.htm');
    });


})