const displayDummyData = (root) => {
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

	const message = `
                

                 <div class="current">
      <div class="current--weather">
        <h2>Current Weather:</h2>
        <p id="temperature">35&#176;C</p>
        <p>Sunny</p>
        <div class="sky-bodies">
        <div class="sky-bodies--sun">
        <img src="../img/sun.png" alt="sun">
        <p>Sunrise: 6:00 a.m.</p>
        <p>Sunset: 7:00 p.m.</p>
        </div>
        <div class="sky-bodies--moon">
        <img src="../img/moon.png" alt="moon">
        <p>Day: 26</p>
       </div>
        </div>
      </div>
      <div class="current--condition">
        <div class="current--condition-data">
          <p>Pressure<p>
            <p class="current--condition-data-descr">1017 hPa</p>
          </div>
         <div class="current--condition-data">
          <p>Precipitation<p>
            <p class="current--condition-data-descr">40 mm</p>
          </div>
         <div class="current--condition-data">
          <p>Humidity<p>
            <p class="current--condition-data-descr">45 %</p>
          </div>
      </div>
      <div class="current--aqi">
        <div class="current--aqi-placeholder" style=${AQIndex(15)}>
           <div class="current--aqi-placeholder-top">
          <h3>AQI</h3>
             <p class="aqi-number">15</p>
             <p>Good</p>
        </div>
        </div>
          
        </div>
    </div>
    <div class="forecast">

      <div class="forecast--cell">
        <h3>Tomorrow:</h3>
        <img src="https://developer.accuweather.com/sites/default/files/01-s.png" alt="Sunny">
          <p>32&#176;C</p>
          <p class="forecast--cell-description">Sunny</p>
          
        </div>
        <div class="forecast--cell">
        <h3>Tomorrow:</h3>
        <img src="https://developer.accuweather.com/sites/default/files/01-s.png" alt="Sunny">
          <p>32&#176;C</p>
          <p class="forecast--cell-description">Sunny</p>
          
        </div>
        <div class="forecast--cell">
        <h3>Tomorrow:</h3>
        <img src="https://developer.accuweather.com/sites/default/files/01-s.png" alt="Sunny">
          <p>32&#176;C</p>
          <p class="forecast--cell-description">Sunny</p>
          
        </div>
        <div class="forecast--cell">
        <h3>Tomorrow:</h3>
        <img src="https://developer.accuweather.com/sites/default/files/01-s.png" alt="Sunny">
          <p>32&#176;C</p>
          <p class="forecast--cell-description">Sunny</p>
          
        </div>
      </div>
    
    
                `;

	saferInnerHTML(root, message);
};
