# Assumptions
- The form values other than those required for the API request remains unused in state
- For the drop downs in the form(Country Code, From Currency, To Currency), information that was provided in the screenshot was used and stored in constants locally
- No validation is done on email address and and contact number

# Frameworks used
- For the front end, React is used and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
- Styled-componets is used for styling.<br />
- Jest and Enzyme is used for unit and snapshot testing.<br />

# Given more time
- Error handling, this includes API errors when the from and to currency are the same and the amount is below the minimum allowed amount
- Add more test coverage
- Add validation for remaining fields
- Style the UI a better
- Find API's for currency and country code information

# Project installation
In the project directory run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!