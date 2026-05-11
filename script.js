const button = document.querySelector("#button"); //This stores the button in a variable so we can attach behavior to it.
button.addEventListener("click", (event) => {
  //This listens for a click on the button. When clicked, it runs the function inside.
  event.preventDefault(); //prevents refreshing of the whole page

  let day = parseInt(document.getElementById("day").value); //gets value entered by the user
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let gender = document.getElementById("gender").value;

  let result = document.getElementById("result"); // target for our output

  if (isNaN(day)) {
    alert("Please enter the day");
    return;
  }

  if (isNaN(month)) {
    alert("Please enter the month");
    return;
  }

  if (isNaN(year)) {
    alert("Please enter the year");
    return;
  }

  if (!gender) {
    alert("Please select a gender");
    return;
  }

  let maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let CC = Math.floor(year / 100); // math method used to round to whole integer
  let YY = year % 100;
  let DD = day;
  let MM = month;

  const inputDate = new Date(year, month - 1, day);

  if (
    inputDate.getFullYear() !== year ||
    inputDate.getMonth() !== month - 1 ||
    inputDate.getDate() !== day
  ) {
    alert("Invalid date. Please enter a real calendar date.");
    return;
  }

  let dayofWeek = Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7,
  );

  if (dayofWeek < 0) {
    dayofWeek = (dayofWeek + 7) % 7;
  }

  let akanName;

  if (gender === "male") {
    //picks the akan name based on the dayof the week
    akanName = maleNames[dayofWeek];
  } else {
    akanName = femaleNames[dayofWeek];
  }

  let dayName = days[dayofWeek];

  result.textContent =
    "You were born on " + dayName + "- Your Akan Name is " + akanName; //displays this string on h3

  const form = document.getElementById("form");

  result.textContent = `You were born on ${dayName}. Your Akan name is ${akanName}`;

  // clear form
  form.reset();
});
