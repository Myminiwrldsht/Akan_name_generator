// Select the form element from the HTML file using its ID
const form = document.getElementById('akanForm');
// Listen for when the user submits the form
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop the form from refreshing the page when submitted


    const day = parseInt(document.getElementById('day').value);  /*Get the value entered in the "day" input field. parsetInt converts it from text into a whole number*/
    const month = parseInt(document.getElementById('month').value); /* Gets the value entered in the "month" input field. parseInt converts it from text into a whole number*/
    const year = parseInt(document.getElementById('year').value);  /* Gets the value entered in the "year" input field. parseInt converts it from text to whole number */
    const gender = document.getElementById('gender').value; /* Gets the selected gender value from the dropdown or input field. This stays as text, so no parseInt is needed*/




    // Input validation
    //Nested if statements to check if the day, month, and year are within valid ranges
    if (
        day < 1 || day > 31
    ) {
        alert("Please enter a valid day (1-31).");
        return;
    }
    if (
        month < 1 || month > 12
    ) {
        alert("Please enter a valid month (1-12).");
        return;
    }
    if (
        year < 1900 || year > 2026

    ) {
        alert("Please enter a valid year (1900-2026).");
        return;
    }
    if (gender !== "male" && gender !== "female") {
        alert("Please select a valid gender (male or female).");
        return;
    }

    //Strict validation for exact days in months
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) {
        alert(`Invalid date. This month only has ${daysInMonth} days.`)
        return;
    }


    let CC = Math.floor(year / 100); //get century part of the year
    let YY = year % 100; //get the last 2 digits of the year

    //store month and day in variables used by the formula
    let MM = month;
    let DD = day;

    //Zeller's formula...treats January as month 13 of the previous year
    if (MM === 1) {
        MM = 13; //January becomes 13

        //Adjust century and year to previous year
        CC = Math.floor((year - 1) / 100);
        YY = (year - 1) % 100;

        //Zeller's formula treats February as month 14 of the previous year
    } else if (MM === 2) {
        MM = 14; //February becomes 14

        //Adjust century and year to previous year
        CC = Math.floor((year - 1) / 100);
        YY = (year - 1) % 100;
    }

    //Application of Zeller's formula to calculate day of the week
    let d = (Math.floor(CC / 4) - //Century correction
        2 * CC - //Century offset
        1 + //Constant adjustment
        Math.floor(5 * YY / 4) + //Year correction
        Math.floor(26 * (MM + 1) / 10) + //Month correction
        DD //Add day of the month
    ) % 7; //Add day of the month

    //If result is negative, converts it into a valid positive day index
    if (d < 0) {
        d = d + 7;
    }

    //Make sure d is a whole number
    d = Math.floor(d);

    //Array of days matching the numeric result from the formula
    // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the actual day name from the index
    const dayOfWeek = days[d];

    //Akan names for males based on day of birth.
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    //Akan names for females based on day of birth
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Create a variable to store the final Akan name
    let akanName = "";

    // Check selected Gender and assign the correct Akan name
    if (gender === "male") {
        akanName = maleNames[d]; //Pick male Akan name

    } else {
        akanName = femaleNames[d]; //Pick female Akan name.
    }


    // Display the final result on the page
    document.getElementById("result").innerText = "You were born on " + dayOfWeek + ". Your Akan Name is.... " + akanName + " 🎉";


    // Log values in the console for debugging
    console.log(day, month, year, gender, dayOfWeek, akanName);
});




