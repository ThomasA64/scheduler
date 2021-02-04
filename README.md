# Interview Scheduler

Welcome to Interview Scheduler. This app allows you to view, create, edit and delete interviews in 5 appointment slots each day from Mon-Friday, 12-5pm in the afternoon. 

It is a SPA (Single Page Application) built using React.js. Data is persisted by the API server using a PostgreSQL database. The client-side of the application communicates with an API server over HTTP, using the JSON format. 

Enjoy making your schedule!

link to scheduler-api: 
https://github.com/lighthouse-labs/scheduler-api


## Screenshots: 
!["The main page of the document"](https://github.com/ThomasA64/scheduler/blob/master/docs/MainPage.png?raw=true)
!["To confirm deleting an interview"](https://github.com/ThomasA64/scheduler/blob/master/docs/DeleteConfirm.png?raw=true)
!["Last interview of the day"](https://github.com/ThomasA64/scheduler/blob/master/docs/LastInterview.png?raw=true)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Package Dependencies

axios
@testing-library/react-hooks
react-test-renderer