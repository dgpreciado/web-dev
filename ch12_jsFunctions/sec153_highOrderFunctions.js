function sing(){
    console.log("twinkle twinkle...")
    console.log("how i wonder...")
}

var stopNumber = setInterval(sing, 1000);
//setInterval returns a number that is used to stop the interval action.
clearInterval(stopNumber);

//anonymous function
var stopNumber1 = setInterval(function(){
    console.log("I am an anonymous function!")
}, 1000);

clearInterval(stopNumber1);