const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3001;

const geocode = require('./utils/geocode');
const locationKey = require('./utils/locationKey');
const forecast = require('./utils/forecast');
const forecastCurrent = require('./utils/forecastCurrent');

// Define paths for Express configs
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and vies location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
	res.render('index', {
		title: 'AQI App',
		name: 'Maria Zebroff'
	});
});

app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({ error: 'You must provide an address!' });
	}

	geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return res.send({ error });
		}
		forecastCurrent(latitude, longitude, (error, forecastDataCurrent) => {
			if (error) {
				return res.send({ error });
			}

			locationKey(latitude, longitude, (error, key) => {
				if (error) {
					return res.send({ error });
				}

				forecast(key, (error, forecastData = []) => {
					if (error) {
						return res.send({ error });
					}

					return res.send({
						location,
						forecastCurrent: forecastDataCurrent,
						forecast: forecastData,
						address: req.query.address
					});
				});
			});
		});
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Maria Zebroff',
		message: 'Page not found'
	});
});

app.listen(port, () => {
	console.log('Server is app on port ' + port);
});
