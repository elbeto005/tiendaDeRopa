describe('Search Elements', ()=>{
    
    beforeEach(()=>{
        cy.visit('/')// la barra indica que se use lo que contenga la variable "baseUrl" 
        //que esta en el archivo cypress.json en la carpeta cypress
    })

    it('Search for elements with multiple results', ()=>{
        
        cy.search('dress');
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress');
        })
    })

    it('Search for elements with no reults', ()=>{
        
       cy.search('query');
       cy.fixture('searchResult').then((searchResult)=>{
           cy.get(searchResult.alert).should('contain','No results were found for your search');
       })
    })

    it('Search for elements with special code', ()=>{
        cy.readFile('cypress/support/txt/searchInTxt.txt').then((text)=>{
            cy.search(text);
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    })

})