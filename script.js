function init() {
    renderProjects();
    setInterval(getDayAndTime, 1000);
    $(".saveBtn").on("click", saveProject);
}

init();

function getDayAndTime() {
    var date = moment().format("dddd MMMM Do");
    $("#currentDay").text(date);
    changeHour();
}   

function getProjects() {
    var currentProjects = JSON.parse(localStorage.getItem("currentProjects"));
    if (currentProjects === null) {
        return {};
    }
    return currentProjects
}

function renderProjects() {
    var currentProjects = getProjects();
    $.each(currentProjects, function( key, value ) {
        $(`textarea[data-id='${key}']`).val(value);
      });
}

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

function saveProject(event) {
    var $clickedButton = $(event.target);
    var buttonID = $clickedButton.data("id");
    var savedProject = $clickedButton.prev().val();
    var currentProjects = getProjects();
    currentProjects[buttonID] = savedProject;
    localStorage.setItem("currentProjects", JSON.stringify(currentProjects));
}
