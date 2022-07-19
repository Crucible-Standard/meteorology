import * as express from "express";
import { DefaultController } from ".";
import { getWeatherByLocation } from "../models/weather";

class WeatherController extends DefaultController {
  constructor() {
    super("/current");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getWeatherByLocation);
  }

  private getWeatherByLocation = (
    request: express.Request,
    response: express.Response
  ) => {
    const zip = `${request.params.zip}`;

    response.status(200).send({
      data: {
        message: `${getWeatherByLocation(zip)}`,
      },
      meta: {
        zip: `${zip}`,
      },
    });
  };
}

export default WeatherController;
