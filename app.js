'use strict'; //requirement per assignment. runs js in strict mode, not allowing for undeclared variables.

//prompt user for their name upon arrival at site; greet using provided name.
let userName = prompt("Hello and welcome to my web page! What is your name?");
alert("Nice to meet you, " + userName + ". Thanks for visiting my page!");

//prompt user with 5 yes or no questions related to bio upon button press
function beginquiz(){

    console.log("quiz start"); //confirm button is working

    let ans1 = prompt("I have a name! Are my initials JS? (yes/no)").toLowerCase(); //correct answer: yes
    console.log("Q1 answer: " + ans1);
    if(ans1 == "y" || ans1 == "yes"){
        //console.log("Question 1 correct!");
        alert("Question 1 correct!");
    }else{
        //console.log("Question 1 incorrect! :(");
        alert("Question 1 incorrect! :(");
    }

    let ans2 = prompt("I went to college! Did I complete 4 years of university? (yes/no)").toLowerCase(); //correct answer: no
    console.log("Q2 answer: " + ans2);
    if(ans2 == "n" || ans2 == "no"){
        //console.log("Question 2 correct!");
        alert("Question 2 correct!");
    }else{
        //console.log("Question 2 incorrect! :(");
        alert("Question 2 incorrect! :(");
    }

    let ans3 = prompt("I was in the military! Did I enlist in the Army? (yes/no)").toLowerCase(); //correct answer: no
    console.log("Q3 answer: " + ans3);
    if(ans3 == "n" || ans3 == "no"){
        //console.log("Question 3 correct!");
        alert("Question 3 correct!");
    }else{
        //console.log("Question 3 incorrect! :(");
        alert("Question 3 incorrect! :(");
    }

    let ans4 = prompt("I used to have a job! Did I calibrate automobiles? (yes/no)").toLowerCase(); //correct answer: no
    console.log("Q4 answer: " + ans4);
    if(ans4 == "n" || ans4 == "no"){
        //console.log("Question 4 correct!");
        alert("Question 4 correct!");
    }else{
        //console.log("Question 4 incorrect! :(");
        alert("Question 4 incorrect! :(");
    }

    let ans5 = prompt("I'm attending a coding bootcamp! Is the name of that bootcamp Code Fellows? (yes/no)").toLowerCase(); //correct answer: yes
    console.log("Q5 answer: " + ans5);
    if(ans1 == "y" || ans5 == "yes"){
        //console.log("Question 5 correct!");
        alert("Question 5 correct!");
    }else{
        //console.log("Question 5 incorrect! :(");
        alert("Question 5 incorrect! :(");
    }
}
