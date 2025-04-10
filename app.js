let userScore=0;
let computerScore=0;
const  choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const genComputerChoice=() =>{
    const options=["rock","paper","scissors"];
     const randIdx=Math.floor(Math.random() * 3);
     return options[randIdx];

};
const drawGame =() =>{
    
    msg.innerText="Game was draw. paly again.";
    msg.style.backgroundColor="black";
};
 const showWinner = (userWin, userChoice,computerChoice) =>{
     if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        // msg.innerText='You win! Your ${userChoice} beats ${computerChoice}';
        msg.style.backgroundColor="green";
     }
     else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText="You lose.";
        // msg.innerText='You lost. ${computerChoice} beats your ${userChoice}';
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
     const computerChoice=genComputerChoice();
     console.log("computer choice =",computerChoice);

     if(userChoice===computerChoice){
        //  draw game
        drawGame();
     }
     else{
        let userWin =true;
        if(userChoice==="rock"){
            // scissors,paper
            userWin=computerChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
             userWin=computerChoice==="scissors" ? false:true;
        }
        else{
            //rock,paper
           userWin=computerChoice==="rock" ? false:true;
        }

        showWinner(userWin,userChoice,computerChoice);

    }
};


choices.forEach((choice) =>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       
        playGame(userChoice);

    });
});

