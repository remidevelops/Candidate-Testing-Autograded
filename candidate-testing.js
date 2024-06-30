const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //Declare this variable as an empty string
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
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
console.log();



console.log(`Your Answer: ${candidateAnswers}`);
console.log(`Correct Answer: ${correctAnswers}`);



  let grade = 0  //TODO 3.2 use this variable to calculate the candidates score.
  let numberOfCorrectAnswers = 0
  let numberOfQuestions = 5

  console.log();
// console.log(candidateAnswers);
// console.log(correctAnswers);

console.log();

// if (`${candidateAnswers[0]} === ${correctAnswers[0]}`) {
//   numberOfCorrectAnswers += 1
//   console.log(numberOfCorrectAnswers);
// }

for (let i = 0; i < candidateAnswers.length; i++) {

  let lowerCaseCandidateAnswer = candidateAnswers[i].toLowerCase();//CREATE VARIABLE TO REPRESENT ARRAY[I] CHANGED TO LOWERCASE
  
  // let lowerCaseCorrectAnswers = correctAnswers.toLowerCase();


  if (lowerCaseCandidateAnswer === correctAnswers[i].toLowerCase()) {//CHANGE ARRAY INDEX TO LOWERCASE HERE
    // console.log("candidateAnswers[i]",candidateAnswers[i]);
    // console.log("correctAnswers[i]",correctAnswers[i]);
    numberOfCorrectAnswers += 1
    // console.log("========================");
    // console.log(numberOfCorrectAnswers);
  } else {
      numberOfCorrectAnswers += 0
  }
}

grade = (numberOfCorrectAnswers / numberOfQuestions) * 100
//Convey to the candidate if they have passed the quiz with an 80% or if they have failed

console.log(grade + "/" + "100");
if (grade >= 80) {
  console.log(`>>> Overall Grade: ${grade} % (${numberOfCorrectAnswers} of ${numberOfQuestions} responses correct) <<<`)
} else {
    console.log(">>> Status: FAILED <<<")
}














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