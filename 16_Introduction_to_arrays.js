let marks=[91,83,76,32,false,"Not present"]
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6]) //will be undefined because index 6 is not present
console.log("The length of marks is: ", marks.length)
marks[6]=99 //adding new value
marks[0]=0 //change the value
console.log(marks)
console.log(typeof marks)