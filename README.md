# Automated UI and API Testing using NightwatchJS and Supertest


This repository demonstrates automated testing for UI and API functionalities using NightwatchJS for UI testing on the (multiformis.com) website and Supertest for API testing with the mock-user-auth module. The tests cover various scenarios including form submissions, search functionalities, and API validations under different conditions.

Key Features: UI Tests with NightwatchJS:

Tested the contact us page to validate optional and required fields using Nightwatch Page Objects, ensuring no hardcoded selectors. Tests cover valid and invalid form submissions, including file upload scenarios.
Verified the homepage search functionality for the keyword "dress" to ensure accurate search results.
API Tests with Supertest:

Tested all API routes from the mock-user-auth module to validate endpoints with different payloads and authentication scenarios (valid/invalid authorization).
CI/CD Integration: Integrated with CircleCI for automated testing upon each commit, ensuring consistent and reliable test results.

Bug Reporting: Reported bugs with detailed bug tickets for each issue found during testing, providing clear documentation for developers and stakeholders.

Deliverables: HTML Reports: Generated HTML reports for both UI and API test results, ensuring easy visualization and sharing of test outcomes. Bug Tickets: Created structured bug tickets for identified issues, facilitating efficient bug tracking and resolution. Test Case Document: Prepared a comprehensive document outlining test cases for UI and API testing, ensuring clarity for all stakeholders

## NightWatchjs UI

### mandatory fields:
- message [ for communication]
- email [ to be able to contact this person]
- subject heading [ as to know where to forward or to assign the message to which team]

### optional fields:
  - order reference [ not necessary user wants to acquire about an order or has already made an order]
  - attach file [it's an extra option to enhance communicating the problem to the team]
 
### please find the bug tickets, test case documentation, and HTML reports  each in a separate folder inside UI folder.

### to run tests:
for contact us tests
```console
C:\Users\S0nd0\Documents\UI>npx nightwatch tests/contactUsTest.js -e chrome
```
npx nightwatch tests/contactUsTest.js -e chrome
'''

for dress search test

```console
C:\Users\S0nd0\Documents\UI>npx nightwatch tests/homePageTest.js -e chrome
```



##  mock-user-auth - npm APIs  supertest


### please find the  report   inside  a separate folder "report"  inside API folder.

### to run tests:

```console
C:\Users\S0nd0\Downloads\API> npm test
```


