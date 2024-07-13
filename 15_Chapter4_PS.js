//Q1
console.log("har\"".length)

//Q2 Explore 'include'
const sentence='The quick brown fox jumps over the lazy dog'
const word='fox'
const word2='fox1'
console.log(sentence.includes(word)) //returns boolean
console.log(`The word "${word}" ${sentence.includes(word)?'is' : 'is not'} in the sentence`);
console.log(`The word "${word2}" ${sentence.includes(word2)?'is' : 'is not'} in the sentence`);
//startsWith
console.log(sentence.startsWith("The"))
console.log(sentence.endsWith("The"))

//Q3
console.log(sentence.toLowerCase())

//Q4 Extract number from string
let str="Please give Rs 1000"
let amount=Number.parseInt(str.slice("Please give Rs ".length))
console.log(amount)

//Q5 try to change character of a string

let b='kkkkkk'
b[0]='a'
console.log(b) //strings are immutable