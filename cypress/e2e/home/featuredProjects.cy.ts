import { Unsubscriber } from "svelte/store";

import { projectStore } from "../../../src/stores/projectStore";
import type { Project } from "../../../src/stores/projectStore";

const testSelectProjectData = (project: Project) => {
  cy.get("[data-cy=select-feature]").should(
    "have.attr",
    "style",
    `background-image:url(${project.image})`
  );

  cy.get("[data-cy=select-feature-heading]").should("contain.text", project.title);
  cy.get("[data-cy=select-feature-content]").should("contain.text", project.description);
};

describe("featured projects", () => {
  let projectData: Array<Project>;
  let unsubscribe: Unsubscriber;

  beforeEach(() => {
    cy.visit("/#featured");
    unsubscribe = projectStore.subscribe(async (v) => (projectData = v));
  });

  afterEach(() => unsubscribe());

  it("contains details for first project in store", () => {
    testSelectProjectData(projectData[0]);
  });
});
