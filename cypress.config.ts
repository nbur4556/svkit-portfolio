import { defineConfig } from "cypress";

export default defineConfig({
  screenshotsFolder: "./cypress/snapshots/actual",
  trashAssetsBeforeRuns: true,
  env: {
    SNAPSHOT_BASE_DIRECTORY: "./cypress/snapshots/base",
    SNAPSHOT_DIFF_DIRECTORY: "./cypress/snapshots/diff",
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
