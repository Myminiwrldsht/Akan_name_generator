const form = document.getElementById('akanForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

   const day = parseInt(document.getElementById('day').value);
    const month =parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;

   
    

    // Input validation
    //Nested if statements to check if the day, month, and year are within valid ranges
   if(
    day<1 || day>31
   ) {
    alert("Please enter a valid day (1-31).");
    return;
   }
   if(
    month<1 || month>12
   ) {
    alert("Please enter a valid month (1-12).");
    return;
   }
   if ( 
    year<1900 || year>2026

   ) {
    alert("Please enter a valid year (1900-2026).");
    return;
   }
   if (gender !== "male" && gender !== "female") {
    alert("Please select a valid gender (male or female).");
    return;
   }



let CC = Math.floor(year / 100);
let YY = year % 100;

let MM = month;
let DD = day;

if (MM === 1)
{
    MM = 13;
    CC = Math.floor((year - 1) / 100);
    YY = (year - 1) % 100;

} else if (MM === 2){
    MM = 14;
    CC = Math.floor((year - 1) / 100);
    YY = (year - 1) % 100;
}

let d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 *(MM + 1)) + DD) % 7;

if (d < 0) {
    d = d + 7;
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = days[d];


const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let akanName = "";

if ( gender === "male") {
    akanName = maleNames [d];

} else{ 
    akanName = femaleNames [d];
}

document.getElementById("result").innerText = "Your Akan Name is.... " + akanName;

console.log(day, month, year, gender, dayOfWeek, akanName);
});

 
   

