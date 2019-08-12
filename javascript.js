'use strict';

var userName = prompt('What\'s your name?');
console.log('Prompt asking user what their name is');
alert('Hi ' + userName + ', it is a pleasure to meet you.');

var questionsArray = ['Has Corey ever gone to France?', 'Is corey 23 years old?', 'Has Corey attended 3 different colleges?', 'Has Corey slept more than 24 hours at once before?', 'Has Corey ever played in the nfl?'];

var rightAnswerArray = ['Right answer ' + userName + '! I have never gone to france, but I hope to go someday!', 'You are correct, ' + userName, 'You are correct,' + userName + '. I have attended WSU, U of A, and Olympic Community College', 'Correct, ' + userName + '. Mono comes straight from Satan', 'Flattered,' + userName + ', but definately not.'];

var wrongAnswerArray = ['Sorry ' + userName + ' I have never been to France, but one day, right?', 'Incorrect ' + userName + ', maybe next time, eh?', 'Has Corey attended 3 different colleges?', 'Incorrect, ' + userName + '. Once upon a time, I came up with mono', 'Correct, ' + userName + '. I definately have not but everyonce in a while I play madden, which is practically the same thing.'];

var totalAnswersCorrect = 0;


function getItDone() {
  for(var i = 0; i < questionsArray.length; i++){
    var rightAnswer = rightAnswerArray[0].toLowerCase();
    var wrongAnswer = wrongAnswerArray[0].toLowerCase();
    console.log('here');
  } if(questionsArray[0] === 'yes') {
    alert(rightAnswer);
    console.log('here2');
    totalAnswersCorrect++;
  } else if(questionsArray[0] !== 'yes') {
    alert(wrongAnswer);
  }
}

getItDone();



// function getItDone(questionsArray[i], rightAnswerArray[i], wrongAnswerArray[i]) {
//   prompt(questionsArray[i]);
//   if(questionsArray[i] === 'yes'){
//     rightAnswerArray[i];
//     questionsArray[i].toLowerCase();
//     totalAnswersCorrect++;
//   } else if(questionsArray[i] === 'no') {
//     wrongAnswerArray[i];
//   }
//   return getItDone(questionsArray[i]);
// }












// var totalAnswersWrong = 0;


// var question1 = prompt('Has Corey ever gone to France?').toLowerCase();
// if(question1 === 'yes') {
//   alert('Sorry ' + userName + ' I have never been to France, but one day, right?');
//   console.log('Did not answer question correctly for question 1');
//   // totalAnswersWrong++;
//   prompt('Has Corey ever gone to France?').toLowerCase();
// } else if(question1 === 'no'){
//   question1 = question1.toLowerCase();
//   alert('Right answer ' + userName + '! I have never gone to france, but I hope to go someday!');
//   console.log('answered question correctly for question 1');
//   totalAnswersCorrect++;
// }

// var question2 = prompt('Is corey 23 years old?').toLowerCase();
// if(question2 === 'yes') {
//   alert('You are correct, ' + userName );
//   console.log('answered question correctly for question 2');
//   totalAnswersCorrect++;
// } else if(question2 === 'no'){
//   alert('Incorrect ' + userName + ', maybe next time, eh?');
//   console.log('Did not answer question correctly for question 2');
//   prompt('Is corey 23 years old?').toLowerCase();
//   // totalAnswersWrong++;

// }

// var question3 = prompt('Has Corey attended 3 different colleges?').toLowerCase();
// if(question3 === 'yes') {
//   alert('You are correct,' + userName + '. I have attended WSU, U of A, and Olympic Community College');
//   console.log('answered question correctly for question 2');
//   totalAnswersCorrect++;
// } else if(question3 === 'no'){
//   alert('Incorrect, ' + userName + '. I have attended WSU, U of A, and Olympic Community College');
//   console.log('Did not answer question correctly for question 3');
//   prompt('Has Corey attended 3 different colleges?').toLowerCase();
//   // totalAnswersWrong++;
// }

// var question4 = prompt('Has Corey slept more than 24 hours at once before?').toLowerCase();
// if(question4 === 'yes'){
//   alert('Correct, ' + userName + '. Mono comes straight from Satan');
//   console.log('answered question correctly for question 4');
//   totalAnswersCorrect++;
// } else if(question4 === 'no'){
//   alert('Incorrect, ' + userName + '. Once upon a time, I came up with mono');
//   console.log('Did not answer question correctly for question 4');
//   prompt('Has Corey slept more than 24 hours at once before?').toLowerCase();
//   // totalAnswersWrong++;
// }

// var question5 = prompt('Has Corey ever played in the nfl?').toLowerCase();
// if(question5 === 'yes'){
//   alert('Flattered,' + userName + ', but definately not.');
//   console.log('Did not answer question correctly for question 5');
//   prompt('Has Corey ever played in the nfl?').toLowerCase();
//   // totalAnswersWrong++;
// } else if(question5 === 'no'){
//   alert('Correct, ' + userName + '. I definately have not but everyonce in a while I play madden, which is practically the same thing.');
//   console.log('answered question correctly for question 5');
//   totalAnswersCorrect++;
// }



// var question6 = prompt('What is Corey\'s favorite number?');
// if(question6 === '1'){
//   alert('Congrats ' + userName + ', you were correct');
//   console.log('while loop');
//   totalAnswersCorrect++;
// } else if(question6 < '1'){
//   alert('Sorry' + userName + ', try again! You were just a little too low');
//   prompt('What is Corey\'s favorite number?');
//   console.log('while loop wrong asnwer');
//   // totalAnswersWrong++;
// } else if(question6 > '1'){
//   alert('Sorry ' + userName + ', that answer was too high');
//   prompt('What is Corey\'s favorite number?');
// }

// var statesLivedArray = ['missouri', 'south carolina', 'virginia', 'alabama'];
// var attempts = 0;

// var indicator = false ;

// while(attempts <= 7){
//   var question7 = prompt('What states has Corey lived in besides Washington?').toLowerCase();
//   for(var i = 0; i < statesLivedArray.length; i++){
//     if(question7 === statesLivedArray[i]){
//       indicator = true;
//     }
//   }
//   if(!indicator){
//     alert('try again!');
//     attempts++;
//   } else {
//     alert('correct');
//     totalAnswersCorrect++;
//     break;
//   }
// }

// alert('Congrats, you recieved a score of ' + totalAnswersCorrect + ' / 7 on the quiz about me!');
