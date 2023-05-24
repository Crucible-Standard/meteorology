import {
  kelvinToFahrenheit,
  kelvinToCelsius,
} from '../../src/utils/convert';

const freezingKelvin = 273.15;
const boilingKelvin = 373.15;
const freezingFahrenheit = 32;
const boilingFahrenheit = 212;
const freezingCelsius = 0;
const boilingCelsius = 100;

describe('Convert', () => {
	describe('kelvinToFahrenheit - Unit Tests', () => {
		it(`should give Fahrenheit ${freezingFahrenheit} for freezing kelvin input at ${freezingKelvin}`, () => {
			const result = kelvinToFahrenheit(freezingKelvin);
			expect(result).toEqual(freezingFahrenheit);
		});
		it(`should give Fahrenheit ${boilingFahrenheit} for boiling kelvin input at ${boilingKelvin}`, () => {
			const result = kelvinToFahrenheit(boilingKelvin);
			expect(result).toEqual(boilingFahrenheit);
		});
	});
	describe('kelvinToCelsius - Unit Tests', () => {
		it(`should give Celsius ${freezingCelsius} for freezing kelvin input at ${freezingKelvin}`, () => {
			const result = kelvinToCelsius(freezingKelvin);
			expect(result).toEqual(freezingCelsius);
		});
		it(`should give Celsius ${boilingCelsius} for boiling kelvin input at ${boilingKelvin}`, () => {
			const result = kelvinToCelsius(boilingKelvin);
			expect(result).toEqual(boilingCelsius);
		});
	});
});