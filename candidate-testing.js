const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //Declare this variable as an empty string
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "1) Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [//the answers are all in quotes in the text book so i am assuming they want strings
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3",
];

let candidateAnswers = [];




// TODO 1.1b: Ask for candidate's name //
function askForName() {
  candidateName = input.question("Please enter your name: ");

}

// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion() {
  let answer = "";
    //candidateAnswer = input.question(question);
    for (let i = 0; i < questions.length; i++) {//loops through the array
      answer = input.question(questions[i]);//variable for input of questions at i
      candidateAnswers.push(answer);//put the answers in the empty array
       
    }
    
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

/*if (candidateAnswer === correctAnswer){ V1 TRY NOT CORRECT****
    console.log("Your Answer:");
} else {
    console.log("YOU MESSED UP!");
}


 //V1 TRY UPDATED INFO WITH THIS BETTER CODE THAT WORKS
console.log(`Your Answer: ${candidateAnswer}`);
console.log(`Correct Answer: ${correctAnswer}`);
*/
console.log(`Your Answer: ${candidateAnswers}`);
console.log(`Correct Answer: ${correctAnswers}`);



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Candidate Name: ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};