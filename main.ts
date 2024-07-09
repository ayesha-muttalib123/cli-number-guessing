#! /usr/bin/env node

import inquirer from "inquirer";
// comp will generate random number 
//user give input for guessing number
//compare user input with computer generated number
const random_number=Math.floor(Math.random()*10+1);

const answers=await inquirer.prompt<{ userGuessNumber: number }>

([
    { message:"Enter your guess number between 1-10",
    name:'userGuessNumber',
    type:'number',
   
}
])
console.log(random_number)
if(answers.userGuessNumber===random_number){
    console.log("You won the game")
}
else{
    console.log("You lost the game")
    }