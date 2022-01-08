function getDayAndTime() {
    var date = moment().format("dddd MMMM Do");
    $("#currentDay").text(date);
    changeHour();
}   

setInterval(getDayAndTime, 1000);

function checkPastPresentFuture(i, textarea) {
    var $textarea = $(textarea);
    var militaryTimeID = parseInt($textarea.data("id"));
    var currentHour = parseInt(moment().format("HH"));
    if (currentHour === militaryTimeID) {
        $textarea.addClass("present");
    } else if (currentHour > militaryTimeID) {
        $textarea.addClass("past");
    } else if (currentHour < militaryTimeID){
        $textarea.addClass("future");
    }
}

function changeHour() {
    $("textarea").each(checkPastPresentFuture);
}

