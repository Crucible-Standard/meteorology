meteorology
=========

[![Issues](https://img.shields.io/github/issues/Crucible-Standard/meteorology.svg)](https://github.com/Crucible-Standard/meteorology/issues)
[![License](https://img.shields.io/badge/license-GPL-blue.svg)](https://github.com/Crucible-Standard/meteorology/blob/main/LICENSE)
![Known Vulnerabilities](https://snyk.io/test/github/Crucible-Standard/meteorology/badge.svg)
[![codecov](https://codecov.io/gh/Crucible-Standard/meteorology/branch/main/graph/badge.svg)](https://codecov.io/gh/Crucible-Standard/meteorology)



### Description:

A simply api that returns the weather information based on zip or city. 
It also has a `/slack` endpoint for using with slash-commands on slack bots. 

### Documentation


<div align="center">
  <p>
    <a href="https://rapidapi.com/wh-iterabb-it-wh-iterabb-it-default/api/meteorology/">
      <img width="200" height="52" src="https://rapidapi.com/static-assets/default/dark-logo-78e48dc1-ca3f-4d67-a6f5-74032f439c8b.svg" />
    </a>
  </p>
</div>


#### / - Default Route Usage

By default you can pass the location you wish to recieve the weather about using query param `zip`, without a zipcode or location information the endpoint will return a status `400` error. By providing the endpoint with a location it will return a full response of fields. For a more minimal response, check out the [/slack endpoint](#slack).

```bash
curl https://meteorology.herokuapp.com/?zip=10023
```

Response

```json
{
  "location": {
    "country": "US",
    "sunrise": 1684920699,
    "sunset": 1684973651,
    "timezone": -14400,
    "coord": {
      "lon": -73.9827,
      "lat": 40.7764
    }
  },
  "weather": {
    "temp": {
      "current": {
        "kelvin": 297.5,
        "fahrenheit": 75.83,
        "celsius": 24.35
      },
      "min": {
        "kelvin": 292.99,
        "fahrenheit": 67.712,
        "celsius": 19.84
      },
      "max": {
        "kelvin": 302.02,
        "fahrenheit": 83.966,
        "celsius": 28.87
      },
      "feels": {
        "kelvin": 296.98,
        "fahrenheit": 74.894,
        "celsius": 23.83
      }
    },
    "pressure": 1016,
    "humidity": 38,
    "condition": {
      "code": 800,
      "icon": "01d",
      "description": "clear sky",
      "main": "Clear"
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.09,
      "deg": 0
    },
    "clouds": {
      "all": 0
    }
  }
}
```

#### /slack


The Slack endpoint will reply to `POST` and `GET` requests. The endpoint will also take the location you wish to recieve the weather about using query param `zip` or in the body of as a URL-encoded field `text` just like [slack bot use](https://api.slack.com/interactivity/slash-commands#app_command_handling). 

Simple usage for a Slack Command. 

```bash
curl https://meteorology.herokuapp.com/slack?zip=10023
```

Response

```json
{
	"response_type": "in_channel",
	"text": "Current temperature in New York, is 69.224°F, with a humidity of 74%, Current Weather is broken clouds"
}
```




## Local Development

## Installation

The application is typescript and provided with a docker container which is used for a ubiquitious development experience. Tests, linting, and all CI/CD uses the docker container, you can build it using the following commands. 

```bash
docker build -t crucible-standard/meteorology .

docker run crucible-standard/meteorology npm install
```

Next you can run tests

```bash
docker run crucible-standard/meteorology npm run test
```

### Example Usage

Basic usage
```
docker run crucible-standard/meteorology npm run start
```

