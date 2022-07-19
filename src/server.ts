import App from "./app";

import HealthCheckController from "./controllers/health";
import WeatherController from "./controllers/current";

const app = new App([new HealthCheckController(), new WeatherController()]);

app.listen();
