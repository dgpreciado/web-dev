function square(num){
    console.log(num*num);
}
square(10);

function area(length, width){
    console.log(length * width);
}
area(10, 5);

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
console.log(capitalize(city));