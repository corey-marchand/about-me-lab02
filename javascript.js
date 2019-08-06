'use strict';

var userName = prompt("What's your name?");
  alert('Hi ' + userName + ', it is a pleasure to meet you.');
  console.log("Prompt asking user what their name is");

var userColor = prompt( userName + ', What is your favorite color? ');
  alert('Very cool ' + userName + ', my favorite color is also ' + userColor + '!');
  console.log("Prompt asking the user their favorite color");

var userHobby = prompt(userName + ', do you have any hobbies? If so, what is your favorite?');
  alert(userName + " are you serious? My favorite hobby is also " + userHobby + ", this is starting to be weird.");
  console.log("prompt asking the user their favorite hobby"); 

var userFavoriteSport = prompt(userName + ', What is your favorite sport?');
  alert("Okay " + userName + ", we both like the color " + userColor + ", we both love " + userHobby + " and our favorite sport is " + userFavoriteSport + ".  With this being said, I'm pretty sure we're either best friends or soulmates.");
  console.log("prompt asking the user their favorite sport");

  //testing