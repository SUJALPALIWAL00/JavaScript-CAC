let computerGuess
let userguess 
let displayBtn = document.getElementById("displayBtn")
let resetBtn = document.getElementById("resetBtn")
let youWinpara = document.getElementById("you")
let computerWinpara = document.getElementById("computer")

let yourWinCount = 0
let computerWinCount = 0 

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")


img1.addEventListener("click",()=>{
    computerGuess = Math.floor((Math.random() * 3)+1);
    userguess = 1
    result()
      
          
})
img2.addEventListener("click",()=>{
    computerGuess = Math.floor((Math.random() * 3)+1);
    userguess = 2
    result()
    
})
img3.addEventListener("click",()=>{
    computerGuess = Math.floor((Math.random() * 3)+1);
    userguess = 3
    result()
    
})

resetBtn.addEventListener("click",()=>{
    location.reload()
})


function result(){
    
    if(computerGuess == 1 && userguess == 2){
        displayBtn.innerText = "You Win | Computer Guess: Rock | Your Guess: Paper"
        yourWinCount++
        youWinpara.innerText = `Your Win Count: ${yourWinCount}`
        gameOver()
    }else if(computerGuess == 1 && userguess == 3){
        displayBtn.innerText = "You Loss | Computer Guess: Rock | Your Guess: Scissor"
        computerWinCount++
        computerWinpara.innerText = `Computer Win Count: ${computerWinCount}`
        gameOver()
    }else if(computerGuess == 2 && userguess == 1){
        displayBtn.innerText = "You Loss | Computer Guess: Paper | Your Guess: Rock"
        computerWinCount++
        computerWinpara.innerText = `Computer Win Count: ${computerWinCount}`
        gameOver()
    }else if(computerGuess == 2 && userguess == 3){
        displayBtn.innerText = "You Win | Computer Guess: Paper | Your Guess: Scissor"
        yourWinCount++
        youWinpara.innerText = `Your Win Count: ${yourWinCount}`
        gameOver()
    }else if(computerGuess == 3 && userguess == 1){
        displayBtn.innerText = "You Win | Computer Guess: Scissor | Your Guess: Rock"
        yourWinCount++
        youWinpara.innerText = `Your Win Count: ${yourWinCount}`
        gameOver()
    }else if(computerGuess == 3 && userguess == 2){
        displayBtn.innerText = "You Loss | Computer Guess: Scissor | Your Guess: Paper"
        computerWinCount++
        computerWinpara.innerText = `Computer Win Count: ${computerWinCount}`
        gameOver()
    }else if(computerGuess === userguess){
        displayBtn.innerText = "Draw"
    }else{
        displayBtn.innerText = "Something wents wrong"
    }
}

function gameOver(){
    if (yourWinCount == 10 || computerWinCount == 10){
       setTimeout(()=>{
        if (yourWinCount == 10){
            alert("You Win the Game 🎉🎉🎉")
            location.reload()
        }
        else{
            alert("You Loss the Game")
            location.reload()
        }
       },1)
    }
}

// light Theme
let icon = document.getElementById("iconId")
icon.onclick = ()=>{
    document.body.classList.toggle("lightTheme")
    if(document.body.classList.contains("lightTheme")){
        icon.src = "../Assets/moon.png"
    }else{
        icon.src = "../Assets/sun.png"
    }
}
