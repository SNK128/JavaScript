// for(let i=0;i<=5;i++)
// {
//     console.log(i)
// }
/////////////////////////////////////////////////////////////////////////


// // Program to add first n natural numbers
// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//   sum += (i + 1)
//   // console.log((i+1), "+")
// }
// console.log("Sum of first " + n + " natural numbers is " + sum)
// // console.log(i)






let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
} 

console.log(obj)

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
} 

// For of loop
for (let b of "Harry") {    //let b of obj will throw an error
  console.log(b)
}
