var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentTime = moment().format('h:mm:ss a');
var currentHour = moment().format('ha');

//Create the rows and columns along with classes etc on body load. 
function renderHour() {
    // var hourName =["nineAm", "tenAm", "elevenAm", "twelvePm", "onePm", "twoPm", "threePm", "fourPm", "fivePm"]
    var hourId = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
    for (let i = 0; i < hourId.length; i++) {
        $("#timeSheet").append([
            $('<div>', { "class": "row" }).append([
                $('<div>', { "class": "hour col-lg-2" }),
                $('<textarea>', { "class": "text col-lg-8", "id": hourId[i] }),
                $('<div>', { "class": "saveBtn col-lg-2" }),
            ])
        ])
    }
    renderClock()
    hourly()
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

            break;
        case "10am":

            break;
        case "11am":

            break;
        case "12pm":

            break;
        case "1pm":

            break;
        case "2pm":
            $("#2pm").addClass("present")
            break;
        case "3pm":
            $("#3pm").addClass("present");
            break;
        case "4pm":
            // $(".text").removeClass("")
            $("#4pm").addClass("present");
            // $(this).prevAll('.text').addClass("past");
            // $(this).nextAll('.text').addClass("future");
            break;
        case "5pm":

            break;  
    }
    setTimeout(hourly, 1000);
}
