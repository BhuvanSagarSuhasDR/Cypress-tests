# Getting Started with Cypress

## Integration/e2e folder

Contains UI tests which split by feature/module wise.

## Fixtures folder

Contains UI tests which split by feature/module wise.

## Pages folder

Contains UI tests which split by feature/module wise.

## Support folder

Support/index.js is entry point and commands.js - commands for login and logout functions.

## Utils folder

The Utils folder contains utility files, such as apiRequests.utils.js, for performing API-related actions.

## Configuration file

The cypress.config.js file contains the configuration settings and environment variables (env). 

## package.json

The package.json file in a Cypress project can contain scripts, environment variables, and browser details.

## How to run test

Note: Before running the tests, make sure to add the userName and password in the env section of the cypress.config.js file.

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

- Do not commit env data like user credentials to the repository.
