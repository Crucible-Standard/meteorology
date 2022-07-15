import * as express from "express";
import { DefaultController } from ".";
import { getWeatherByLocation } from "../models/weather";
import {
  invalidDateMiddleware,
  invalidLanguageMiddleware,
} from "../middleware/validate";

class WeatherController extends DefaultController {
  constructor() {
    super("/current");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getWeatherByLocation);
    this.router
      .all(this.path, invalidDateMiddleware)
      .all(this.path, invalidLanguageMiddleware);
  }

  private getWeatherByLocation = (
    request: express.Request,
    response: express.Response
  ) => {
    // no language defaulting to english
    const language = `${request.params.language}`;
    const zip = `${request.params.zip}`;

    response.status(200).send({
      data: {
        message: `${getWeatherByLocation(zip, language)}`,
      },
      meta: {
        zip: `${zip}`,
      },
    });
  };
}

export default WeatherController;
