(weather => {

  // Time
  let date = new Date();
  let hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;
  let min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;
  let day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;
  let time = month + "/" + day + "/" + year + " " + hour + ":" + min;

  // GeoLocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendRequest);
  } else {
    $("#description").html("Geolocation is not supported by this browser.");
  }

  // Get Weather Data
  function sendRequest(position) {
    let url = "https://fcc-weather-api.glitch.me/api/current?lat="
      + position.coords.latitude + "&lon=" + position.coords.longitude;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let data = JSON.parse(xmlhttp.responseText);
        let weather = {};
        weather.description = data.weather[0].description;
        weather.temp = data.main.temp;
        weather.humidity = data.main.humidity;
        weather.wind = data.wind.speed;
        update(weather);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

  // Update HTML
  function update(weather) {
    $("#time").html(time);    
    $("#description").html(weather.description);
    $("#temp").html(weather.temp + "°C");
    $("#humidity").html("Humidity: " + weather.humidity + "%");
    $("#wind").html("Wind Speed: " + weather.wind + " mph");
  }

})();