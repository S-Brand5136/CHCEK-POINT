# CHECK-POINT 🕹️

Track and get stats of games you play, how long you've played, and browse a catalog of games with CHECK-POINT !
<br />
<br />
This video game tracker app has a catalogue for any user to browse through games, and view details on specific titles they’re interested in. Users can add ratings to the game, which will contribute to the game’s overall rating as well as their profile stats. On the main feed, users can view their collections of games they’re currently playing, wanting to play, have completed, and have dropped, as well as view other user’s activity. Outside of collections, users are also able to create their own lists of their choosing, and add games to them accordingly.

## Table of Contents 📖

1. [Tech Stack](#techstack)
2. [Dependencies](#dependencies)
3. [Screenshots](#screenshots)
4. [Database Setup](#database)
5. [Set up](#setUp)
6. [How to](#howTo)
7. [Testing](#tests)
8. [Contributors](#contributors)

## Target Audienece 🙇

Target Audience:

- any avid gamer with internet access and a video game backlog
- those who may have trouble keeping track of their gaming
- anyone that wants to see reliable reviews for games before trying them out/purchasing

## Tech Stack <a name='techstack'></a>

For this project we used the PERN stack

- Postgresql
- Express
- React
- Nodejs

## Dependencies <a name='dependencies'></a>

- Backend

  - [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [express](https://expressjs.com/)
  - [knex](https://knexjs.org/)
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [pg](https://www.npmjs.com/package/pg)
  - [postgresql](https://github.com/S-Brand5136/CHECK-POINT)

- Frontend

  - [React](https://reactjs.org/)
  - [Axios](https://axios-http.com/docs/intro)
  - [Ant.Design](https://ant.design/)
  - [Craco](https://www.npmjs.com/package/@craco/craco)
  - [Less](https://lesscss.org/)
  - [Chartjs](https://www.chartjs.org/)
  - [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)

- Dev Dependencies + Testing Libraries

  - [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
  - [react-hooks-testing-library](https://react-hooks-testing-library.com/)
  - [Jest](https://jestjs.io/)
  - [supertest](https://www.npmjs.com/package/supertest)

## Screenshots <a name='screenshots'></a>

#### Home Page

![Home Page](https://github.com/S-Brand5136/CHECK-POINT/blob/master/docs/homepage_visitor.png)

#### User Home Page

![User Home Page](https://github.com/S-Brand5136/CHECK-POINT/blob/master/docs/homepage_user.png)

#### User Profile Page

![User Profile](https://github.com/S-Brand5136/CHECK-POINT/blob/master/docs/user_profile.png)

## Set up <a name='setUp'></a>

#### All commands are run from the command line

1. make a git clone of this repository.

```bash
  $ git clone https://github.com/S-Brand5136/CHECK-POINT
```

2. Install backend dependencies by first navigating to the `express-backend-server` directory and running `npm install` in the command line.

```bash
  $ npm install
```

3. Install frontend dependencies by navigating to the `frontend` directory and running `npm install` in the command line.

```bash
  $ npm install
```

#### Databse Set up <a name='database'></a>

4. Within the express-back-end directory theres a .env.example file that can be found. It details the .env you should follow when setting up the database. Including an example username and password. These values can be kept, but if they're not make sure you update them when copying them over into the main .env file.
   [.env.example](https://github.com/S-Brand5136/CHECK-POINT/blob/master/express-back-end/.env.example)

   - After the .env file has been set up and all dependencies installed, create a new postgresql database. This will match what you input in the .env file.

   - Next, run these 2 commands to create the tables and seed the database

   ```bash
     $ npx knex migrate:latest
     $ npx knex seed:run
   ```

5. Start the web server using the `npm run server` command from within the backend directory. The app will be served at <http://localhost:8000/>.

```bash
  $ npm run local
```

6. Then from inside the front-end directory run `npm start` to start the react server

```bash
  $ npm start
```

7. Go to <http://localhost:8000/> in your browser.

## How to login <a name='howTo'></a>

Once the project has succesfully installed and been started up, feel free to log in with one of the following built in users.

```JSON
        {
          "password": "123",
          "email": "pav@example.com"
        },
        {
          "password": "67890",
          "email": "fakerinne@example.com"
        },
        {
          "password": "12345",
          "email": "Brandon.Shemilt@example.com"
        },

```

You can now start querying for games, and checking out their stats before or after logging in!

## Testing <a name='tests'></a>

As of right now, only the backend has some tests implemented.
<br />
Backend route tests were created with Jest and Supertest. Follow these steps to start testing..

1. Create a new test database in psql. In order for it work, the database name **must** be `checkpoint_test`. This is because the name has been hardcoded into the `knexfile.js` inside of the test object.

```bash
  $ psql
  $ [postgresql] - CREATE DATABASE checkpoint_test;
```

2. After the database has been created, from the root `express-back-end` folder run this command.

```bash
  $ npm run test
```

Jest will automatically set the NODE_ENV variable to test, knex will switch form the production to test database, and start running all of the tests from the **tests** directory.

## Contributors <a name='contributors'></a>

- Brandon Shemilt

  - [Github](https://github.com/S-Brand5136)
  - [Linkedin](www.linkedin.com/in/brandon-shemilt-89a9401b1)

- Pavneet Kang

  - [Github](https://github.com/Pavneetk)
  - [Linkedin](https://www.linkedin.com/in/astrid-ch-aguilar/)

- Astrid Aguilar
  - [Github](https://github.com/astridcha1x)
  - [Linkedin](https://www.linkedin.com/in/pavneet-k-a139b3108/)

## Upcoming Features <a name='future'></a>

1. Forum for users to discuss games
2. Reviews for users to share their thoughts on any title
3. More stats
4. Ability to add/follow friends
