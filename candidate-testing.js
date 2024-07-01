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
  candidateName = input.question("Candidate Name: ");
  
}






// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    let answer = input.question(`${i + 1}) ${questions[i]}`);
    candidateAnswers.push(answer);
  }

//OLD VERSIONvvvvvvvvvv
  // let answer = "";
  // let questionNumber = 1
  //   //candidateAnswer = input.question(question);

  //   for (let i = 0; i < questions.length; i++) {//loops through the array
  //     answer = input.question(questionNumber + ") " + questions[i]);//variable for input of questions at i
  //     candidateAnswers.push(answer);//put the answers in the empty array
  //     console.log("Your Answer: " + candidateAnswers[i]);
  //     console.log("Correct Answer: " + correctAnswers[i]);
  //     console.log();
  //     questionNumber += 1
  //   }
    
}






function gradeQuiz(candidateAnswers) {
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer === correctAnswer){ V1 TRY NOT CORRECT****
    console.log("Your Answer:");
} else {
    console.log("YOU MESSED UP!");
}*/


  let grade = 0   //TODO 3.2 use this variable to calculate the candidates score.
  let numberOfCorrectAnswers = 0
  let numberOfQuestions = questions.length;


for (let i = 0; i < canidateAnsdwers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {//CHANGE ARRAY INDEX TO LOWERCASE HERE
    numberOfCorrectAnswers += 1;
  }

  console.log(`${i+1}) ${questions[i]}`);//i is the current iteration of the loop then +1 cuz what even is question number 0 before it was variable += 1
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
  console.log();
}

grade = (numberOfCorrectAnswers / numberOfQuestions) * 100

if (grade >= 80) {
  console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of ${numberOfQuestions} responses correct) <<<`);
  console.log(">>> Status: PASSED <<<");
} else {
  console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of ${numberOfQuestions} responses correct) <<<`);
  console.log(">>> Status: FAILED <<<")
}
  return grade;
}




function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  askQuestion();
  console.log();

  console.log(`Candidate Name: ${candidateName}`);
  gradeQuiz(this.candidateAnswers);
}

//To DO: ask question + show your answer + show correct answer
//show overall grade result
//show status









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