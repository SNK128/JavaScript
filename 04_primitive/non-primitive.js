// nn bb ss u  -Primitives in Js

const { type } = require("os")

let a=null
let b=345
let c=true
let d=BigInt("367")+BigInt("3")
let e="harry"
let f=Symbol("I am a nice symbol")
let g=undefined  //let g also wworks
console.log(a,b,c,d,e,f,g)
console.log(typeof d)

//non primitive data types - Objects in Js

const item= {
  "Harry":true,
  "Shubh":false,
  "Lovish":67,
  "Rohan":undefined
}

console.log(item["Lovish"])
console.log(item["L"])