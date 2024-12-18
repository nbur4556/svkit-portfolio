import { Unsubscriber } from "svelte/store";

import { experienceStore } from "../../../src/stores/experienceStore";
import type { Experience } from "../../../src/stores/experienceStore";

const getMonthDiff = (end: Date, start: Date) => {
  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();
  return yearDiff * 12 + monthDiff;
};

describe("work experience", () => {
  let experienceData: Array<Experience>;
  let unsubscribe: Unsubscriber;

  beforeEach(() => {
    cy.visit("/#experience");
    unsubscribe = experienceStore.subscribe(async (v) => (experienceData = v));
  });

  afterEach(() => unsubscribe());

  it("contains entries for work experience", () => {
    experienceData.forEach((experience) => {
      const monthDiff = getMonthDiff(experience.endDate || new Date(), experience.startDate);

      cy.get("[data-cy=work-experience]").should("contain.text", experience.title);

      // Description split into array for styling. Must contain all parts of description.
      experience.description.forEach((part) => {
        cy.get("[data-cy=work-experience]").should("contain.text", part);
      });

      if (monthDiff >= 12) {
        cy.get("[data-cy=work-experience]").should(
          "contain.text",
          `(${Math.floor(monthDiff / 12)}y)`
        );
      } else {
        cy.get("[data-cy=work-experience]").should("contain.text", `(${monthDiff}m)`);
      }
    });
  });
});
