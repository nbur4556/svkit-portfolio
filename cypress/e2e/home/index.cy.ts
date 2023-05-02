describe("landing page", () => {
  it("can navigate to landing page", () => {
    cy.visit("/");
  });

  it("landing page content includes required sections", () => {
    cy.visit("/");

    cy.get("[data-cy=hero]").should("exist");
    cy.get("[data-cy=nav-bar]").should("exist");
    cy.get("[data-cy=select-feature]").should("exist");
    cy.get("[data-cy=preview-feature]").should("exist");
    cy.get("[data-cy=work-experience]").should("exist");
    cy.get("[data-cy=contact]").should("exist");
  });
});
