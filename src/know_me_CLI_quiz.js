var readLineSync = require('readline-sync');
var chalk = require('chalk');

// Questions array consisting of trivia questions and their answers
var questionsArray = [{
    question: "What is my favourite color? \n\na.Light Green \nb.Light Purple \nc.Dark Blue\n",
    answer: "c"
}, {
    question: "What's my favourite food? \n\na.Cheese burst Pizza \nb.Mexican McAloo Tiki Burger \nc.Cheese Dosa\n",
    answer: "a"
}, {
    question: "Which sport do I like the most? \n\na.Cricket \nb.Football \nc.Badminton\n",
    answer: "b"
}, {
    question: "My favourite Football player:- \n\na.CR7 \nb.Lionel Messi \nc.Neymar Jr\n",
    answer: "a"
}, {
    question: "What is my favourite music band? \n\na.The Chainsmokers \nb.Imagine Dragons \nc.Cartoon\n",
    answer: "b"
}, {
    question: "What is my favourite English Song? \n\na.Sun is Shining by Axwell \nb.C U Again by Cartoon \nc.Young by Chainsmokers\n",
    answer: "a"
}, {
    question: "Am I a Marvel fan or DC fan? \n\na.Marvel \nb.DC \nc.None\n",
    answer: "a"
}];

var score;
// Array of high scores of this quiz
var highScore = [{
    name: "Devansu",
    score: 7
},{
    name: "Mohit",
    score: 6
}, {
    name: "Bhavesh",
    score: 6
}];

var userName = readLineSync.question("What's your name? ");
console.log(chalk.yellow("Welcome ") + chalk.blue(userName) + chalk.yellow("\nLet's play") + chalk.red(" HOW MUCH DO YOU KNOW ME?") + 
            chalk.yellow("\nFor each correct answer you will get") + chalk.red(" 1 pt"));

// Function to check whether answer provided by user is correct or not.
function play_quiz(question, correctAnswer) {
    var userAnswer = readLineSync.question(question);
    if(userAnswer === correctAnswer) {
        score += 1;
        console.log(chalk.green("Correct Answer!!"));
    }
    else {
        console.log(chalk.red("Incorrect:("));
        console.log(chalk.green("Correct answer is: ") + chalk.green(correctAnswer));
    }

    console.log("current Score: " + chalk.yellow(score));
    console.log(chalk.red("--------------------------------"));
}

// Function to play the quiz
function playGame() {
    score = 0;
    for(var i = 0; i<questionsArray.length; i++) {
        var currentQuestion = questionsArray[i];
        play_quiz(currentQuestion.question, currentQuestion.answer);
    }
    console.log(chalk.yellow("Yay!! You SCORED: ") + chalk.blue(score));

    //Display High scores so far
    console.log("Check out the high scores:- ");
    for(var j = 0; j<highScore.length; j++) {
        console.log(chalk.yellow(highScore[j].name) + "  " + ":" + "  " + chalk.red(highScore[j].score));
    }
    //check whether user has registered a high score or not
    check_highScore();
}

//Function to check high score
function check_highScore() {
    for(var i = 0; i<highScore.length; i++) {
        if(score >= highScore[i].score) {
            console.log(chalk.green("Congratulations!! You have registered a high score! Pls send a screenshot to me and I'll update the highscores:)"));
            break;
        }
    }
}

playGame();

if(readLineSync.keyInYN("Do you want to play this quiz again? ")) {
    playGame();
}
else {
    console.log(chalk.blue("Thank you for playing this quiz!!"));
}