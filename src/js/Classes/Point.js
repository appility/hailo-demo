/* global _ */

var App = App || {};

App.Point = function (obj) {
	'use strict';
	return _.extend(this, obj);
};

App.Point.prototype.isValid = function() {
	return (this.isLatitude() && this.isLongitude() && this.isTimestamp());
};

App.Point.prototype.isLatitude = function() {
	return (this.latitude && this.latitude !== '' && this.latitude > -90 && this.latitude < 90);
};

App.Point.prototype.isLongitude = function() {
	return (this.longitude && this.longitude !== '' && this.longitude > -180 && this.longitude < 180);
};

App.Point.prototype.isTimestamp = function() {
	return (this.timestamp && this.longitude !== '' && /^\d+$/.test(this.timestamp));
};