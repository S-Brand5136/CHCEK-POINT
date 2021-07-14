# CHECK-POINT 🕹️

Track and get stats of games you play, how long you've played, and browse a catalog of games with CHECK-POINT !
<br />
<br />
This video game tracker app has a catalogue for any user to browse through games, and view details on specific titles they’re interested in. Users can add ratings to the game, which will contribute to the game’s overall rating as well as their profile stats. On the main feed, users can view their collections of games they’re currently playing, wanting to play, have completed, and have dropped, as well as view other user’s activity. Outside of collections, users are also able to create their own lists of their choosing, and add games to them accordingly.

## Table of Contents 📖

1. [Dependencies](#dependencies)
2. [Screenshots](#screenshots)
3. [Database Setup](#database)
4. [Set up](#setUp)
5. [How to](#howTo)
6. [Contributors](#contributors)

## Target Audienece 🙇

Target Audience:

- any avid gamer with internet access and a video game backlog
- those who may have trouble keeping track of their gaming
- anyone that wants to see reliable reviews for games before trying them out/purchasing

## Dependencies <a name='dependencies'></a>

- Backend

  - [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [express](https://expressjs.com/)
  - [knex](https://knexjs.org/)
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [pg](https://www.npmjs.com/package/pg)

- Frontend
  - [Axios](https://axios-http.com/docs/intro)
  - [React](https://reactjs.org/)
  - [Ant.Design](https://ant.design/)
  - [Craco](https://www.npmjs.com/package/@craco/craco)
  - [Less](https://lesscss.org/)
  - [Chartjs](https://www.chartjs.org/)
  - [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)

#### - Dev Dependencies

- [Storybook](https://storybook.js.org/)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react-hooks-testing-library](https://react-hooks-testing-library.com/)
- [react-test-renderer](https://reactjs.org/docs/test-renderer.html)

## Screenshots <a name='screenshots'></a>

#### Home Page

![Home Page](https://github.com/S-Brand5136/CHECK-POINT/blob/master/docs/homepage_user.png)

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

4. Within the express-back-end directory theres a .env.example file that can be found. It details the .env you should follow when setting up the database
   [.env.example](https://github.com/S-Brand5136/CHECK-POINT/blob/master/express-back-end/.env.example)

   - After the .env file has been set up and all dependencies installed, from the backend root directory run these 2 commands to create the tables and seed the database

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

## Future Developments <a name='future'></a>

1. Forum for users to discuss games
2. Reviews for users to share their thoughts on any title
3. More stats
4. Ability to add/follow friends

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
