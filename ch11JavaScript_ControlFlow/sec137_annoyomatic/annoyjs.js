var answer = prompt("are we there yet?");
var there = false;
while(!there){
    if((answer.indexOf("yes")) != -1 || (answer.indexOf("yeah")) != -1){
        alert("Yay, We Made It!");
        there = true;
    }else{
        var answer = prompt("are we there yet?");
    }
}