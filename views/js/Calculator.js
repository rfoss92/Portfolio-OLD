"use strict";var bottomNo="",topNo="",buttonValue=0,solution="",operators=["+","-","/","*"];$("button").click(function(){buttonValue=$(this).val(),"="!=buttonValue&&-1<operators.indexOf(buttonValue)?(solution+=bottomNo,solution=eval(solution),$("#bottom").html(solution),solution+=buttonValue,topNo+=bottomNo,topNo+=buttonValue,$("#top").html(topNo),bottomNo=""):"="!=buttonValue&&(bottomNo+=buttonValue,$("#bottom").html(bottomNo))}),$("#equalButton").click(function(){solution+=bottomNo,solution=eval(solution),$("#top").html("&nbsp"),$("#bottom").html(solution),topNo=solution,bottomNo=""}),$("#ac").click(function(){$("#top").html("&nbsp"),$("#bottom").html(0),solution=bottomNo=topNo=""}),$("#ce").click(function(){$("#bottom").html(0),bottomNo=""});