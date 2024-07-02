const score = String ([3000,100]) 
// console.log(typeof(score));


let x = 100
let y = "100"

// console.log(x === y);


// console.log(++x , ++y);


let c = "" ;
// console.log(typeof(c));



// Non Primitive datatype / Refrence data type

 const examp1 = ["Studentssss","JavacRIPT","Rajanpur" ] ;

let examp3 = true ;

let examp2 = {

name: "johnny" ,
age:    28


}

console.log(examp1.constructor.name);

console.log(examp2.constructor.name)
;
console.log(examp3)


// .constructor.name is another way of finding datatype like typeof Operator
// // 4. If val is undefined, return "undefined".
// 5. If val is null, return "object".
// 6. If val is a String, return "string".
// 7. If val is a Symbol, return "symbol".
// 8. If val is a Boolean, return "boolean".
// 9. If val is a Number, return "number".
// 10. If val is a BigInt, return "bigint".




let MyFunction = function(){

        console.log( "Helo World")
}


console.log(typeof(MyFunction));

r = "100";
t = "100";


let id = Symbol ("12345")

let ValueOfSymbol = Symbol("12345")

console.log( id  === ValueOfSymbol );


// stack (permitive datatypes) and heap (non-permitive datatypes)

// Example of stack (Numbers,boolean,nul,undefine,string,symbol,BigInt)

let firstname = "Old name"

let secondname = firstname;
secondname  = "New Name"

console.log(firstname) ;
console.log(secondname) ;

// HEAP Example (Functions, Objects, Array,)
let userOne = {

name: "Adeeel",
age: "28"

}

 userTow = userOne ;

userTow.age = "58"
userTow.name = "Faheem"


console.log(userOne);


