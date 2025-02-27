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
