"use strict";$("#minutes").html($("#sessionLength").html()),$("#breakMinus").click(function(){0<$("#breakLength").html()&&(document.getElementById("breakLength").innerHTML--,timeleft2=$("#breakLength").html())}),$("#breakPlus").click(function(){document.getElementById("breakLength").innerHTML++,timeleft2=$("#breakLength").html()}),$("#sessionMinus").click(function(){0<$("#sessionLength").html()&&(document.getElementById("sessionLength").innerHTML--,$("#minutes").html($("#sessionLength").html()),minutes=$("#minutes").html(),timeleft3=$("#sessionLength").html())}),$("#sessionPlus").click(function(){document.getElementById("sessionLength").innerHTML++,$("#minutes").html($("#sessionLength").html()),minutes=$("#minutes").html(),timeleft3=$("#sessionLength").html()});var minutes=$("#minutes").html(),timeleft=60,timeleft2=$("#breakLength").html(),timeleft3=$("#sessionLength").html(),sSwitch=1,resetPom=1,pauseStatus=!1,resetStatus=!1,end=0;startButton.onclick=function(){$("#sessionPlus").prop("disabled",!0),$("#sessionMinus").prop("disabled",!0),$("#breakPlus").prop("disabled",!0),$("#breakMinus").prop("disabled",!0),$("#startButton").prop("disabled",!0),pauseButton.onclick=function(){pauseStatus=!0},resetButton.onclick=function(){$("#seconds").html("00"),$("#minutes").html($("#sessionLength").html()),timeleft=60,timeleft2=$("#breakLength").html(),timeleft3=$("#sessionLength").html(),minutes=$("#sessionLength").html(),sSwitch=1,resetStatus=!0,$("#sessionPlus").prop("disabled",!1),$("#sessionMinus").prop("disabled",!1),$("#breakPlus").prop("disabled",!1),$("#breakMinus").prop("disabled",!1)},resume.onclick=function(){resetStatus=pauseStatus=!1,$("#sessionPlus").prop("disabled",!0),$("#sessionMinus").prop("disabled",!0),$("#breakPlus").prop("disabled",!0),$("#breakMinus").prop("disabled",!0)};var t=setInterval(function(e){!1===pauseStatus&&!1===resetStatus&&($("#minutes").html(minutes-1),--timeleft<10?$("#seconds").html("0"+timeleft):$("#seconds").html(timeleft),timeleft<=0&&(minutes--,$("#minutes").html(minutes),timeleft=60,minutes<=0&&((sSwitch*=-1)<0?(document.getElementById("beep").play(),minutes=timeleft2,$("#minutes").html(timeleft2)):(document.getElementById("beep").play(),minutes=timeleft3,$("#minutes").html(timeleft3))),setInterval(t)))},1e3)};