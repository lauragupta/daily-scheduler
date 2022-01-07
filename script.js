function getDay() {
    var date = moment().format("dddd MMMM Do");
    $("#currentDay").text(date);
}   

setInterval(getDay, 1000);


