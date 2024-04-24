# MYOB Coding Test 2019

---

#### Candidate: Slav Lazarevic

To get started, all dependency packages must be installed with the command: `yarn` or `npm install` 

## Login

I wrote a simple cloud function in Firebase to authenticate against - therefore you will need to login with valid user credentials.

***

In this project you can run (Following instructions assume usage of **yarn** as this was my preference, **npm** can also be used if preferred):

### `yarn start`

Runs the application in development mode

### `yarn test`

Launches the test runner in the interactive watch mode for all unit tests written.

### `yarn lint`

Runs the linter against the codebase. Linter is configured to use Airbnb style guides (https://github.com/airbnb/javascript)

***

## External Dependencies Used

| Dependency          | Reason used                                                  |
| ------------------- | ------------------------------------------------------------ |
| @react-pdf/renderer | Generate a PDF download of the generated pay slip            |
| axios               | Promised based HTTP client to make async call to login endpoint |
| formik              | React form builder for all forms used in app                 |
| localforage         | Better web storage (as opposed to LocalStorage) for storing state via Rediux Persist |
| moment              | Calculated date and date ranges for pay slip                 |
| polished            | Sass-style helpers for styled components                     |
| prop-types          | Type checking for all props used in components               |
| react-datepicker    | Date picker used in payslip generator for selecting pay period |
| react-redux         | Redux for app wide state management                          |
| react-router-dom    | Routing used in app                                          |
| redux               | Redux for app wide state management                          |
| redux-logger        | Logger for Redux (used for debugging)                        |
| redux-persist       | Persisting state                                             |
| redux-thunk         | Used to create async dispatch action creators                |
| reselect            | Selectors for redux state for computing some derived data    |
| sinon               | Used for test spies, stubs and mocks in unit tests           |
| styled-components   | Used styled components throughout for all my styling (CSS in JS) |
| yup                 | Object schema validation for all forms                       |

***

## Notes

* As mentioned, I wrote a simple cloud function hosted in Firebase to authenticate a user against, this was to demonstrate ability with consuming APIs and handling responses
* I started off with a simple functional approach to generating and calculating the payslip data, however I switched over to a class based solution - I left both in there as I had already written unit tests for the functional approach, but just wanted to point out that *utils/payslip-calculator.js* is not used, and *utils/payslip-calculator.class.js* is the one I decided to proceed with.
* In an application of this size, I would not have opted to used Redux, as I believe it was a bit overkill, but I decided to go with it to demonstrate my ability of working with it.
* I also would not have opted to use Styled Components, as I believe they provide a bit of an overhead, but also wanted to demonstrate ability of usage with the library.
* I was planning on animating the whole app with the use of *react-transition-group*, however I was short for time and decided against it in the end to avoid any further delays.