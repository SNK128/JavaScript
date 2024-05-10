let a=3
let b=4
let c=6

console.log("One plus average of a & b : ", 1+(a+b)/2)
console.log("Done")
console.log("One plus average of a & c : ", 1+(a+c)/2)
console.log("Done")
console.log("One plus average of c & b : ", 1+(c+b)/2)
console.log("Done")
////////////////////////////////////////////////
console.log("Let's use function now")

onePlusAvg(a,b)
onePlusAvg(a,c)
onePlusAvg(c,b)


function onePlusAvg(x,y){
    console.log("One plus average of ",x," & ",y," : ",1+(x+y)/2)
    console.log("Done")
}

///another way of writing the function

const sum=(p,q)=>{
    return p+q
}

console.log("SUM of a & b is : ",sum(a,b))

//functions without any parameter

const hello=() =>{
    console.log("Hello yaaaar, kaise ho")
}

hello();