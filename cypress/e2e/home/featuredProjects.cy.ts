import { projects } from "../../../src/stores/projectStore";
import type { Project } from "../../../src/stores/projectStore";

const testSelectProjectData = (project: Project) => {
    cy.get("[data-cy=select-feature-heading]")
        .should("contain.text", project.title);

    cy.get("[data-cy=select-feature-image]")
        .children()
        .should("have.attr", "src", project.image)
        .should("have.attr", "alt", project.imageText);

    cy.get("[data-cy=select-feature-content]")
        .should("contain.text", project.description);

    cy.get("[data-cy=select-website]")
        .should("have.attr", "href", project.websiteLink)
        .should("have.attr", "target", "_blank");

    cy.get("[data-cy=select-repository]")
        .should("have.attr", "href", project.repoLink)
        .should("have.attr", "target", "_blank");
}

describe("featured projects", () => {
    let projectData: Array<Project>;
    let unsubscribe;

    beforeEach(() => {
        cy.visit("http://localhost:3000/#featured")
        unsubscribe = projects.subscribe(async (v) => projectData = v);
    });

    afterEach(() => unsubscribe());

    it("contains details for first project in store", () => {
        testSelectProjectData(projectData[0]);
    });

    it("contains featured project previews with image source and alt text", () => {
        projectData.forEach((project, index: number) => {
            cy.get(`[data-cy=preview-${index}]`)
                .should("be.visible")
            cy.get(`[data-cy=preview-${index}-image]`)
                .children()
                .should("have.attr", "src", project.image)
                .should("have.attr", "alt", project.imageText);
        });
    });

    it("selecting project preview populates project details", () => {
        //TODO: Resolve double click issue
        projectData.forEach((project, index: number) => {
            cy.get(`[data-cy=preview-${index}]`).click().click();
            testSelectProjectData(project);
        });
    });
});