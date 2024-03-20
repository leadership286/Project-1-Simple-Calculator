import inquirer from "inquirer";
//Asking Question from User through inquirer

let answer = await inquirer.prompt([
    {message:"Enter First Number", type:"number", name:"firstNumber"},
    {message:"Enter Second Number",type:"number", name:"secondNumber"},
    {message:"Select one Operator to perform Operations",
    type:"list",
    name:"operator",
    choices:['Addition','Subtraction','Multiplication','Division'],
    }
]);
//Conditional Statement
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)}
else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber)
}
else{
    console.log("Invalid Input")
}

console.log(answer);