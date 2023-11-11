# social-media-client

[![Code Review](https://github.com/mathiasg12/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/mathiasg12/social-media-client/actions/workflows/gpt.yml) [![Cypress-E2E-Testing](https://github.com/mathiasg12/social-media-client/actions/workflows/e2e.yml/badge.svg)](https://github.com/mathiasg12/social-media-client/actions/workflows/e2e.yml) [![Deploy static content to Pages](https://github.com/mathiasg12/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/mathiasg12/social-media-client/actions/workflows/pages.yml) [![Login-function-Unit-Test](https://github.com/mathiasg12/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/mathiasg12/social-media-client/actions/workflows/unit-test.yml)

## workflow CA Mathias Gauslå

### overview

this project is a school project to practice Workflow. this include unit testing functions, end to end tests and configure useful tools like eslint and prettier. in this project I have installed and configured husky,prettier and eslint to use on commit hooks, so syntax and other errors is fixed and warned about if you try to commit. this project also includes Unit-test with jest to check if the login function works as it should and stores an accesstoken in local storage, the unit test also checks if the logout button clears it. this project also includes e2e tests with cypress and mainly checks login functionalty and that the login form works as expcted. this project uses github pages to deploy a live site and uses github action to deploy each time the master branch is pushed

### new configurations

- added unit test with Jest and added it to github actions to run on merge
- added E2E tests with Cypress and added it to github actions to run on merge
- added Eslint and prettier on commit hooks
- added version patch after each commit
- added readme file
- added protection rules to master branch

### Requirements

##### for development you need:

- a code editor
- Node.js version 20.9.0 or later is recomended

### Installation

- download the repository from github
- open the repository in a code editor

#### Eslint and prettier

- this project uses eslint and prettier on commit hooks
- run eslint: `npm run eslint` and `npm run eslint-fix`
- run prettier: `npm run format-js`, `npm run format-scss` and `npm run format-html`

#### Unit test

- tests if login function stores access token
- tests if logout function clears access token from local storage
- run unit test with jest: `npm run test-jest`

#### E2E test

- tests that a user can login and access their profile
- tests that a user can not submit a login form with invalid credentials
- tests that a user can press the logout button and log out
- run E2E with cypress localy: `npm run e2e-cli`
- run E2E with cypress in electron browser: `npm run e2e-browser`

#### Issues

- 404 error messages are found on most pages, I created an issue in the issue tab
