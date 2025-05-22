const balance = new Number(100)
console.log(balance);
//toString() this function is used to convert the number into string 
console.log(balance.toString().length);
//toFixed() this function is used to get decimal after number this will be useful in ecommerce website when we're doing calculation 
console.log(balance.toFixed(2));
//this function is use for getting round off number
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//*****************Math*****************
console.log(Math);//object 
console.log(Math.abs(-4));//this used to convert only negative value in positive and positive values will be as it is
console.log(Math.round(4.6));//function for round of value 
console.log(Math.ceil(4.2));//will give upper round of value
console.log(Math.floor(4.9));//will give lower round of value 
Math.random()//this function give the random values bw 0 and 1 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);//this gives the num from 0 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// last one is for getting number greater than 10 