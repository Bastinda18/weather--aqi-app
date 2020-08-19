const request = require('postman-request');

const locationKey = (latitude, longitude, callback) => {
	const url = `http://dataservice.accuweather.com//locations/v1/cities/geoposition/search?apikey=SEGq05mD8xPWUdJNsG6GCZ5ctcVPG2qv&q=${latitude}%2C${longitude}`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (body.error) {
			callback('Unable to find location!', undefined);
		} else {
			callback(undefined, body.Key);
		}
	});
};

module.exports = locationKey;
