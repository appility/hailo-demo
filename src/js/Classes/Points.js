/* global pointsData*/
var App = App || {};

App.Points = function () {
	'use strict';
	this.routeLength = null;
	this.extimatedSpeed = null;
	this.temp = [];
	this.list = [];
};

App.Points.prototype.fetch = function(callback) {
	// just using global data object for now, workaround for no 'allow-file-access-from-files' in Chrome
	this.temp = pointsData;
	this.filter(callback);
};


App.Points.prototype.isFeasible = function(pointA, pointB) {
	if (!this.estimatedSpeed) {
		this.estimatedSpeed = this.getEstimatedSpeed();
	}
	var time = App.Utils.Distance.calculateTimeBetween(pointA, pointB, this.estimatedSpeed);
	if (time > 1) {
		return false;
	}
	return true;
};


App.Points.prototype.filter = function(callback) {
	var l = this.temp.length;
	this.add(new App.Point(this.temp[0]));
	for (var i=1; i<l; ++i) {
		var pointA =  new App.Point(this.temp[i]);
		var pointB =  new App.Point(this.temp[i-1]);
		this.provisionalAdd(pointA, pointB);
	}
	delete this.temp;
	if (callback) {
		callback(this.list);
	}
};

App.Points.prototype.provisionalAdd = function(point, prevPoint) {
	if (point.isValid() && this.isFeasible(point, prevPoint)) {
		this.add(point);
	}
};

App.Points.prototype.add = function(point) {
	this.list.push(point);
};

App.Points.prototype.getEstimatedSpeed = function() {
	var start = this.temp[0];
	var end = this.temp[this.temp.length-1];
	var duration = (end.timestamp - start.timestamp)/60;
	var distance = App.Utils.Distance.calculateDistance(start, end);
	return ((distance/1000) * ( 60/duration ));
};
