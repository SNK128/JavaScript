let n="Harry"
console.log(n.length)

console.log(n.toUpperCase())
console.log(n.toLowerCase())

console.log(n)

//slicing
console.log(n.slice(2,4))
console.log(n.slice(2))
console.log(n.replace("r","i"))


let friend="Naman"
console.log(n+friend)
console.log(n.concat(" is a friend of ",friend," Ok"))


let a="          hello           "
console.log(a)
console.log(a.trim())  //trim removes whitespaces 

for(let i=0;i<n.length;i++)
    console.log(n[i])

n[0]=a;//strings are immutable..wont show any change
console.log(n)
    