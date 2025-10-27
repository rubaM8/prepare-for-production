describe("navigation function", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });
    it("navigates to about page", () => {
        cy.get('[data-cy="about"]').click();
        cy.get('[data-cy="about_page"]').should("exist");
        cy.get('[data-cy="about_page"]').should("be.visible");
    });
    it("navigates to card set page", () => {
        cy.get('[data-cy="cardSet"]').click();
        cy.get('[data-cy="study-set-header"]').should("exist");
        cy.get('[data-cy="study-set-header"]').should("be.visible");
    });
    it("navigates to home page", () => {
        cy.get('[data-cy="home"]').click();
        cy.get('[data-cy="home_header"]').should("exist");
        cy.get('[data-cy="home_header"]').should("be.visible");
    });
});
