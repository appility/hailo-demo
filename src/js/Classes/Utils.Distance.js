var App = App || {};

App.Utils = App.Utils || {};

App.Utils.Distance = (function () {

	function calculateTimeBetween (pointA, pointB, speed) {
		var distance = calculateDistance(pointA, pointB);
		var minutesPerKm = 60/speed;
		var distanceInKm = distance/1000;
		return (distanceInKm * minutesPerKm);
	}

	function calculateDistance (pointA, pointB) {
		var Rk = 6373; // mean radius of the earth (km) at 39 degrees from the equator
		var lat1, lon1, lat2, lon2, dlat, dlon, a, c, dk, d;
	
		// convert coordinates to radians
		lat1 = deg2rad(pointA.latitude);
		lon1 = deg2rad(pointA.longitude);
		lat2 = deg2rad(pointB.latitude);
		lon2 = deg2rad(pointB.longitude);
		
		// find the differences between the coordinates
		dlat = lat2 - lat1;
		dlon = lon2 - lon1;
		
		// maths
		a  = Math.pow(Math.sin(dlat/2),2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon/2),2);
		c  = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); // great circle distance in radians
		
		dk = c * Rk; // great circle distance in km

		d = round(dk);
		return d;
	}

	function deg2rad (deg) {
		var rad = deg * Math.PI/180; // radians = degrees * pi/180
		return rad;
	}

	function round (x) {
		return Math.round( x * 1000);
	}

	return {
		calculateTimeBetween: calculateTimeBetween,
		calculateDistance: calculateDistance,
		deg2rad: deg2rad
	};
}());