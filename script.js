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

console.log(day, month, year, gender);
});

 
   

