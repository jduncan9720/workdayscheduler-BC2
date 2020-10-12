// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentTime = moment().format('h:mm:ss a');
var currentHour = moment().format('ha');

function renderHour() {
    var hourId = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
    for (let i = 0; i < hourId.length; i++) {
        var hourDiv = $("<div>", {
            "class": "row",
            "id": hourId[i]
        })
            .append('<div class="hour col-lg-2">')
            .append('<textarea class="col-lg-8">')
            .append('<div class="saveBtn col-lg-2">')

        $("#timeSheet").append(hourDiv)
    }
   renderClock()
}

function renderClock() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    setTimeout(renderClock, 1000);
};
