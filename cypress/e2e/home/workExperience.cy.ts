import { experienceStore } from "../../../src/stores/experienceStore";
import type { Experience } from "../../../src/stores/experienceStore";

const getMonthDiff = (end: Date, start: Date) => {
    const yearDiff = end.getFullYear() - start.getFullYear();
    const monthDiff = end.getMonth() - start.getMonth();
    return yearDiff * 12 + monthDiff;
};

describe("work experience", () => {
    let experienceData: Array<Experience>;
    let unsubscribe;

    beforeEach(() => {
        cy.visit("/#experience")
        unsubscribe = experienceStore.subscribe(async (v) => experienceData = v);
    });

    afterEach(() => unsubscribe());

    it("contains entries for work experience", () => {
        experienceData.forEach((experience) => {
            const monthDiff = getMonthDiff(experience.endDate || new Date(), experience.startDate);

            cy.get("[data-cy=work-experience]")
                .should("contain.text", experience.title)
                .should("contain.text", experience.description)
                .should("contain.text", `(${monthDiff}m)`);
        });
    });
});