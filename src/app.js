const logger = require('server-side-tools').logger;
const format = require('server-side-tools').format;
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const pkjson = require('../package.json');

const app = express()

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
    if ((req.query.zip) && req.query.zip.length > 0) {
      //process.env.KL_OWM_API_KEY
      const apiUrl = 'https://api.openweathermap.org/data/2.5/';
      const args = req.query.zip;
      //https://api.openweathermap.org/data/2.5/weather?zip=10023,us&appid=k
      if (process.env.KL_OWM_API_KEY < 1) {
        logger.warn('openweathermap Key is missing, Please add an API key to the configuration file.');
        res.status(403).send({ error: "openweathermap Key is missing, Please add an API key to the configuration" });
      }
      let url = apiUrl;
      // if zipcode ?zip={zip},us (us only?)
      // if city / state use ?q=
      url = url + 'weather?zip=' + args + ',us' + `&appid=${process.env.KL_OWM_API_KEY}`;
      // DEBUG: output for simple api call to city
      logger.info(`url: ${url}`);

      request.get(url).then((response) => {
        if (response.status === 200) {
          const json = response.body;
          if (typeof json.main === 'undefined') {
            reject('Are you trying to make me crash?');
          } else {
            const returnstring = `Current temperature in ${json.name}, is ${this.convertFahrenheit(json.main.temp)
            }°F, with a humidity of ${json.main.humidity
            }%, Current Weather is ${json.weather[0].description}`;
            res.status(200).send({ data: returnstring });
          }
        }
      });
    } else {
      res.status(200).send({ data: `Please use the endpoint with a get param of 'zip'. example https://meteorology.herokuapp.com/?zip=123` });
    }



  });

  /**
   * @param {Request} req - Express request object
   * @param {Response} res - Express response object
   * @param {Next} next - Express Next object
   */
  app.get('/health', (req, res, next) => {
    const time = process.uptime();
    const uptime = format.toDDHHMMSS(time + '');
    res.status(200).send({ data: {uptime: uptime, version: pkjson.version} });
  });

  // heroku dynamically assigns your app a port, so you can't set the port to a fixed number.
  var server = app.listen(process.env.PORT || 5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });

  module.exports = server;
