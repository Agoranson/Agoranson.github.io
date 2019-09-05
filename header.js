"use strict";

var upcoming_events_y = document.getElementById("upcoming-events").offsetTop; 
var monthly_meeting_y = document.getElementById("monthly-meeting").offsetTop; 

function smartSetColor(color) {
    var header = document.getElementById("header");
    if (header.style.color !== color) {
        header.style.color = color;
    }
}

document.addEventListener("scroll", function() {
    var current_y = document.documentElement.scrollTop;
    if (current_y < upcoming_events_y) {
        smartSetColor("yellow");
    } else if (current_y >= upcoming_events_y && current_y < monthly_meeting_y) {
        smartSetColor("blue");
    } else {
        smartSetColor("yellow"); 
    }
    console.log(current_y+"Current"); 
    console.log(upcoming_events_y+"upcoming");
    console.log(monthly_meeting_y+"monthly"); 
});