'use strict';

var userName = prompt('What\'s your name?');
alert('Hi ' + userName + ', it is a pleasure to meet you.');
console.log('Prompt asking user what their name is');

// var userColor = prompt( userName + ', What is your favorite color? ');
// alert('Very cool ' + userName + ', my favorite color is also ' + userColor + '!');
// console.log('Prompt asking the user their favorite color');

// var userHobby = prompt(userName + ', do you have any hobbies? If so, what is your favorite?');
// alert(userName + ' are you serious? My favorite hobby is also ' + userHobby + ', this is starting to be weird.');
// console.log('prompt asking the user their favorite hobby');

// var userFavoriteSport = prompt(userName + ', What is your favorite sport?');
// alert('Okay ' + userName + ', we both like the color ' + userColor + ', we both love ' + userHobby + ' and our favorite sport is ' + userFavoriteSport + '.  With this being said, I\'m pretty sure we\'re either best friends or soulmates.');
// console.log('prompt asking the user their favorite sport');

var question1 = prompt('Has Corey ever gone to France?').toLowerCase();
if(question1 === 'yes') {
  alert('Sorry ' + userName + ' I have never been to France, but one day, right?');
  console.log('Did not answer question correctly for question 1');
} else if(question1 === 'no'){
  question1 = question1.toLowerCase();
  alert('Right answer ' + userName + '! I have never gone to france, but I hope to go someday!');
  console.log('answered question correctly for question 1');
}

var question2 = prompt('Is corey 23 years old?').toLowerCase();
if(question2 === 'yes') {
  alert('You are correct, ' + userName );
  console.log('answered question correctly for question 2');
} else if(question2 === 'no'){
  alert('Incorrect ' + userName + ', maybe next time, eh?');
  console.log('Did not answer question correctly for question 2');
}

var question3 = prompt('Has Corey attended 3 different colleges?').toLowerCase();
if(question3 === 'yes') {
  alert('You are correct,' + userName + '. I have attended WSU, U of A, and Olympic Community College');
  console.log('answered question correctly for question 2');
} else if(question3 === 'no'){
  alert('Incorrect, ' + userName + '. I have attended WSU, U of A, and Olympic Community College');
  console.log('Did not answer question correctly for question 3');
}

var question4 = prompt('Has Corey slept more than 24 hours at once before?').toLowerCase();
if(question4 === 'yes'){
  alert('Correct, ' + userName + '. Mono comes straight from Satan');
  console.log('answered question correctly for question 4');
} else if(question4 === 'no'){
  alert('Incorrect, ' + userName + '. Once upon a time, I came up with mono');
  console.log('Did not answer question correctly for question 4');
}

var question5 = prompt('Has Corey ever played in the nfl?').toLowerCase();
if(question5 === 'yes'){
  alert('Flattered,' + userName + ', but definately not.');
} else if(question5 === 'no'){
  alert('Correct, ' + userName + '. I definately have not but everyonce in a while I play madden, which is practically the same thing.');
}
