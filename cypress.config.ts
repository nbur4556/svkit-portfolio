import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from "cypress-visual-regression/dist/plugin";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder: "./cypress/snapshots/actual",
  trashAssetsBeforeRuns: true,
  env: {
    SNAPSHOT_BASE_DIRECTORY: "./cypress/snapshots/base",
    SNAPSHOT_DIFF_DIRECTORY: "./cypress/snapshots/diff",
    ALWAYS_GENERATE_DIFF: false,
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--window-size=1920,1080')

          return launchOptions
        }
      })
    },
  },
});
