"use strict";function sendRequest(t){var e="https://fcc-weather-api.glitch.me/api/current?lat="+t.coords.latitude+"&lon="+t.coords.longitude,s=new XMLHttpRequest;s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){var t=JSON.parse(s.responseText),e={};e.description=t.weather[0].description,e.temp=t.main.temp,e.humidity=t.main.humidity,e.wind=t.wind.speed,update(e)}},s.open("GET",e,!0),s.send()}function update(t){$("#description").html(t.description),$("#description").html(),$("body").css("background-image","url(https://static.pexels.com/photos/113/sky-clouds-cloudy-weather-medium.jpg)"),$("#description").html(),$("body").css("background-image","url(https://static.pexels.com/photos/6566/sea-sky-clouds-weather-medium.jpg)"),"thunderstorms"===$("#description").html()&&$("body").css("background-image","url(https://static.pexels.com/photos/799/city-lights-night-clouds-medium.jpg)"),"chance of rain"===$("#description").html()&&$("body").css("background-image","url(https://static.pexels.com/photos/896/city-weather-glass-skyscrapers-medium.jpg)"),"light snow"===$("#description").html()&&$("body").css("background-image","url(https://static.pexels.com/photos/4022/cold-snow-forest-trees-medium.jpeg)"),"sunny"===$("#description").html()&&$("body").css("background-image","url(https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy-medium.jpg)"),"foggy"===$("#description").html()&&$("body").css("background-image","url(https://static.pexels.com/photos/6923/mountains-fog-green-beauty-large.jpg)"),$("#temp").html(t.temp+"°C"),$("#humidity").html("Humidity: "+t.humidity+"%"),$("#wind").html("Wind Speed: "+t.wind+" mph")}!function(){var t=new Date,e=t.getHours();e=(e<10?"0":"")+e;var s=t.getMinutes();s=(s<10?"0":"")+s;var o=t.getFullYear(),i=t.getMonth()+1;i=(i<10?"0":"")+i;var n=t.getDate(),c=i+"/"+(n=(n<10?"0":"")+n)+"/"+o+" "+e+":"+s;$("#time").html(c)}(),function(){$("#temperature");navigator.geolocation?navigator.geolocation.getCurrentPosition(sendRequest):$("#description").html("Geolocation is not supported by this browser.")}();