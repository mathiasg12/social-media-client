# social-media-client
[![Code Review](https://github.com/mathiasg12/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/mathiasg12/social-media-client/actions/workflows/gpt.yml) [![Cypress-E2E-Testing](https://github.com/mathiasg12/social-media-client/actions/workflows/e2e.yml/badge.svg)](https://github.com/mathiasg12/social-media-client/actions/workflows/e2e.yml) [![Deploy static content to Pages](https://github.com/mathiasg12/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/mathiasg12/social-media-client/actions/workflows/pages.yml) [![Login-function-Unit-Test](https://github.com/mathiasg12/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/mathiasg12/social-media-client/actions/workflows/unit-test.yml)
## workflow CA Mathias Gauslå
### new configurations
- added unit test with Jest and added it to github actions to run on merge
- added E2E tests with Cypress and added it to github actions to run on merge
- added Eslint and prettier on commit hooks
- added version patch after each commit
#### Unit test
- tests if login function stores access token
- tests if logout function clears it
#### E2E test
- tests that a user can login and access their profile
- tests that a user can not submit a login form with invalid credentials
- tests that a user can press the logout button and log out
#### Issues
-404 error messages are found on most pages, I created an issue in the issue tab 
