// Global Vars
const rows = document.getElementsByClassName("row");
let timeSlots = [
    { name: "9am", value: 9 }, { name: "10am", value: 10 }, { name: "11am", value: 11 }, { name: "12pm", value: 12 },
    { name: "1pm", value: 13 }, { name: "2pm", value: 14 }, { name: "3pm", value: 15 }, { name: "4pm", value: 16 },
    { name: "5pm", value: 17 }
];

// Date function
var date = moment().format('MMMM Do YYYY');
document.getElementById("live-date").innerHTML = date;

// Time Function
// we will view this function as how we color "Past" "Present" "Future"
var time = new Date().getHours();
console.log(time)

if (timeSlots.value === time) {
    document.textContent.style.backgroundColor="red"
} else if (timeSlots.value < time) {

}


// Array.from(timeSlots).forEach(row => {
//     let
//         rowIdString = row.id,
//         rowHour;
//     if (rowIdString) {
//         rowHour = parseInt(rowIdString);
//     }
//     if (timeSlots.value === today.getHours()) {
//         setColor(textArea, "red")
//     }
// })




// // Clock Function
// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
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