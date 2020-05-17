var num = -10;
while(num<=19){
    console.log(num);
    ++num;
}
//even
console.log("\nEven");
num=10;
while(num<=40){
    if(num%2==0){
        console.log(num);
    }
    ++num;
}
//odd
console.log("\nOdd");
num=300;
while(num<=333){
    if(num%2==1)
        console.log(num);
    ++num;
}
//divisable by 5 and 3
console.log("\nDivisable by 5 and 3");
num=5;
while(num<=50){
    if(num%5==0 || num%3==0){
        console.log(num);
    }
    ++num;
}

