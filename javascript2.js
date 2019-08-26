'use strict';

var totalAnswersCorrect = 0;
var totalQuestions = 0;

var userName = prompt('What\'s your name?');
console.log('Prompt asking user what their name is');
alert('Hi ' + userName + ', it is a pleasure to meet you.');

function question1(){
  var france = prompt('Has Corey ever gone to France?').toLowerCase();
  totalQuestions++;
  if(france === 'no'){
    alert('Right answer ' + userName + '! I have never gone to france, but I hope to go someday!');
    totalAnswersCorrect++;
  } else if (france === 'yes'){
    alert('Sorry ' + userName + ' I have never been to France, but one day, right?');
    france;
  }
}

function question2(){
  var college = prompt('Has Corey attended 3 different colleges?').toLowerCase();
  totalQuestions++;


  if(college === 'yes'){
    alert('You are correct, ' + userName, 'You are correct,' + userName + '. I have attended WSU, U of A, and Olympic Community College');
    totalAnswersCorrect++;
  } else {
    alert('Sorry ' + userName + ', Corey has attended three colleges');
  }
}

function question3(){
  var age = prompt('Is Corey 23 years old?').toLowerCase();
  totalQuestions++;

  if(age === 'yes'){
    alert('Right answer, ' + userName + '!');
    totalAnswersCorrect++;
  } else {
    alert('Sorry ' + userName + ', Corey is 23 years old.');
  }
}

function question4(){
  var sleep = prompt('Has Corey slept for more than 24 hours before?').toLowerCase();
  totalQuestions++;


  if(sleep === 'yes'){
    alert('Right answer, ' + userName + '! Mono is real!');
    totalAnswersCorrect++;
  } else {
    alert('Coreys had mono before!, try again.');
  }
}

function question5(){
  var nfl = prompt('Has Corey played in the NFL before?').toLowerCase();
  totalQuestions++;

  if(nfl === 'yes'){
    alert('Wrong ' + userName + ', but I am flattered.');

  } else {
    alert('Corret ' + userName + ', if I had i think it would be safe to assume that I would not be here.');
    totalAnswersCorrect++;
  }
}

question1();
question2();
question3();
question4();
question5();


var question6 = prompt('What is Corey\'s favorite number?');
totalQuestions++;
if(question6 === '1'){
  alert('Congrats ' + userName + ', you were correct');
  console.log('while loop');
  totalAnswersCorrect++;
} else if(question6 < '1'){
  alert('Sorry' + userName + ', try again! You were just a little too low');
  prompt('What is Corey\'s favorite number?');
  console.log('while loop wrong asnwer');
  // totalAnswersWrong++;
} else if(question6 > '1'){
  alert('Sorry ' + userName + ', that answer was too high');
  prompt('What is Corey\'s favorite number?');
}

var statesLivedArray = ['missouri', 'south carolina', 'virginia', 'alabama'];
var attempts = 0;

var indicator = false ;

while(attempts <= 7){
  totalQuestions++;
  var question7 = prompt('What states has Corey lived in besides Washington?').toLowerCase();
  for(var i = 0; i < statesLivedArray.length; i++){
    if(question7 === statesLivedArray[i]){
      indicator = true;
    }
  }
  if(!indicator){
    alert('try again!');
    attempts++;
  } else {
    alert('correct');
    totalAnswersCorrect++;
    break;
  }
}

alert('Congrats, you recieved a score of ' + totalAnswersCorrect + ' / ' + totalQuestions + ' On my about me quiz!');


















