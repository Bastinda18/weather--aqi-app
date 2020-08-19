const displayMeteoData = (data, root) => {
	const AQIndex = (aqIndex) => {
		if (aqIndex <= 50) {
			return 'background:#00ff99;';
		} else if (aqIndex <= 100) {
			return 'background:#ffff00;';
		} else if (aqIndex <= 150) {
			return 'background:#ff9933;';
		} else if (aqIndex <= 200) {
			return 'background:#ff0000;';
		} else {
			return 'background:#990033;';
		}
	};
	const getWeekDay = (givenDate) => {
		const date = new Date(givenDate);
		//Create an array containing each day, starting with Sunday.
		const weekdays = new Array(
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		);
		//Use the getDay() method to get the day.
		const day = date.getDay();
		//Return the element that corresponds to that index.
		return weekdays[day];
	};

	const message = `
                <div class="current">
      <div class="current--weather">
        <h2>Current Weather:</h2>
        <p id="temperature">${data.forecastCurrent.currentTemp}&#176;C</p>
        <p>${data.forecastCurrent.weather_description}</p>
        <div class="sky-bodies">
        <div class="sky-bodies--sun">
        <img src="../img/sun.png" alt="sun">
        <p>Sunrise: ${data.forecast[0].sun[0]
			.split('T')[1]
			.split('-')[0]
			.split(':', 2)
			.toString()
			.replace(',', ':')} a.m.</p>
        <p>Sunset: ${data.forecast[0].sun[1]
			.split('T')[1]
			.split('-')[0]
			.split(':', 2)
			.toString()
			.replace(',', ':')} p.m.</p>
        </div>
        <div class="sky-bodies--moon">
        <img src="../img/moon.png" alt="moon">
        <p>Day: ${data.forecast[0].moon}</p>
       </div>
        </div>
      </div>
      <div class="current--condition">
        <div class="current--condition-data">
          <p>Pressure<p>
            <p class="current--condition-data-descr">${data.forecastCurrent.pressure} hPa</p>
          </div>
         <div class="current--condition-data">
          <p>Precipitation<p>
            <p class="current--condition-data-descr">${data.forecastCurrent.pressure} mm</p>
          </div>
         <div class="current--condition-data">
          <p>Humidity<p>
            <p class="current--condition-data-descr">${data.forecastCurrent.humidity} %</p>
          </div>
      </div>
      <div class="current--aqi">
        <div class="current--aqi-placeholder" style=${AQIndex(data.forecast[0].airQuality[0])}>
           <div class="current--aqi-placeholder-top">
          <h3>AQI</h3>
             <p class="aqi-number">${data.forecast[0].airQuality[0]}</p>
             <p>${data.forecast[0].airQuality[1]}</p>
        </div>
        </div>
          
        </div>
    </div>
    <div class="forecast">

      <div class="forecast--cell">
        <h3>Tomorrow:</h3>
        <img src="https://developer.accuweather.com/sites/default/files/${data.forecast[1].day
			.icon > 9
			? data.forecast[1].day.icon
			: '0' + data.forecast[1].day.icon}-s.png" alt="${data.forecast[1].day.prase}">
          <p>${data.forecast[1].temperature}&#176;C</p>
          <p class="forecast--cell-description">${data.forecast[1].day.prase}</p>
          
        </div>
     <div class="forecast--cell">
        <h3>${getWeekDay(data.forecast[2].date)}:</h3>
        <img src="https://developer.accuweather.com/sites/default/files/${data.forecast[2].day
			.icon > 9
			? data.forecast[2].day.icon
			: '0' + data.forecast[2].day.icon}-s.png" alt="${data.forecast[2].day.prase}">
          <p>${data.forecast[2].temperature}&#176;C</p>
          <p class="forecast--cell-description">${data.forecast[2].day.prase}</p>
        </div>
      <div class="forecast--cell">
        <h3>${getWeekDay(data.forecast[3].date)}:</h3>
        <img src="https://developer.accuweather.com/sites/default/files/${data.forecast[3].day
			.icon > 9
			? data.forecast[3].day.icon
			: '0' + data.forecast[3].day.icon}-s.png" alt="${data.forecast[3].day.prase}">
          <p>${data.forecast[3].temperature}&#176;C</p>
          <p class="forecast--cell-description">${data.forecast[3].day.prase}</p>
        </div>
      <div class="forecast--cell">
        <h3>${getWeekDay(data.forecast[4].date)}:</h3>
        <img src="https://developer.accuweather.com/sites/default/files/${data.forecast[4].day
			.icon > 9
			? data.forecast[4].day.icon
			: '0' + data.forecast[4].day.icon}-s.png" alt="${data.forecast[4].day.prase}">
          <p>${data.forecast[4].temperature}&#176;C</p>
          <p  class="forecast--cell-description">${data.forecast[4].day.prase}</p>
          
        </div>
      </div>
    
    
                `;

	saferInnerHTML(root, message);
};
