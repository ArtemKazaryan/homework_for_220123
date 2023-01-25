/* weather.js */
export const getWeather = city => {
	// my code
  const checkForNewNotifications = () => {
    fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/${city}.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data.current.temperature);
        return showTemperature(data)
      });
      
  }
  
  
  // Sample usage - do not modify
  const result = checkForNewNotifications();
  
}

// Do NOT modify the code below
const city = document.querySelector("#city");

const showTemperature = currentCityTemperature => {
  const currentCity = currentCityTemperature.location.name;
  
  const currentTemperature = currentCityTemperature.current.temperature;

  city.textContent = `${currentCity} ${currentTemperature} degrees celsius`;
}
