
var hours = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];

var schedule = null;
var schedule = localStorage.getItem("schedule");


if (schedule != null){
    schedule = JSON.parse(schedule);
}   
else
{
    schedule=[];
    hours.forEach( function(e){ schedule.push(""); } );
}


// add fmt() function to String class
String.prototype.fmt = function() {
    var args = arguments;
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
        return args[n];
        });
};

