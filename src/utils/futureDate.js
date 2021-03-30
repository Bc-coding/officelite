const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// get the date now
let tempDateNow = new Date();
let tempYear = tempDateNow.getFullYear();
let tempMonth = tempDateNow.getMonth();
let tempDate = tempDateNow.getDate();

// Set 1 month from now
// futureDate = new Date (2021, 04, 30)
let futureDate = new Date(tempYear, tempMonth + 1, tempDate);
let year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month + 1];
let date = futureDate.getDate();

export let dueDate = [date, month, year];

/************ Calculate remaining time and show countdown timer ************/
export function getRemainingTime() {
  //  future time in ms
  const futureTime = futureDate.getTime();
  // subtracting current time off future time

  const currentTime = new Date().getTime();
  const difference = futureTime - currentTime;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // how many ms in one day?
  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Calculate all values
  let days = difference / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((difference % oneDay) / oneHour);
  let minutes = Math.floor((difference % oneHour) / oneMinute);
  let seconds = Math.floor((difference % oneMinute) / 1000);

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return timeLeft;
}
