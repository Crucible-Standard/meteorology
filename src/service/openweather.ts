import fetch from "node-fetch";

interface ICurrentWeatherOWeather {
  cod: string; //  Internal parameter of OpenWeather
  message: number; //  Internal parameter of OpenWeather
  cnt: number; // Number of timestamps returned by this API call
  list: ICurrentListOWeather[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
  };
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface ICurrentListOWeather {
  dt: number; // Time of data forecasted, unix, UTC
  main: ICurrentMainOWeather;
  weather: ICurrentWCOWeather;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gist: string;
  };
  rain: {
    "1h": number; // Rain volume for the last 1 hour
  };
  snow: {
    "1h": number; // Snow volume for the last 1 hour
  };
  visability: number; // Average visibility, metres. The maximum value of the visibility is 10km
  pop: number; // Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
  sys: {
    pod: string; //  Part of the day (n - night, d - day)
  };
  dt_txt: string; // Time of data forecasted, unix, UTC
}

interface ICurrentMainOWeather {
  temp: number; // Temperature in Kelvin
  temp_min: number; // Daily Minimum temperature in Kelvin
  temp_max: number; // Daily Max Temperature in Kelvin
  feels_like: number; // Temperature in Kelvin
  pressure: number; // Atmospheric pressure on the sea level, hPa
  humidity: number; // Humidity in %
  sea_level: number; // Atmospheric pressure on the sea level, hPa
  grnd_level: number; // Atmospheric pressure on the ground level, hPa
  temp_kf: number; // Internal parameter
}

interface ICurrentWCOWeather {
  id: number; // Weather Condition ID
  main: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
  description: string; // Weather condition within the group
  icon: string; // Weather icon id
}

async function getCurrentWeather(
  zip: string
): Promise<ICurrentWeatherOWeather> {
  const apiUrl = "https://api.openweathermap.org/data/2.5/";
  const url = `${apiUrl}weather?zip=${zip},us&appid=${process.env.KL_OWM_API_KEY}`;
  return new Promise(async (resolve, reject) => {
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      // the JSON body is taken from the response
      .then((res) => res.json())
      .then((res) => {
        if (typeof res.main === "undefined") {
          reject("Are you trying to make me crash?");
        }
        return res;
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
    // The response has an `any` type, so we need to cast
    // it to the `ICurrentWeatherOWeather` type, and return it from the promise
    resolve(response as ICurrentWeatherOWeather);
  });
}

export { getCurrentWeather };
