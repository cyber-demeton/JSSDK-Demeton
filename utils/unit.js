
"use strict";

var BigNumber = require('bignumber.js');
var utils = require('./utils.js');

var unitMap = {
    'none':       '0',
    'None':       '0',
    'wei':        '1',
    'Wei':        '1',
    'demt':        '10000',
    'DEMT':        '10000',
 };

var unitValue = function (unit) {
	unit = unit ? unit.toLowerCase() : 'demt';
    var unitValue = unitMap[unit];
    if (unitValue === undefined) {
        throw new Error('The unit undefined, please use the following units:' + JSON.stringify(unitMap, null, 2));
    }
    return new BigNumber(unitValue, 10);
};

var toBasic = function (number, unit) {
	return utils.toBigNumber(number).times(unitValue(unit));
};

var fromBasic = function (number, unit) {
	return utils.toBigNumber(number).dividedBy(unitValue(unit));
};

var demtToBasic = function (number) {
	return utils.toBigNumber(number).times(unitValue("demt"));
};

module.exports = {
	toBasic: toBasic,
	fromBasic: fromBasic,
	demtToBasic: demtToBasic
};
