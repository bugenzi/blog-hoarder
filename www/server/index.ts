// express boilerplate typescript

import express from 'express';
import  bodyParser from 'body-parser';


// create the express app
const app: express.Application = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// define a route handler for the default home page
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(3000, () => {
  console.log('server started at http://localhost:3000');
});