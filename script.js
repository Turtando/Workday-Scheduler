// Global Vars
var row = document.getElementsByClassName("row");
console.log(row)
var timeSlots = [
    { name: "9am", value: 9 }, { name: "10am", value: 10 }, { name: "11am", value: 11 }, { name: "12pm", value: 12 },
    { name: "1pm", value: 13 }, { name: "2pm", value: 14 }, { name: "3pm", value: 15 }, { name: "4pm", value: 16 },
    { name: "5pm", value: 17 }
];
console.log(timeSlots[0].value)
console.log(timeSlots.value)

// Function for present time
let currentHour = parseInt(moment().format('H'));
console.log(currentHour)

// Date function
var date = moment().format('MMMM Do YYYY');
document.getElementById("live-date").innerHTML = date;
console.log(date)
// Color Function
// we will view this function as how we color "Past" "Present" "Future"
function addColor() {

}
// // Clock Function
// function startTime() {
//     
//     
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     h = checkTime(h);
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('live-clock').innerHTML =
//         h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//     if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
//     return i;
// }