// Time
(() => {
  var date = new Date();
  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;
  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;
  var day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  var time = month + "/" + day + "/" + year + " " + hour + ":" + min;
  $("#time").html(time);
})();

// GeoLocation
(() => {
  var temp = $("#temperature");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendRequest);
  } else {
    $("#description").html("Geolocation is not supported by this browser.");
  }
})();

// Get Weather Data
function sendRequest(position) {
  var url = "https://fcc-weather-api.glitch.me/api/current?lat="
    + position.coords.latitude + "&lon=" + position.coords.longitude;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
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
  $("#description").html(weather.description);
  $("#temp").html(weather.temp + "°C");
  $("#humidity").html("Humidity: " + weather.humidity + "%");
  $("#wind").html("Wind Speed: " + weather.wind + " mph");
}
