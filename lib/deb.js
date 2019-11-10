
"use strict";

var API = require("./api.js");
var Admin = require("./admin.js");

var Unit = require("./utils/unit.js");

/**
 * Deb API library constructor.
 * @constructor
 * @param {Request} request - transport wrapper.
 */
var Deb = function (request) {
	if (request) {
		this._request = request;
	}

	this.api = new API(this);
	this.admin = new Admin(this);
};

Deb.prototype.setRequest = function (request) {
	this._request = request;
	this.api._setRequest(request);
	this.admin._setRequest(request);
};

Deb.prototype.toBasic = Unit.toBasic;
Deb.prototype.fromBasic = Unit.fromBasic;
Deb.prototype.demtToBasic = Unit.demtToBasic;

module.exports = Deb;
