// we store the day of the week in an array
var weekDays = ["Sunday", "Monday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Male names
var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// Female Names
var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// declare a value that takes the day value
var CC, YY, MM, DD, dayOfWeek, valueOfDay;

// validating the form
function validate() {
    var day = document.userForm.day.value;
    var month = document.userForm.month.value;
    var year = document.userForm.year.value;

    if (day == null || day == "" || day > 31 || day <= 0 || day.length != 2) {
        alert("Kindly enter your correct Date of Birth");
        return false;

    } else if (month == null || month == "" || month > 12 || month <= 0 || month.length != 2) {
        alert("Enter the correct Birthday Month");
        return false;
    } else if (year == null || year == "" || year > 2022 || year <= 1900 || year.length != 4) {
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

function calculateDay() {
    year = document.getElementById("year").value;
    CC = parseInt(year.slice(0, 2));
    YY = parseInt(year.slice(2.4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("day").value);
    dayOfWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    alert(dayOfWeek.toFixed());
    return (dayOfWeek.toFixed(0));
}

//alert(objColors.options[objColors.selectedIndex].text); // Display the text; in this example, "red", "green", and "blue"
//alert(objColors.selectedIndex); // Display the index number; in this example, red is 0, green is 1, and blue is 2
function gender() {
    let userGender = document.getElementById('gender').value;
    console.log(userGender);
    if (userGender[0].selected == true) {
        var gender = "male";
    } else if (userGender[1].selected == true) {
        var gender = "female";  
    } else{
        return false;
    }
}   
