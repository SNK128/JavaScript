let num=[1,2,3,4,5,6,7,8,9]
console.log(num.length)
delete num[0]
console.log(num.length)

let num_more=[11,12,13,14,15,16,17,18,19]
let newArray=num.concat(num_more)
console.log(newArray)

//sort method 

let a=[3,4,6,2,4,13,8,]
a.sort() //sort alphabetically
console.log(a)

let compare= (a,b) => {
    return b-a
}
a.sort(compare) //sort ascending
console.log(a)

a.reverse()
console.log(a)

////////////////////////////////////////////////
//splice

let num1=[1,2,3,4,5,6,7,8,9]
let deletedValues=num1.splice(2,3,100,101,102,104)
console.log(deletedValues)
console.log(num1)

//slice
let num2=num1.slice(3)
console.log(num2)

let num3=num1.slice(3,5)
console.log(num3)
