
var hours = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"];

var schedule = ["Cheers mate","Party On","Hello","","","","everything","",""];
var schedule =  JSON.parse(localStorage.getItem("schedule"));

console.log( "START: " + schedule );
console.log( "START: " + typeof schedule );

if ( !(schedule instanceof Array) ){
    console.log( "Reset schedule" );
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

