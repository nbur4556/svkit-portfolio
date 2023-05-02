import { paths } from "../../../src/util/paths";

const navRoutes = [
  { href: paths.featured, linkText: "Featured Projects" },
  { href: paths.experience, linkText: "Work Experience" },
  { href: paths.contact, linkText: "Contact Me" },
];

describe("navigation bar", () => {
  beforeEach(() => cy.visit("/"));

  it("navigation bar displays link text", () => {
    navRoutes.forEach((route) => {
      cy.get("[data-cy=nav-bar]").should("contain.text", route.linkText);
    });
  });

  it("navigation bar contains link to resume", () => {
    cy.get(`[data-cy="My Resume-link"]`)
      .should("have.attr", "target", "_blank")
      .should("have.attr", "href", "/resume.pdf")
      .should("contain.text", "My Resume");
  });

  navRoutes.forEach((route) => {
    it(`nav bar link ${route.linkText.toLowerCase()} navigates to expected url`, () => {
      cy.get(`[data-cy="${route.linkText}-link"]`).click();
      cy.url().should("contain", route.href);
    });
  });

  it("navigation bar collapses on scroll", () => {
    const collapsed: string = "w-1/12";
    const notCollapsed: string = "w-1/5";
    cy.get("[data-cy=nav-bar]").as("navBar");

    cy.scrollTo(0, 500);
    cy.get("@navBar").should("have.class", collapsed);
    cy.get("@navBar").should("not.have.class", notCollapsed);

    cy.scrollTo(0, 0);
    cy.get("@navBar").should("have.class", notCollapsed);
    cy.get("@navBar").should("not.have.class", collapsed);
  });
});
