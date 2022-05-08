describe('Search Elements', ()=>{
    
    beforeEach(()=>{
        cy.visit('/')// la barra indica que se use lo que contenga la variable "baseUrl" 
        //que esta en el archivo cypress.json en la carpeta cypress
    })

    it('Search for elements with multiple results', ()=>{
        
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })

        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress');
        })
    })

    it('Search for elements with no reults', ()=>{
        
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('querty');
            cy.get(index.searchButton).click();
        })

        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    })

})