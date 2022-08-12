/**
 * !first import all html elements in js file because you directly accept the html code in js file
 * *then choosing value in randomly in computer using method in MATH RANDOM AND MATH FLOOR because easily get random number in computer
 * !then assign the variable in user is how many times trying number getting value
 * !then assign the array for getting your guessing number using the method for push inside of the start function
 * *and then your button directly access the start function using method in html onclick method directly access the you start function
 * ?and then if you entered above 100 value in input box show the alert function because some body entered the too much value so we restrict the condition
 * ! and the push the user value in array of the box
 * ?and main function of the content is comparing whatever compare to the user input and computer random function 3 condition wrote the below the start function
 */

const storeOne = document.querySelector("#storeOne");
const storeTwo = document.querySelector("#storeTwo");
const storeThree = document.querySelector("#storeThree");

// Random number Choosing then choosing value in randomly in computer using method in MATH RANDOM AND MATH FLOOR because easily get random number in computer
let computerRandom = Math.floor(Math.random() * 99) + 1;

// console.log(computerRandom);

// then assign the variable in user is how many times trying number getting value
var howManyGuessing = 0;

// then assign the array for getting your guessing number using the method for push inside of the start function
var yourGuessingNumber = [];

function start() {
  // access the input html in js file using query selector method easily get the input
  var userChoice = document.querySelector("#challenge").value;
  console.log(userChoice);

  // and then if you entered above 100 value in input box show the alert function because some body entered the too much value so we restrict the condition
  if (userChoice < 1 || userChoice > 100) {
    alert("Hi Sir Please Be Put The Below The 100 Thank You");
  } else {
    // and the push the user value in array of the box
    yourGuessingNumber.push(userChoice);
    howManyGuessing = howManyGuessing + 1;

    // and main function of the content is comparing whatever compare to the user input and computer random function 3 condition wrote the below the start function
    if (userChoice < computerRandom) {
      storeOne.textContent = `How Many Times Trying : ${howManyGuessing}`;
      storeTwo.textContent = `Your Previous Entered Numbers : ${yourGuessingNumber}`;
      storeThree.textContent = "Your Guessing Is Too Low Value!😔";
    } else if (userChoice > computerRandom) {
      storeThree.textContent = "Your Guessing Is Too High Value!⚡";
      storeOne.textContent = `How Many Times Trying : ${howManyGuessing}`;
      storeTwo.textContent = `Your Previous Entered Numbers : ${yourGuessingNumber}`;
    } else if (userChoice == computerRandom) {
      storeThree.textContent = "You Catched Computer!!! 🏆";
      storeTwo.textContent = `Your Previous Entered Numbers : ${computerRandom}`;
      storeOne.textContent = `How Many Times Trying : ${howManyGuessing}`;
    }
  }
}
