import {
	toDDHHMMSS,
	toHHMMSS,
	formatMoney,
} from '../../lib/utils/format';

describe('Format', () => {
	describe('toDDHHMMSS - Unit Tests', () => {
		it('should return the correct time for Test 00:00:00:01', () => {
			const expected = "00:00:00:01";
      const resp = toDDHHMMSS(1);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 00:00:01:01', () => {
			const expected = "00:00:01:01";
			const resp = toDDHHMMSS(61);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 00:01:01:01', () => {
			const expected = "00:01:01:01";
			const resp = toDDHHMMSS(3661);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 01:01:01:01', () => {
			const expected = "01:00:00:00";
			const resp = toDDHHMMSS(86400);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 01:01:01:01', () => {
			const expected = "01:01:01:06";
			const resp = toDDHHMMSS(90066);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 00:00:00:00', () => {
      const expected = "00:00:00:00";
      const resp = toDDHHMMSS(0);
			expect(resp).toEqual(expected);
		});
	});
	describe('toHHMMSS - Unit Tests', () => {
		it('should return the correct time for Test 00:00:00', () => {
			const expected = "00:00:00";
			const resp = toHHMMSS(0);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 00:00:01', () => {
			const expected = "00:00:01";
			const resp = toHHMMSS(1);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 00:01:01', () => {
			const expected = "00:01:01";
			const resp = toHHMMSS(61);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 01:01:01', () => {
			const expected = "01:01:01";
			const resp = toHHMMSS(3661);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 01:01:01', () => {
			const expected = "01:01:01";
			const resp = toHHMMSS(3661);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 01:01:01', () => {
			const expected = "01:01:01";
			const resp = toHHMMSS(3661);
			expect(resp).toEqual(expected);
		});
		it('should return the correct time for Test 01:01:01', () => {
			const expected = "01:01:01";
			const resp = toHHMMSS(3661);
			expect(resp).toEqual(expected);
		});
	});
	describe('formatMoney - Unit Tests', () => {
		it('should return the correct Money formatted for USD default for "0.00"', () => {
			const expected = "$0.00";
			const resp = formatMoney(0);
			expect(resp).toEqual(expected);
		});
		it('should return the correct Money formatted for USD default for "0.123"', () => {
			const expected = "$0.12";
			const resp = formatMoney(0.123);
			expect(resp).toEqual(expected);
		});
		it('should return the correct Money formatted for USD default for "1"', () => {
			const expected = "$1.00";
			const resp = formatMoney(1);
			expect(resp).toEqual(expected);
		});
		it('should return the correct Money formatted for USD default for "1.1"', () => {
			const expected = "$1.10";
			const resp = formatMoney(1.1);
			expect(resp).toEqual(expected);
		});
		it('should return the correct Money formatted for USD default for "1.12"', () => {
			const expected = "$1.12";
			const resp = formatMoney(1.12);
			expect(resp).toEqual(expected);
		});
		it('should return the correct Money formatted for USD default for "1.123"', () => {
			const expected = "$1.12";
			const resp = formatMoney(1.123);
			expect(resp).toEqual(expected);
		});
		it('should return the correct Money formatted for USD default for "1234.567"', () => {
			const expected = "$1,234.57";
			const resp = formatMoney(1234.567);
			expect(resp).toEqual(expected);
		});
		it('should return the correct Money formatted for USD default for "1234567.890"', () => {
			const expected = "$1,234,567.89";
			const resp = formatMoney(1234567.890);
			expect(resp).toEqual(expected);
		});
	});
});
