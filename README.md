# Getting Started with Cypress

## Support folder

Support/index.js is entry point and commands.js - commands for login and logout functions.

## Utils folder

There are apiRequests.utils.js for api creations.

## package.json

package.json file contains environmental and browser details.

## Integration folder

Contains UI tests which split by feature/module wise.

## How to run test

Before running the tests, make sure to add the userName and password in the env section of the cypress.config.js file.

In Test Runner

- Test runner can be opened by - npx cypress open
- Select E2E Testing which is already configured.
- Choose the browser.
- Click on Start E2E Testing.
- Selected browser will be opened.
- Search or select the spec file to run.

In Command line

- It can be run with command - npm run e2eTests

### Notes

- Do not commit env data to the repository.
