'use strict'; //requirement per assignment. runs js in strict mode, not allowing for undeclared variables.

//prompt user for their name upon arrival at site; greet using provided name.
let userName = prompt('Hello and welcome to my web page! What is your name?');
alert('Nice to meet you, ' + userName + '. Thanks for visiting my page!');

//Prompt user with 5 yes or no questions related to bio upon button press
// eslint-disable-next-line no-unused-vars
function beginquiz(){

  let score = 0;

  console.log('quiz start'); //confirm button is working

  //Refactor code for first 5 questions. store questions and answers as array [question, long answer, short answer]
  //Assign each question to an array.
  let q1 = ['I have a name! Are my initials JS? (yes/no)', 'yes', 'y'];
  let q2 = ['I went to college! Did I complete 4 years of university? (yes/no)', 'no', 'n'];
  let q3 = ['I was in the military! Did I enlist in the Army? (yes/no)', 'no', 'n'];
  let q4 = ['I used to have a job! Did I calibrate automobiles? (yes/no)', 'no', 'n'];
  let q5 = ['I\'m attending a coding bootcamp! Is the name of that bootcamp Code Fellows? (yes/no)', 'yes', 'y'];

  //Create an array of arrays, to be accesed by for loop
  let Trivia5 = [q1, q2, q3, q4, q5];

  //Utilize for loop to access & ask questions, provide feedback and increase score on correct answer.
  function questions1_5(){
    for (let i=0; i < Trivia5.length; i++){
      let question = Trivia5[i];
      let answer = prompt(question[0]).toLowerCase();
      console.log('user: ' + answer);
      if(answer === question[1] || answer === question[2]){
        alert('Question ' + (i+1) +' correct!');
        score++;
      }else{
        alert('Question' + (i+1) + ' incorrect!');
      }
      console.log('score: ' + score);
    }
  }
  questions1_5();
  //Create 6th question number guessing with 4 chances. Return high, low, or correct, reveal answer if guesses run out.
  //Define correct answer, declare variable to hold user answer.
  let correct6 = 7;
  let ans6;
  function question_6(){
    for (let i=0; i < 4; i++){

      //Ask user question. Introduce game if first ask; keep count of guesses if not first guess.
      if (i === 0){
        ans6 = prompt('I\'m thinking of a number from 0 to 10, can you guess what it is? You have 4 chances!');
      }else{
        ans6 = prompt('Nice try. Attempt ' + (i+1) + '/4! Same number from 0 to 10. Can you guess it?');
      }

      //Convert user answer to number for hard comparison; verify user guess in console.
      console.log('user: ' + ans6);
      ans6 = Number(ans6);
      console.log(ans6, typeof(ans6));

      //Take action based on user answer.
      if (ans6 === correct6){
        alert('That\'s correct! Well done!');
        score++;
        break;
      }else if(ans6 > correct6){
        alert('That\'s too high!');
      }else if (ans6 < correct6){
        alert('That\'s too low!');
      }else if(!ans6){
        alert('Looks like your answer was not a number!');
      }

      //Notify user if incorrect and out of guesses.
      if(i === 3 && ans6 !== correct6){
        alert('Sorry but you ran out of attempts! :( The correct answer was ' + correct6 + '.');
      }
    }
    console.log('score: ' + score);
  }
  question_6();
  //Create 7th question with multiple correct answers stored in array. 6 attempts. Display possible correct answers.
  //Declare/define variables.
  let ans7;
  let escQ7 = false;
  let key7 = ['alecto', 'tisiphone', 'megaera'];
  function question_7(){
    for (let i=0; i < 6; i++){

      //Ask user question. Introduce game if first ask; keep count of guesses if not first guess.
      if(i === 0){
        ans7 = prompt('In case you were wondering, Hades is a great game. Also greek mythology is pretty cool. Can you name one of the 3 greek furies? You have 6 tries!').toLowerCase();
      }else{
        ans7 = prompt('Nice try. Attempt ' + (i+1) + '! Can you name one of the Greek Furies?').toLowerCase();
      }
      console.log('user: ' + ans7);

      //Compare user answer in switch statement; break if correct and set escQ7 true
      switch (ans7){
      case key7[0]:
        alert('That\'s correct! Alecto was a Greek Fury. Her sisters were Tisiphone and Megaera.');
        escQ7 = true;
        break;
      case key7[1]:
        alert('That\'s correct! Tisiphone was a Greek Fury. Her sisters were Alecto and Megaera.');
        escQ7 = true;
        break;
      case key7[2]:
        alert('That\'s correct! Megaera was a Greek Fury. Her sisters were Alecto and Tisiphone.');
        escQ7 = true;
        break;
      default:
        alert('Incorrect!');
        break;

      //Break and increase score if escQ7 set true by correct answer or notify if out of guesses
      }if(escQ7){
        score++;
        break;
      }else if(i === 5){
        alert('You\'re out of attempts! :( The 3 Greek Furies were Alecto, Tisiphone, and Megaera.');
      }
    }
  }
  question_7();
  console.log('score: ' + score);

  //Notify user of their score (out of 7 points)

  if (score === 7){
    alert('You\'re pretty good. You got 7/7 questions right!');
  }else{
    alert('You got ' + score + '/7 questions right. If you\'d like to try again press Begin!');
  }
}
