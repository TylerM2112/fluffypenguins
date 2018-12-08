//const axios = require('axios');
import { json } from 'body-parser';
import express from 'express';
//const session = require('express-session');
//const massive = require('massive');

require('dotenv').config();

const app = express();
app.use(json());

const SERVER_PORT = process.env.SERVER_PORT || 4000;
app.listen(SERVER_PORT, () => {
  console.log('Server listening on port ' + SERVER_PORT);
});