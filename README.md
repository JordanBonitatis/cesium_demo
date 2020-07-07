This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Launch The Demo
1. Install the project
`npm install`
2. Start the mock API:
`npm run start-mock-api`
3. Start the dev server
`npm run start`

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run start-mock-api`

Use this custom command to initialize the Express server that mocks a GET route and returns a hardcoded array of materials.
Note that is consumes port 3001.

## Project Structure

Within `src`, there is a `components` directory. Each component that I created here, mostly input fields, could easily be pulled out
into a separate package, published to an internal (or public) registry for reuse. 