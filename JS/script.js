// days of the week in an array
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Male names
const males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// Female Names
const females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let btn = document.getElementById("submit");
// var gender = document.getElementById("gender");

let form = document.getElementById("userForm");


// validating the form
function validate() {
    if (day.value == null || day.value == "" || day.value > 31 || day.value <= 0 || day.value.length != 2) {
        alert("Kindly enter your correct Date of Birth");
        return false;

    } else if (month.value == null || month.value == "" || month.value > 12 || month.value <= 0 || month.value.length != 2) {
        alert("Enter the correct Birthday Month");
        return false;
    } else if (year.value == null || year.value == "" || year.value > 2022 || year.value <= 1900 || year.value.length != 4) {
        alert("Enter the correct Year Of Birth");
        return false;
    } else {
        return true;
    }
}

//calculating the Day of the week (d) = ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
// where;

//  CC - is the century digits. For example 1989 has CC = 19

//  YY - is the Year digits (1989 has YY = 89)

//  MM -  is the Month

//  DD - is the Day of the month 

//  mod - is the modulus function ( % )

function calculateDay(){
    let year = document.getElementById('year').value;
    let CC = parseInt(year.substring(0,2));
    let YY = parseInt(year.substring(2,4));
    let MM = parseInt(document.getElementById("month").value);
    let DD = parseInt(document.getElementById("day").value);
    let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
    console.log(d.toFixed());  
    return d.toFixed();
}

function choice() {
    var gender = document.getElementById("gender");
    let position = calculateDay()-1;
    if (gender.value == 'male') {
        // console.log(males[position]);
        alert("Your name is" + " " + males[position] + " " + "which means a male born on " + " " + weekDays[position]);
    }else if(gender.value == 'female'){
            alert("Your name is" + " " + females[position] + " " + "Which means a female born on" + " " + weekDays[position]);
    }
    else{
         alert("ENSURE TO HAVE THE CORRECT DETAILS")
    }
    return false;
}
btn.addEventListener('click', function (e) {
    e.preventDefault();
    validate();
    calculateDay();
    choice();
    form.reset();
    var delay = 7000;// delay time in milliseconds
 setTimeout(function(){
     window.location.reload();
 },delay)
});
