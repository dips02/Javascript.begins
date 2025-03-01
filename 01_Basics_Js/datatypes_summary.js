//kis tarah se data ko memory me rakha jata hai or access kiya jata hai us hisab se uske do types hai primitive and non-primitive
//Primitive(call by value)
//7 types : String,Number,Boolean,Null,undefined,Symbol,BigInt
const name ="Dipmala"//string
const score=100//number
const scoreValue =100.3 //number
const isLoggedIn = true//boolean
const outsideTemp =null//null
let userEmail;//undefined
const id = Symbol('123')
const anotherId = Symbol('123')
//both id and anotherId are both different 
const bigNumber = 38723468n//bigInt
// javascript is dynamically type language we didn't need to add datatype to defined variable 

//Reference type(non-primitve)
//types : Array,Objects,Functions
const heros = ["shaktiman","APJ","MSD"];//array
let obj={
    name:"Dipmala",
    age:22,
}//object
const myFunction=function(){
    console.log("Dipmala");
}

//-------------------------------
// stack(primitive) and Heap(non-primitive)
//stack example where the data is copy of the original data
let varName = "hello"
let var2Name = varName
var2Name = "World"

console.log(varName);
console.log(var2Name);

// Heap example where there is no copy its give the reference of original value
let user = {
    email: "abc@gmail.com",
    upiId: "flhad@ybl",
    age: 20
}
let userTwo = user
userTwo.email = "pqr@gmail.com"
//heap me jo bhi changes hota hai vo original value me hi hote hai 