/// <reference types="Cypress" />


describe("todo check", function () {
    it("home page", function () {
        cy.visit("http://localhost:3000/")
        // cy.focused().should("have.class", "input-task")
        cy.focused().should("have.class", "input-task")
    })

    it("type in input box", function () {
        cy.visit("http://localhost:3000/")
        cy.get('.input-task').type("Learn Testing").should('have.value', "Learn Testing")
    })
 
})