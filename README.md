# BCBS Users App

This is a CRUD, auth and authorization web application that combines a backend server and a React front-end and gives a logged in or registered user the ability to manage CRUD operations on their "friends" list using the `https://reqres.in/` API.

## Prerequisites

- Node.js (latest)
- npm (latest)

## Getting Started

1. Clone the project repository:
 - run `git clone --recurse-submodules https://github.com/lelandshir/bcbs_app.git` to make sure that the sub-modules (aka "sub-repositories") are also cloned along with the main repository
 - Install the dependencies for the backend server:
    - `cd server`
    - run `npm install`
- Install the dependencies for the React front-end:
    -  `cd ui`
    - `npm install`

2. Running the Application
 - Start the backend server
    - in `/server` run `npm start`
 - The server will start running on `http://localhost:3001`

3. Start the React front-end:
 - in `/ui` run `npm start`
- The React development server will start running on `http://localhost:3000`.

4. Open your web browser and navigate to `http://localhost:3000` to access the application.
 - You may use any `https://reqres.in/` user that exists on the API to log in or register, but the API does not truly allow for adding new users or removing users. Instead I simulated this on the front-end and wrote out the ideal CRUD operations for example purposes.

 Here is a user you may log in with:
 ```
 {
  "email": "eve.holt@reqres.in",
  "password": "pistol"
}
 ```

### Project Structure
The project is organized into the following directories:
- bcbs_app/server: Contains the backend server code.
- bcbs_app/ui: Contains the React front-end code.

### Technologies Used
- Backend: Node.js, Express.js
- Front-end: React, HTML, CSS