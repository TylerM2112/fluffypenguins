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
app.get('/api/addUsers', userController.addUsers);

//* API's

//User API's
/*
app.get - get all users
app.get - get single user
*/

//Notification API's
/*
app.get - friend notifications
app.get - group notifications
app.get - event notifications
app.post - friend notifications
app.post - group notifications
app.post - event notifications
app.delet - delete notification
*/

//Friends API's
/*
app.get - get all friends for user
app.post - add confirmed friend to user
app.delete - remove friend from user
*/

//Group API'S
/*
app.get - get groups for user
app.post - create new group
app.post - add confirmed group to user
app.delete - remove group from user
*/

//Event API's
/*
app.get - get events for user
app.post - create new event
app.post - add confirmed even to user
app.delete - remove event from user
*/

//Services API's
/*
Yelp - sends location to receive surrounding businesses
Google Maps - send lat and long and receive map with middle point
Google address - send address for confirmation
*/

//Authorization
/*
OAuth - Allow user to create an account to login with
Google - Allow user to sign in via google
Facebook - Allow user to sign in via FaceBook
*/

const SERVER_PORT = process.env.SERVER_PORT || 4000;
app.listen(SERVER_PORT, () => {
  console.log('Server listening on port ' + SERVER_PORT);
});