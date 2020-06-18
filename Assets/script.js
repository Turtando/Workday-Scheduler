// Global Vars for hours
var hour1 = document.getElementById("hour1");
var hour2 = document.getElementById("hour2");
var hour3 = document.getElementById("hour3");
var hour4 = document.getElementById("hour4");
var hour5 = document.getElementById("hour5");
var hour6 = document.getElementById("hour6");
var hour7 = document.getElementById("hour7");
var hour8 = document.getElementById("hour8");
var hour9 = document.getElementById("hour9");


// array of time slot objects and their equivalent values
const timeSlots = [
    { name: "9am", value: 9 }, { name: "10am", value: 10 }, { name: "11am", value: 11 }, { name: "12pm", value: 12 },
    { name: "1pm", value: 13 }, { name: "2pm", value: 14 }, { name: "3pm", value: 15 }, { name: "4pm", value: 16 },
    { name: "5pm", value: 17 }
];


// testing values
console.log(timeSlots[3].value)
console.log(timeSlots)

// Function for present time in momentJs
let currentHour = parseInt(moment().format('H'));
console.log(currentHour)

// Date function
var date = moment().format('MMMM Do YYYY');
document.getElementById("live-date").innerHTML = date;
console.log(date)


// we will use our array to function as how we color "Past" "Present" "Future"
// well use the function "setColor"
function setColor() {

    if (currentHour > timeSlots[0].value) {
        document.getElementById("hour1").style.backgroundColor = "grey";
    } else if (currentHour === timeSlots[0].value) {
        document.getElementById("hour1").style.backgroundColor = "red";
    } else if (currentHour < timeSlots[0].value)
    document.getElementById("hour1").style.backgroundColor = "green";


    if (currentHour > timeSlots[1].value) {
        document.getElementById("hour2").style.backgroundColor = "grey"
    } else if (currentHour === timeSlots[1].value) {
        document.getElementById("hour2").style.backgroundColor = "red"
    } else if (currentHour < timeSlots[1].value)
    document.getElementById("hour2").style.backgroundColor = "green"


    if (currentHour > timeSlots[2].value) {
        document.getElementById("hour3").style.backgroundColor = "grey"
    } else if (currentHour === timeSlots[2].value) {
        document.getElementById("hour3").style.backgroundColor = "red"
    } else if (currentHour < timeSlots[2].value)
    document.getElementById("hour3").style.backgroundColor = "green"


    if (currentHour > timeSlots[3].value) {
        document.getElementById("hour4").style.backgroundColor = "grey"
    } else if (currentHour === timeSlots[3].value) {
        document.getElementById("hour4").style.backgroundColor = "red"
    } else if (currentHour < timeSlots[3].value)
    document.getElementById("hour4").style.backgroundColor = "green"


    if (currentHour > timeSlots[4].value) {
        document.getElementById("hour5").style.backgroundColor = "grey"
    } else if (currentHour === timeSlots[4].value) {
        document.getElementById("hour5").style.backgroundColor = "red"
    } else if (currentHour < timeSlots[4].value)
    document.getElementById("hour5").style.backgroundColor = "green"


    if (currentHour > timeSlots[5].value) {
        document.getElementById("hour6").style.backgroundColor = "grey"
    } else if (currentHour === timeSlots[5].value) {
        document.getElementById("hour6").style.backgroundColor = "red"
    } else if (currentHour < timeSlots[5].value)
    document.getElementById("hour6").style.backgroundColor = "green"


    if (currentHour > timeSlots[6].value) {
        document.getElementById("hour7").style.backgroundColor = "grey"
    } else if (currentHour === timeSlots[6].value) {
        document.getElementById("hour7").style.backgroundColor = "red"
    } else if (currentHour < timeSlots[6].value)
    document.getElementById("hour7").style.backgroundColor = "green"


    if (currentHour > timeSlots[7].value) {
        document.getElementById("hour8").style.backgroundColor = "grey"
    } else if (currentHour === timeSlots[7].value) {
        document.getElementById("hour8").style.backgroundColor = "red"
    } else if (currentHour < timeSlots[7].value)
    document.getElementById("hour8").style.backgroundColor = "green"


    if (currentHour > timeSlots[8].value) {
        document.getElementById("hour9").style.backgroundColor = "grey"
    } else if (currentHour === timeSlots[8].value) {
        document.getElementById("hour9").style.backgroundColor = "red"
    } else if (currentHour < timeSlots[8].value)
    document.getElementById("hour9").style.backgroundColor = "green"
}

setColor();




// Clock Function
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("live-clock").innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

//Saving Function

var arrInput = JSON.parse(localStorage.getItem("text")) || []
$(".saveBtn").on("click", function(){
var input = $(this).siblings("textarea").val()
var time = $(this).siblings("section").html()
arrInput.push({
        notes: input,
        time: time
    })
localStorage.setItem("text", JSON.stringify(arrInput));
})
// this for loop will allow us to loop through the timeslots and fill the according time 
// block with its notes.
for (var i = 0; i < arrInput.length; i++) {
    var notes = arrInput[i].notes;
    var time = arrInput[i].time;
    $("section").each(function(){
        if ($(this).html() == time){
            $(this).siblings("textarea").html(notes)
        }
    })
} 

