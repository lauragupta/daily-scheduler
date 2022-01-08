function getDayAndTime() {
    var date = moment().format("dddd MMMM Do");
    $("#currentDay").text(date);
    changeHour();
    getProjects();
}   

setInterval(getDayAndTime, 1000);

function getProjects() {
    var currentProjects = JSON.parse(localStorage.getItem("currentProjects"));
    if (currentProjects === null) {
        return {};
    }
    return currentProjects
}

// function renderProjects() {

// }

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
    console.log(buttonID);
    console.log(savedProject);
    currentProjects = getProjects();
    currentProjects[buttonID] = savedProject;
    localStorage.setItem("currentProjects", JSON.stringify(currentProjects));
}

$(".saveBtn").on("click", saveProject);

 // var currentProjects = {
    //     8: project8, 
    //     9: project9,
    //     10: project10,
    //     11: project11,
    //     12: project12,
    //     13: project13,
    //     14: project14,
    //     15: project15, 
    //     16: project16, 
    //     17: project17,
    // };