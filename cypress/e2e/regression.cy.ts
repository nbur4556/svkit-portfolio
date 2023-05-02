describe("landing page snapshots", () => {
  beforeEach(() => {
    cy.visit("/");
    //TODO: wait for content to load instead of amount of time
    // cy.wait(500);
    cy.get("[data-cy=nav-bar]").contains("Featured Projects");
  });

  it("full screen desktop", () => {
    cy.viewport(1920, 1080);
    cy.compareSnapshot("landing_page_lg", { capture: "fullPage" });
  });

  it("full screen mobile", () => {
    cy.viewport(720, 1280);
    cy.compareSnapshot("landing_page_sm", { capture: "fullPage" });
  });
});
