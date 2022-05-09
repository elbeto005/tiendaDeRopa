describe('Login', ()=>{
     
    beforeEach(()=>{
         cy.visit('/');
     })

     it('login with incorrect email', ()=>{

        cy.login('SomeMail','SomePassword');
        cy.fixture('login').then((login)=>{
            cy.get(login.incorrectLoginBanner).should('contain', 'Invalid email address');
        })
        
     })
 })