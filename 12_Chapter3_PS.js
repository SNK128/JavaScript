//Q1 Write a program to print the marks of a student in an object using for loop  

// let marks={
//     snk:99,
//     raj:91,
//     mvp:82,
//     chn:40
// }

// for(let i=0;i<Object.keys(marks).length;i++)
//     {
//         console.log("The marks of "+Object.keys(marks)[i] +" are " + marks[Object.keys(marks)[i]])
//     }
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Q2 Write the program in Q1 using for in loop

// for(let j in marks){
//     //console.log(j)   will print the keys of the object
//     //console.log(marks[j])  will print values of the object
//     console.log("The marks of "+j +" are " + marks[j])
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Q3 Write a program to print "Try again" until the user enters thr correct number
// let cn=4;
// let i

// while(i!=cn)
//     {
//         i=prompt("Enter a Number")
//         console.log("Try again")

//         if(i!=cn)
//             console.log("Try again")
//     }
//     console.log("You have entered a correct number")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q4 Write a function to find mean of 5 numbers

const mean=(a,b,c,d,e) =>{
    return (a+b+c+d+e)/5
}

console.log(mean(1,2,3,4,5))


