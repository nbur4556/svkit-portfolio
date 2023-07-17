# SVKit Portfolio

## Table of Contents

<details open="open">
    <ol>
        <li><a href="#Description">Description</a></li>
        <li><a href="#Setup">Setup</a></li>
        <li><a href="#Development">Development</a></li>
        <li><a href="#Technologies">Technologies</a></li>
        <li><a href="#Contact">Contact</a></li>
    </ol>
</details>

## Description

My portfolio displaying projects, and contact details. Each project shown in the portfolio will have a description of what was accomplished, a link to the website, and repository. The portfolio takes advantage of responsive design in order to be usable and visually appealing on a variety of screen sizes and devices.

## Setup

Clone this repository and run `yarn install` to install the dependencies.

## Development

### Testing

This repository supports both end-to-end and visual regression testing through Cypress. Before deploying to production, feature branches must pass each test. Test commands include:

```
yarn test:open
```

Opens the cypress UI. Run and troubleshoot each test individually.

```
yarn test:run
```

Runs all required cypress tests in headless mode.

```
yarn test:snapshot
```

Runs visual regression tests in headless mode. Snapshots are taken of each page and compared to the _base_ snapshots. The test will fail if a feature has caused any visual changes.

When tests fail, _actual_ and _diff_ snapshots are captures so you may compare visual changes. _Actual_ snapshots show how the page currently looks, including any changes made from the feature branch. These are located at `cypress/snapshots/actual/cypress/e2e/regression`. _Diff_ snapshots highlight the differences between the _actual_ and _base_ images. These are located at `cypress/snapshots/diff/cypress/e2e/regression`.

```
yarn test:update
```

This command updates the _base_ snapshots. **Only use this command when a feature branches visual changes are intentional.** Updated images are located at `cypress/snapshots/base/cypress/e2e/regression`.

### Production

Before deploying any feature branch to production you must ensure that:

1. All tests are passing
2. Deployment previews function as intended

A pull request should be made to the _staging_ branch. Once approved, Vercel will build and deploy a staging preview. Ensure that the preview is working as intended before creating a pull request from _staging_ to _main_. Merges to the _main_ branch will be automatically detected by Vercel, and updates will be deployed.

## Technologies

- SvelteKit
- Tailwind
- Cypress

## Contact

Contact me at:

- nbur4556@gmail.com
- https://github.com/nbur4556
