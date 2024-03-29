import * as express from "express";
import { DefaultController } from ".";
import { getWeatherByLocation } from "../models/weather";

class MainWeatherController extends DefaultController {
  constructor() {
    super("/");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getWeatherByLocation);
  }

  private getWeatherByLocation = async (
    request: express.Request,
    response: express.Response
  ) => {
    const zip = `${request.query.zip}`;

    const weather = await getWeatherByLocation(zip);
    response.status(200).send(weather);
  };
}

export default MainWeatherController;
