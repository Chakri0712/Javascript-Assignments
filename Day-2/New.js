// Arithmatic operators

let num1 = 7;
let num2 = 3;
console.log(num1 + num2);  // +
console.log(num2 - num1);  // -
console.log(num1 * num2);  // *
console.log(num2 / num1);  // /
console.log(num1 % num2);  // %
console.log(num1 ** num2); // **  means num1 power num2

// strings

let name = "Chakri";
let goal = "Web developer";
console.log( "The aim of " + name + " is " + goal); //concatenation

// new method of concatenation in Es6

let data = `The aim of ${name} is ${goal}`;
console.log(data);
let data1 = `<h1>${name}</h1>`;
console.log(goal.length);
console.log(goal.replace("d" , "D"));
console.log(goal.indexOf("W"));

// getting our req part using substr function

let data2 = goal.substr(0 , 6);
console.log(data2);

// we can also write using lengtth function

let data3 = goal.substr(goal.length - 1 , 6);
console.log(data3);

// post and pre increment and decrement

console.log("post and pre increment");
let a = 1 , b;
b = a++; // post inc
console.log(a);
console.log(b);
b = ++a; //pre inc
console.log(a);
console.log(b);

console.log("post and pre decrement");
let c = 3 , d;
d = --c; //pre dec
console.log(c);
console.log(d);
d = c--; //post dec
console.log(c);
console.log(d);

// Arrays

let mycomputer = ["Laptop" , "Keyboard" , "Mouse" , "Router" , ["Speaker" , "Earphones" , "Headsets"]];
console.log(mycomputer);
console.log(mycomputer.length);
let slice = mycomputer.slice(1 , 4);
console.log(slice);

// operations on Arrays check in the course by colt steele

//loops 

//for loop: 

console.log("for loop is:");
for(let i=1; i <= 5; i++)
{
    console.log("Hi there!!!");
    console.log(i);
}

// while loop:

console.log(" while loop is:");
 let i = 1;
 while(i <= 5)
    {
     console.log(i);
       i++;
     }

// do while:

console.log("do while loop is:");
let j = 1;
do
{
    console.log(j);
    j++;
}
while(j <= 5);

// foreach loop

console.log("foreach loop is:");
mycomputer.forEach(function (tools)
{
    console.log(tools);
});

//boolean expressions ,here we use operators like < , > , <= , >= , == , === etc.,

let r = 2 , s = 3;
console.log(r === s);
console.log(r == s);
console.log(r <= s);
console.log(r >= s);

//conditional stmts

console.log("using if:");
if(r == s)
{
    console.log("true");
}
else
{
    console.log("false");
}

// similarly if else
// logical operators in colt steele

// null 

let Data;
console.log(Data);

// undefined

let Data1 = null;
console.log(Data1);
