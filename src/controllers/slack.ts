import * as express from "express";
import { DefaultController } from ".";
import { getSlackResponse } from "../models/weather";

class SlackWeatherController extends DefaultController {
  constructor() {
    super("/slack");
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.all(this.path, this.getWeatherByLocation);
  }

  private getWeatherByLocation = async (
    request: express.Request,
    response: express.Response
  ) => {
    if (!request.query.zip && !request.body.text) {
      response.status(400).send("No zip code provided");
      return;
    }
    const zip = `${request.query.zip || request.body.text}`;

    const weather = await getSlackResponse(zip);
    response.status(200).send(weather);
  };
}

export default SlackWeatherController;
