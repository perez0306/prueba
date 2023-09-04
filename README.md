# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initial project
you must run the following script

- npm i 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Testing Coverage
----------------------------------|---------|----------|---------|---------|-------------------
File                              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------------|---------|----------|---------|---------|-------------------
All files                         |   93.63 |    66.66 |   88.09 |   94.39 |                   
 components/footer                |     100 |      100 |     100 |     100 |                   
  footer.jsx                      |     100 |      100 |     100 |     100 |                   
  footer.style.jsx                |     100 |      100 |     100 |     100 |                   
  footer.utils.js                 |     100 |      100 |     100 |     100 |                   
 components/menu                  |     100 |       50 |     100 |     100 |                   
  menu.jsx                        |     100 |       50 |     100 |     100 | 34                
  menu.style.jsx                  |     100 |      100 |     100 |     100 |                   
 components/modalPay              |   76.92 |       25 |     100 |   76.92 |                   
  ModalPay.jsx                    |   72.72 |       25 |     100 |   72.72 | 17-19,23          
  ModalPay.style.jsx              |     100 |      100 |     100 |     100 |                   
 components/modalPay/creditData   |   95.65 |      100 |   86.66 |   95.65 |                   
  creditData.jsx                  |   94.11 |      100 |   86.66 |   94.11 | 36                
  creditData.style.jsx            |     100 |      100 |     100 |     100 |                   
  creditData.utils.js             |     100 |      100 |     100 |     100 |                   
 components/modalPay/payMethod    |    90.9 |      100 |      80 |    90.9 |                   
  payMethod.jsx                   |      90 |      100 |      80 |      90 | 15                
  payMethod.style.jsx             |     100 |      100 |     100 |     100 |                   
 components/modalPay/personalData |    90.9 |      100 |   83.33 |    90.9 |                   
  personalData.jsx                |   88.88 |      100 |   83.33 |   88.88 | 29                
  personalData.style.jsx          |     100 |      100 |     100 |     100 |                   
  personalData.utils.js           |     100 |      100 |     100 |     100 |                   
 components/product/CountProduct  |     100 |       75 |     100 |     100 |                   
  CountProduct.jsx                |     100 |       75 |     100 |     100 | 12-24             
  CountProduct.style.jsx          |     100 |      100 |     100 |     100 |                   
 redux/count                      |      80 |      100 |      50 |     100 |                   
  count.actions.js                |      75 |      100 |      50 |     100 |                   
  count.js                        |     100 |      100 |     100 |     100 |                   
 styles                           |     100 |      100 |     100 |     100 |                   
  contantStyles.js                |     100 |      100 |     100 |     100 |                   
----------------------------------|---------|----------|---------|---------|-------------------
Test Suites: 7 passed, 7 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        2.703 s, estimated 3 s

