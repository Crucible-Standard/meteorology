meteorology
=========

[![Issues](https://img.shields.io/github/issues/Crucible-Standard/meteorology.svg)](https://github.com/Crucible-Standard/meteorology/issues)
[![License](https://img.shields.io/badge/license-GPL-blue.svg)](https://github.com/Crucible-Standard/meteorology/blob/main/LICENSE)
![Known Vulnerabilities](https://snyk.io/test/github/Crucible-Standard/meteorology/badge.svg)



### Description:

A simply api that returns the weather in a slack friendly format.

Simple usage for a Slack Command

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

Default Route Usage

```bash
curl https://meteorology.herokuapp.com/?zip=10023
```
Response

```json
{
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
}
```


### Installation

```
npm install
```
### Example Usage

Basic usage
```
npm run start
```


### Description:
