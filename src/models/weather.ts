import { default as logger } from "../utils/logger";

import { getCurrentWeather } from "../services/openweather";

import { kelvinToFahrenheit, kelvinToCelsius } from "../utils/convert";

interface ILocation {
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
  coord: {
    lon: number;
    lat: number;
  };
}

interface ICondition {
  code: number;
  icon: string;
  description: string;
  main: string;
}

interface IWeather {
  temp: {
    current: {
      kelvin: number;
      fahrenheit: number;
      celsius: number;
    };
    min: {
      kelvin: number;
      fahrenheit: number;
      celsius: number;
    };
    max: {
      kelvin: number;
      fahrenheit: number;
      celsius: number;
    };
    feels: {
      kelvin: number;
      fahrenheit: number;
      celsius: number;
    };
  };
  pressure: number;
  humidity: number;
  condition: ICondition;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
}

interface IWeatherResponse {
  location: ILocation;
  weather: IWeather;
}

interface ISlackResponse {
  response_type: string;
  text: string;
}

async function getWeatherByLocation(zip: string): Promise<IWeatherResponse> {
  try {
    const response = await getCurrentWeather(zip);
    const weatherResponseReturn = {
      location: {
        country: response.data.sys.country,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        timezone: response.data.timezone,
        coord: {
          lon: response.data.coord.lon,
          lat: response.data.coord.lat,
        },
      },
      weather: {
        temp: {
          current: {
            kelvin: response.data.main.temp,
            fahrenheit: kelvinToFahrenheit(response.data.main.temp),
            celsius: kelvinToCelsius(response.data.main.temp),
          },
          min: {
            kelvin: response.data.main.temp_min,
            fahrenheit: kelvinToFahrenheit(response.data.main.temp_min),
            celsius: kelvinToCelsius(response.data.main.temp_min),
          },
          max: {
            kelvin: response.data.main.temp_max,
            fahrenheit: kelvinToFahrenheit(response.data.main.temp_max),
            celsius: kelvinToCelsius(response.data.main.temp_max),
          },
          feels: {
            kelvin: response.data.main.feels_like,
            fahrenheit: kelvinToFahrenheit(response.data.main.feels_like),
            celsius: kelvinToCelsius(response.data.main.feels_like),
          },
        },
        pressure: response.data.main.pressure,
        humidity: response.data.main.humidity,
        condition: {
          code: response.data.weather[0].id,
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
          main: response.data.weather[0].main,
        },
        visibility: response.data.visibility,
        wind: {
          speed: response.data.wind.speed,
          deg: response.data.wind.deg,
        },
        clouds: {
          all: response.data.clouds.all,
        },
      },
    };
    return new Promise((resolve, reject) => {
      resolve(weatherResponseReturn);
    });
  } catch (error) {
    logger.warn("Error in src/models/getWeatherByLocation");
    logger.error(error);
    throw error;
  }
}

async function getSlackResponse(zip: string): Promise<ISlackResponse> {
  try {
    const response = await getCurrentWeather(zip);
    const weatherResponseReturn = {
      response_type: "in_channel",
      text: `The weather in ${zip} is ${kelvinToFahrenheit(
        response.data.main.temp
      )}°F, with a humidity of ${
        response.data.main.humidity
      }%, Current Weather is ${response.data.weather[0].main}`,
    };
    return new Promise((resolve, reject) => {
      resolve(weatherResponseReturn);
    });
  } catch (error) {
    logger.warn("Error in src/models/getSlackResponse");
    logger.error(error);
    throw error;
  }
}

export {
  getWeatherByLocation,
  getSlackResponse,
  IWeatherResponse,
  ISlackResponse,
};
