//5.a
// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }

//5.b
// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }

//5.c
// var c = 12; 
// if (c++ === 13){ alert("condition 1 is true");}
// if (c === 13){ alert("condition 2 is true"); }
// if (++c < 14){ alert("condition 3 is true"); }
// if(c === 14){ alert("condition 4 is true"); }

//5.d
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals"); }

//5.e
// if (true){
//      alert("True"); }
// if (false){
//      alert("False"); }

//5.f
// if("car" < "cat"){ alert("car is smaller than cat"); }

// if("cat" > "car"){ alert("cat is greater than car"); }

/********Quest. 6 ******/

// var marks = prompt("Enter percentage");
// var percentage = (marks/300) * 100;
// if(percentage >= 80){
//     document.write("<h2>MArks Sheet</h2>");
//     document.write("<h5>Total Marks: 300</h5>");
//     document.write("<h5>Obtain Marks:" +marks+"</h5>");
//     document.write("<h5>Percentage: " +percentage+"%</h5>");
//     document.write("<h5>Grade: A-one</h5>");
//     document.write("<h5>Remarks: Excellent</h5>");
    
// }
// if(percentage >= 70 && percentage < 80){
//     document.write("<h2>MArks Sheet</h2>");
//     document.write("<h5>Total Marks: 300</h5>");
//     document.write("<h5>Obtain Marks:" +marks+"</h5>");
//     document.write("<h5>Percentage: " +percentage+"%</h5>");
//     document.write("<h5>Grade: A</h5>");
//     document.write("<h5>Remarks: Good</h5>");
    
// }
// if(percentage >= 60 && percentage < 70){
//     document.write("<h2>MArks Sheet</h2>");
//     document.write("<h5>Total Marks: 300</h5>");
//     document.write("<h5>Obtain Marks:" +marks+"</h5>");
//     document.write("<h5>Percentage: " +percentage+"%</h5>");
//     document.write("<h5>Grade: B</h5>");
//     document.write("<h5>Remarks: You need to improve</h5>");
    
// }
// if(percentage < 60){
//     document.write("<h2>MArks Sheet</h2>");
//     document.write("<h5>Total Marks: 300</h5>");
//     document.write("<h5>Obtain Marks:" +marks+"</h5>");
//     document.write("<h5>Percentage: " +percentage+"%</h5>");
//     document.write("<h5>Grade: Fail</h5>");
//     document.write("<h5>Remarks: Sorry</h5>");
    
// }


/******** Quest. 7 *****/
// var number = 8;
// var ans = +prompt("Guess the number between 0 to 10");
// if(ans === number){
//     alert("Bingo! you found the number");
// }
// if(ans===++number){
//     alert("you were so close Try again");
// }

/******* Quest. 8 *******/

// var number = +prompt("Enter a number");
// if(number%3===0){
//     alert(number+" is divisible by 3");
// }
// if(number%3>0){
//     alert(number+" is not divisible by 3");
// }

/***********Quest. 9 *******/

// var number = +prompt("Enter a number");
// if(number%2===0){
//     alert(number+" is even");
// }
// if(number%2===1){
//     alert(number+" is Odd");
// }


/*******Quest. 10 ******/

// var temp = +prompt("Enter Temparature");
// if(temp>40){
//     document.write("it is too hot outside");
// }
// if(temp>30){
//     document.write("The weather is normal");
// }
// if(temp>20){
//     document.write("The weather is cool");
// }
// if(temp>10){
//     document.write("OMG! today weather is too cool");
// }