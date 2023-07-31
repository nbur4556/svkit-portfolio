import { paths } from "../../../src/util/paths";

const navRoutes = [
  { href: paths.featured, linkText: "_Featured Projects" },
  { href: paths.experience, linkText: "_Work Experience" },
  { href: paths.contact, linkText: "_Contact Me" },
];

describe("navigation bar", () => {
  beforeEach(() => cy.visit("/"));

  it("navigation bar displays link text", () => {
    navRoutes.forEach((route) => {
      cy.get("[data-cy=nav-bar]").should("contain.text", route.linkText);
    });
  });

  it("navigation bar contains link to resume", () => {
    cy.get(`[data-cy="_My Resume-link"]`)
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

  it("navigation bar shrinks on scroll", () => {
    const collapsed: string = "my-xs";
    const notCollapsed: string = "my-40px";
    cy.get("[data-cy=nav-bar-list]").as("navBarList");
    cy.get("[data-cy=nav-bar-cta]").as("navBarCta");

    cy.scrollTo(0, 500);
    cy.get("@navBarList").should("have.class", collapsed);
    cy.get("@navBarCta").should("have.class", collapsed);
    cy.get("@navBarList").should("not.have.class", notCollapsed);
    cy.get("@navBarCta").should("not.have.class", notCollapsed);

    cy.scrollTo(0, 0);
    cy.get("@navBarList").should("have.class", notCollapsed);
    cy.get("@navBarCta").should("have.class", notCollapsed);
    cy.get("@navBarList").should("not.have.class", collapsed);
    cy.get("@navBarCta").should("not.have.class", collapsed);
  });
});
