var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentTime = moment().format('h:mm:ss a');
var currentHour = moment().format('ha');
var btnClick = "";
var clickText = "";
var todos = []
var todosData = localStorage.getItem("todos")
var todosReturned = JSON.parse(todosData);
//Create the rows and columns along with classes etc on body load. 
function renderHour() {
    var hourId = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
    for (let i = 0; i < hourId.length; i++) {
        $("#timeSheet").append([
            $('<div>', { "class": "row" })
                .append([
                    $('<div>', { "class": "hour col-lg-2" }).text(hourId[i]),
                    $('<textarea>', { "class": "text col-lg-8 past", "id": hourId[i] }),
                    $('<div>', { "class": "saveBtn col-lg-2", "id": "save" + [i] }).html('<i class="fas fa-save"></i>')
                ])
        ])
    }
    renderClock()
    hourly()
    displayTodos()
    
}
//Creates live clock in header
function renderClock() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    setTimeout(renderClock, 1000);
};
//Checks for time and changes colors of rows
function hourly() {
    switch (currentHour) {
        case "9am":
            $("#9am").addClass("present").removeClass("future");
            $("#10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("future").removeClass("present past");
            break;
        case "10am":
            $("#10am").addClass("present").removeClass("future");
            $("#9am").addClass("past").removeClass("present");
            $("#11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("future").removeClass("present past");
            break;
        case "11am":
            $("#11am").addClass("present").removeClass("future");
            $("#9am, #10am").addClass("past").removeClass("present");
            $("#12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("future").removeClass("present past");
            break;
        case "12pm":
            $("#12pm").addClass("present").removeClass("future");
            $("#9am, #10am, #11am").addClass("past").removeClass("present");
            $("#1pm, #2pm, #3pm, #4pm, #5pm").addClass("future").removeClass("present past");
            break;
        case "1pm":
            $("#1pm").addClass("present").removeClass("future");
            $("#9am, #10am, #11am, #12pm").addClass("past").removeClass("present");
            $("#2pm, #3pm, #4pm, #5pm").addClass("future").removeClass("present past");
            break;
        case "2pm":
            $("#2pm").addClass("present").removeClass("future");
            $("#9am, #10am, #11am, #12pm, #1pm").addClass("past").removeClass("present");
            $("#3pm, #4pm, #5pm").addClass("future").removeClass("present past");
            break;
        case "3pm":
            $("#3pm").addClass("present").removeClass("future");
            $("#9am, #10am, #11am, #12pm, #1pm, #2pm").addClass("past").removeClass("present");
            $("#4pm, #5pm").addClass("future").removeClass("present past");
            break;
        case "4pm":
            $("#4pm").addClass("present").removeClass("future");
            $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm").addClass("past").removeClass("present");
            $("#5pm").addClass("future").removeClass("present past");
            break;
        case "5pm":
            $("#5pm").addClass("present").removeClass("future");
            $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm").addClass("past").removeClass("present");
            break;
    }
}

$(document).ready(function () {
    $(".saveBtn").click(function () {
        if (JSON.parse(localStorage.getItem("todos")) !== null) {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        btnClick = $(this).attr("id");
        console.log(btnClick)
        clickText = $(this).prev("textarea").val();
        //This also worked
        // clickText = $("#" + btnClick).prev("textarea").val();
        console.log(clickText)
        var todo = {
            "clicked": btnClick,
            "todoText": clickText
        }
        todos.push(todo)
        localStorage.setItem("todos", JSON.stringify(todos))
        
    });
});

function displayTodos() {
    for (let i = 0; i < todosReturned.length; i++) {
        $("#" + todosReturned[i].clicked).prev("textarea").text(todosReturned[i].todoText)  
    }
}

$("#clearTodos").click(function () {
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
    location.reload();
});