require('newrelic');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

//const middleware = require('./middleware.js');
const router = require('./routes.js');

const app = express();
const PORT = process.env.SERVER_PORT || 3003;
app.set('port', PORT);

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
//app.use(middleware.httpRequestLogger);
app.use(cors());
app.use(compression());

app.use('/api/models', router);

app.use(express.static(path.join(__dirname, '../client', 'dist')));

app.listen(app.get('port'), () =>
  console.log('Listening on port: ' + app.get('port')));
