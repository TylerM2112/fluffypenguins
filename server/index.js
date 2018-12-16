const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
//const session = require('express-session');
const axios = require('axios');

require('dotenv').config();

//* Controllers
const userController = require('./controllers/userController');


massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(error => console.log("massive error", error));
const app = express();
app.use(bodyParser.json());

//* User API Calls
app.get('/api/getAllUsers', userController.getAllUsers);



const SERVER_PORT = process.env.SERVER_PORT || 4000;
app.listen(SERVER_PORT, () => {
  console.log('Server listening on port ' + SERVER_PORT);
});