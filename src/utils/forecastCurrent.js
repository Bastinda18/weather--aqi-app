const request = require('postman-request');

const forecastCurrent = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=54dd788ed06930d5be8e3128bed4f4b1&query=${latitude},${longitude}&units=m`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (body.error) {
			callback('Unable to find location!', undefined);
		} else {
			callback(undefined, {
				weather_description: body.current.weather_descriptions[0],
				currentTemp: body.current.temperature,
				pressure: body.current.pressure,
				precip: body.current.precip,
				humidity: body.current.humidity
			});
		}
	});
};

module.exports = forecastCurrent;
