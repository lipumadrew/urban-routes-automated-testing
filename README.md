# Sprint 8 Project: Urban Routes Automated Testing

This project is an exploration of the automated testing of the Urban Routes app.

## Technologies and Techniques Used
The project was created using VS Code, and written primarily in JavaScript. The automated tests were created with Mocha and the WebdriverIO testing framework. The tests replicate an end to end experience of creating an order through the Urban Routes web application. I chose to focus on testing the Google Chrome version of the app.

## Instructions
In order to run the tests, it's imperative that the Urban Routes server is started and running. Once the server is running, copy and paste the base URL into the wdio.config.js file. Then, using a command line interface of your choice, navigate to the root directory of the project, and type the command `npx wdio ./wdio.config.js` to run the tests.