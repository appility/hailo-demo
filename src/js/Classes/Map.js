/* global L, _ */
var App = App || {};

App.Map = function (selector) {
	'use strict';
	this.el = document.getElementById(selector);
	this.create();
};

App.Map.prototype.create = function() {
	var map = this.map = L.map(this.el, {
		zoomControl: true
	});

	L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
			maxZoom: 18,
			minZoom: 12,
			attribution: 'Map data &copy; OpenStreetMap contributors, CC-BY-SA, Imagery © OpenStreetMap',
			detectRetina: true
		}).addTo(map);
};

App.Map.prototype.getPoints = function () {
	var points = new App.Points();
	var callback = _.bind(function (data) {
		this.showPoints(data);
	}, this);
	points.fetch(callback);
};

App.Map.prototype.showPoints = function(data) {
	var latlngs = [];
	var len = data.length;
	for (var i=0; i<len; ++i) {
		var latlng = new L.LatLng(data[i].latitude, data[i].longitude);
		latlngs.push(latlng);
	}
	var polyline = L.polyline(latlngs, {
		color: 'black',
		weight: 3,
		opacity: 0.6
	}).addTo(this.map);
	L.circle(new L.LatLng(data[0].latitude, data[0].longitude), 30, {
		color: 'green',
		fillColor: 'green',
		fillOpacity: 1
	}).addTo(this.map);
	L.circle(new L.LatLng(data[len-1].latitude, data[len-1].longitude), 30, {
		color: 'red',
		fillColor: 'red',
		fillOpacity: 1
	}).addTo(this.map);
	this.map.fitBounds(polyline.getBounds());
};
