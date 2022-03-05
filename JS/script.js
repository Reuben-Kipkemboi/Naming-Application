// we store the day of the week in an array
var weekDays = ["Sunday", "Monday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Male names
var males = ["Kwasi", "Kwadwo", "Kwaku", "Yaw", "Kofi", "Kwame"];
// Female Names
var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// 

// validating the form
function validate(){
var day = document.userForm.day.value;
var month = document.userForm.month.value;
var year = document.userForm.year.value;

if (day ==null || day == "" || day>31 ||day<=0 || day.length>2){
    alert("Kindly enter your correct Date of Birth");
    return false;

}else if(month == null || month == "" || month>12 || month<=0 || month.length >2){
    alert("Enter the correct Birthday Month");
    return false;
}else if(year == null || year == "" || year>2022 || year<=1900 || year.length >4){
    alert("Enter the correct Year Of Birth");
    return false;
}else{
    return true;
}
}



