const express = require('express');
const bodyParser = require('body-parser');
//const massive = require('massive');
//const session = require('express-session');
//const axios = require('axios');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const SERVER_PORT = process.env.SERVER_PORT || 4000;
app.listen(SERVER_PORT, () => {
  console.log('Server listening on port ' + SERVER_PORT);
});