import App from "./app";

import HealthCheckController from "./controllers/health";
import WeatherController from "./controllers/main";
import SlackWeatherController from "./controllers/slack";

const app = new App([
  new HealthCheckController(),
  new WeatherController(),
  new SlackWeatherController(),
]);

app.listen();
