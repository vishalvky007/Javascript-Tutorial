// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // undefined by default

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 434358137837593593n

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ['Iron Man', 'Flash', 'Thor'];

let myObj = {
    name:'Vishal',
    age: 22,
}

const myFunction = function() {
    console.log("Hello World!");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
console.log(typeof score);
console.log(typeof myFunction);
console.log(typeof heros);

/*
* Value vs Type
num=42                  # typeof num will be "number"
str="Hello, world!"     # typeof str will be "string"
bool=true               # typeof bool will be "boolean"
arr=(1 2 3)             # typeof arr will be "object" (Arrays are objects in JavaScript)
obj=("key"="value")     # typeof obj will be "object"
func() { :; }           # typeof func will be "function"
nul=null                # typeof null will be "object" (This is a historical quirk in JavaScript)
undef=                  # typeof undef will be "undefined"

*/

// https://262.ecma-international.org/5.1/#sec-11.4.3