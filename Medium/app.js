// const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// let monthNum = prompt("Enter a Number between 1 - 12")
// if (month = 1 )

// }

var monthNum = prompt("Enter a Number between 1 - 12");
var month = null;

if (monthNum == 1) {
  month = "Jan";
} else if (monthNum == 2) {
  month = "Feb";
} else if (monthNum == 3) {
  month = "Mar";
} else if (monthNum == 4) {
  month = "Apr";
} else if (monthNum == 5) {
  month = "May";
} else if (monthNum == 6) {
  month = "Jun";
} else if (monthNum == 7) {
  month = "Jul";
} else if (monthNum == 8) {
  month = "Aug";
} else if (monthNum == 9) {
  month = "Sep";
} else if (monthNum == 10) {
  month = "Oct";
} else if (monthNum == 11) {
  month = "Nov";
} else if (monthNum == 12) {
  month = "Dec";
} else {
  month = "Enter a Valid Number";
}
console.log(month);
