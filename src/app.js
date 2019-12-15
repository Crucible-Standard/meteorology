require('newrelic');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('server-side-tools').logger;
const format = require('server-side-tools').format;
const pkjson = require('../package.json');
const weather = require('./models/weather');

const app = express();

let requestsCount = 0;

// adding helmet to enhance api security
app.use(helmet());

// using bodyParser to parse json bodies into js objects
app.use(bodyParser.json());

/** set up cors middleware
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, Origin, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

logger.info('turning on app...');

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.get('/', (req, res, next) => {
  requestsCount++;
  logger.info(`/ request from ${req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip}`);
  weather.getSingle(req).then((response) => {
    res.status(200).send({ response_type: 'in_channel', text: response });
    logger.debug(response);
  }).catch((error) => {
    this.sendMessage(message.channel, `${error}`);
    res.status(400).send({ response_type: 'in_channel', text: response });
  });
});

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.post('/', (req, res, next) => {
  requestsCount++;
  logger.info(`/ request from ${req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip}`);
  weather.getSingle(req).then((response) => {
    res.status(200).send({ response_type: 'in_channel', text: response });
    logger.debug(response);
  }).catch((error) => {
    this.sendMessage(message.channel, `${error}`);
    res.status(400).send({ response_type: 'in_channel', text: response });
  });
});

/**
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express Next object
 */
app.get('/health', (req, res, next) => {
  requestsCount++;
  const time = process.uptime();
  const uptime = format.toDDHHMMSS(time + '');
  logger.info(`/health request from ${req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip}`);
  res.status(200).send({ data: {uptime: uptime, version: pkjson.version, requests: requestsCount} });
});

// heroku dynamically assigns your app a port, so you can't set the port to a fixed number.
var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

module.exports = server;
