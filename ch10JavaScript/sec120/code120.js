// javascript
//var f_name = prompt("what is your first name?");
//var L_name = prompt("what is you last name?");
var age = prompt("what is your age?");
//alert("hello, "+f_name+" "+L_name+".\nyou are "+age+" years old");
//console.log("hello, " + f_name + " " + L_name + ".\nyou are " + age + " years old.");

var current_year = new Date().getFullYear();
var birthdayYear = current_year - age;

function leapyearcalc(birthday_year){
    var sum=0;
    for (var year = birthday_year; year <= current_year; year++) {
        
        if ( ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) ){
            sum++;
        }
    }
    return sum;
}
var leap_yearNum = leapyearcalc(birthdayYear);
var totalDays = (age * 365) + leap_yearNum;
var LEAP_YEAR_DECIMAL = 365.242190;

console.log("you were born in "+birthdayYear);
console.log("calculated days with gergorian leap year decimal " + (age * LEAP_YEAR_DECIMAL));
console.log("you have been alive for atleast "+ totalDays +" days");