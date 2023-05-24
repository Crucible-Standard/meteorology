import * as express from "express";
import { DefaultController } from ".";
import { getSlackResponse } from "../models/weather";

class SlackWeatherController extends DefaultController {
  constructor() {
    super("/slack");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getWeatherByLocation);
    this.router.post(this.path, this.getWeatherByLocation);
  }

  private getWeatherByLocation = async (
    request: express.Request,
    response: express.Response
  ) => {
    const zip = `${request.query.zip}`;

    const weather = await getSlackResponse(zip);
    response.status(200).send(weather);
  };
}

export default SlackWeatherController;
