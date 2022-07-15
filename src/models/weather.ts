interface ICurrentWeather {
  location: ILocation,
  weather: IWeather,
}

interface ILocation {
  country: string,
  sunrise: number,
  sunset: number,
  timezone: number,
  coord: {
    lon: number,
    lat: number,
  },
}

interface ICondition {
  code: number,
  icon: string,
  description: string,
  main: string,
}

interface IWeather {
  temp: {
    current: {
      kelvin: number,
      fahrenheit: number,
      celsius: number
    }
    min: {
      kelvin: number,
      fahrenheit: number,
      celsius: number
    },
    max: {
      kelvin: number,
      fahrenheit: number,
      celsius: number
    },
    feels: {
      kelvin: number,
      fahrenheit: number,
      celsius: number
    },
  },
  pressure: number,
  humidity: number,
  condition: ICondition,
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  }
}

function getWeatherByLocation(zip: string): ICurrentWeather {
  getCurrentWeather(zip);

}




export { getWeatherByLocation };

// const request = require("superagent");
// const { logger, convert } = require("sst");




// function getSingle(req) {
//   return new Promise((resolve, reject) => {
//     if (
//       (req.query.zip && req.query.zip.length > 0) ||
//       (req.body.text && req.body.text.length > 0)
//     ) {
//       const apiUrl = "https://api.openweathermap.org/data/2.5/";
//       const args = req.query.zip || req.body.text;
//       let url = apiUrl;
//       if (process.env.KL_OWM_API_KEY < 1) {
//         logger.warn(
//           "openweathermap Key is missing, Please add an API key to the configuration file."
//         );
//         reject(
//           "openweathermap Key is missing, Please add an API key to the configuration"
//         );
//       }
//       // if zipcode ?zip={zip},us (us only?)
//       // if city / state use ?q=
//       url = `${url}weather?zip=${args},us&appid=${process.env.KL_OWM_API_KEY}`;
//       try {
//         request.get(url).then((response) => {
//           if (response.status === 200) {
//             const json = response.body;
//             if (typeof json.main === "undefined") {
//               logger.warn(`json.main === 'undefined'`);
//               reject("Are you trying to make me crash?");
//             } else {
//               const returnstring = `Current temperature in ${
//                 json.name
//               }, is ${convert.kelvinToFahrenheit(
//                 json.main.temp
//               )}°F, with a humidity of ${
//                 json.main.humidity
//               }%, Current Weather is ${json.weather[0].description}`;
//               resolve(returnstring);
//             }
//           }
//         });
//       } catch (error) {
//         logger.error(error);
//         reject("Are you trying to make me crash?");
//       }
//     } else {
//       resolve(
//         `Please use the endpoint with a get param of 'zip'. example https://meteorology.herokuapp.com/?zip=10023`
//       );
//     }
//   });
// }

// module.exports = { getSingle };
