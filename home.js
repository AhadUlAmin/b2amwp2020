console.log('Hello');
//console.log("I'm message in console tab via inspect elelent !");
//alert('I can show without ending ; ');
//var b = 'Smothie';
//console.log(b);
//var someNumber = 45;
//console.log(someNumber);
//document.getElementById('someText').innerHTML = "Hey There!";
//var age = prompt("What is your age?");
//document.getElementById('someText').innerHTML = age;

/* While loops
...

var num = 0;
while(num < 100){
    num +=1;
    console.log(num);
}

...
*/

// For Loop

for(let num = 0;num <= 100 ; num++){
    console.log(num);
}

// Data Types 

let yourAge = 24; //number 
let yourName = 'Ahad'; // string 
let name ={first: 'Jane',last:'Doe'}; //object
let truth = false; // boolean
let groceries =['apple','banana','oranges'];    // arry
let random ;    // undefined
let nothing = null; // null

// string in JS common method
let fruit ='banana';
let moreFruits = 'banana\napple';   // new line
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));

console.log(fruit.replace('ban','123'));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);

console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by a Charectar 

let fruits = ['banana','apple','orange','pineapples'];
 fruits = new Array('banana','apple','orange','pineapples');


console.log(fruits[2]); // access value at index 2nd
fruits[0] ='pear';
console.log(fruits);

for(let i=0;i < fruits.length;i++){
    console.log(fruits[i]);
}

// array common methods array to string
console.log('Array to String',fruits.toString());
console.log(fruits.join('*'));
//console.log(fruits,fruits.pop(),fruits);   // removes last item
console.log(fruits.pop(),fruits);   // removes last item
console.log(fruits.push('blackbarries'),fruits); // append last item
console.log(fruits[3]);
fruits[fruits.length]= 'new item ';// same as push

console.log(fruits);
fruits.shift(); // remove first element from the array


console.log(fruits); // remove first element from an array

fruits.unshift('kiwi'); // add first element  to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato','broccoli'];
let allGroceries = fruits.concat(vegetables); // combine array

console.log(allGroceries);

console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());
let someNumbers =[5,10,2,25,255,1,2,5,334,321,2];
console.log(someNumbers.sort(function(a,b){return a-b})) // sorted in ascending order 
console.log(someNumbers.sort(function(a,b){return b-a})) // sorted in descending order

let emptyArray = new Array();
for (let num = 0; num <10 ;num ++){
    emptyArray.push(num)
}

console.log(emptyArray);


// Object in Javascipt
// dictonaries in Python

let student ={
    first:'Rafeh',
    last: 'Qazi',
    age:25,
    height:170,
    studentInfo: function(){
        return this.first +'\n'+this.last+'\n'+this.age;
    }
};

//console.log(student.first);
//console.log(student.last);
//student.first = 'NotRafeh'; // Change value in obj
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditional , Control flows (if else)
//var age = prompt("What is your age?");
var age = 25;
if ((age>= 18) && (age <=35)){
    status ="Target demo ";
    console.log(status);

}
else{
    status ="not my audience";
    console.log(status);
}

