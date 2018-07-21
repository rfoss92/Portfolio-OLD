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

  if ($("#description").html() === "few clouds" || "broken clouds"){
    $('body').css('background-image', 'url(https://static.pexels.com/photos/113/sky-clouds-cloudy-weather-medium.jpg)');
  }
  if ($("#description").html() === "overcast clouds" || "scattered clouds"){
    $('body').css('background-image', 'url(https://static.pexels.com/photos/6566/sea-sky-clouds-weather-medium.jpg)');
  }
  if ($("#description").html() === "thunderstorms"){
    $('body').css('background-image', 'url(https://static.pexels.com/photos/799/city-lights-night-clouds-medium.jpg)');
  }
  if ($("#description").html() === "chance of rain"){
    $('body').css('background-image', 'url(https://static.pexels.com/photos/896/city-weather-glass-skyscrapers-medium.jpg)');
  }
  if ($("#description").html() === "light snow"){
    $('body').css('background-image', 'url(https://static.pexels.com/photos/4022/cold-snow-forest-trees-medium.jpeg)');
  }
  if ($("#description").html() === "sunny"){
    $('body').css('background-image', 'url(https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy-medium.jpg)');
  }
  if ($("#description").html() === "foggy"){
    $('body').css('background-image', 'url(https://static.pexels.com/photos/6923/mountains-fog-green-beauty-large.jpg)');
  }

  $("#temp").html(weather.temp + "°C");
  $("#humidity").html("Humidity: " + weather.humidity + "%");
  $("#wind").html("Wind Speed: " + weather.wind + " mph");
}