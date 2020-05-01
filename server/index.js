const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../db-mysql');
const middleware = require('./middleware.js');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(PORT, () => console.log('Listening on port: ' + PORT));