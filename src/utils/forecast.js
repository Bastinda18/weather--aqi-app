const request = require('postman-request');

const forecast = (key, callback) => {
	const url = `http://dataservice.accuweather.com//forecasts/v1/daily/5day/${key}?apikey=SEGq05mD8xPWUdJNsG6GCZ5ctcVPG2qv&details=true&metric=true`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (body.error) {
			callback('Unable to find location!', undefined);
		} else if (body.Message) {
			//remove after dummyData and put undefined
			callback(body.Message, undefined);
		} else {
			const forecastDataArray = body.DailyForecasts.map((day) => {
				return {
					date: day.Date,
					sun: [ day.Sun.Rise, day.Sun.Set ],
					moon: day.Moon.Age,
					temperature: day.Temperature.Maximum.Value,
					airQuality: [ day.AirAndPollen[0].Value, day.AirAndPollen[0].Category ],
					day: {
						prase: day.Day.IconPhrase,
						icon: day.Day.Icon,
						precip: day.Day.PrecipitationProbability
					},
					night: {
						prase: day.Night.IconPhrase,
						precip: day.Night.PrecipitationProbability
					}
				};
			});
			callback(undefined, forecastDataArray);
		}
	});
};

module.exports = forecast;
