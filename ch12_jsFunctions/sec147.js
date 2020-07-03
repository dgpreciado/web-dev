function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = "paris";
var capital = capitalize(city);
capital;

//function expression

var cap = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var cap2 =  cap(city);
cap2;

//sec149
function isEven(x){
    return x % 2 === 0;
}
isEven(231);

function factorial(x){
    var t = 1;
    for(i = x; i > 0; i--){
        t *=i;
    }
    return t;
}
factorial(5);
factorial(2);
factorial(10);
factorial(0);

function kebabToSnake(x){
    var reg = new RegExp('-','g')
    return x.replace(reg,'_');
}

kebabToSnake("hello-world");

kebabToSnake("dogs-are-awesome");

kebabToSnake("blah");

function kebabToSnake2(x){
    return x.replace(/-/g,'_');
}
kebabToSnake2("dogs-are-awesome");

function kebabToSnake3(x){
    return x.replace('-','_');
}
kebabToSnake3("dogs-are-awesome");

function kebabToSnake4(x){
    return x.split('-').join('_');
}
kebabToSnake4("dogs-are-awesome");