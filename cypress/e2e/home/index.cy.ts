describe('landing page', () => {
    it("can navigate to landing page", () => {
        cy.visit("http://localhost:3000/");
    });

    it("landing page content includes required sections", () => {
        cy.visit("http://localhost:3000/");

        cy.get("[data-cy=hero]").should("exist");
        cy.get("[data-cy=nav-bar]").should("exist");
        cy.get("[data-cy=featured-projects]").should("exist");
        cy.get("[data-cy=work-experience]").should("exist");
        cy.get("[data-cy=contact]").should("exist");
    });
});