let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector( "#msg" );
const users = document.querySelector("#users");
const comps = document.querySelector("#comps");

const compchoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

const draw = () => {
    msg.innerText = "game draw";
    msg.style.backgroundColor = "#b5179e";
}

const showwin = (userwin, compchoices, userchoice) => {
    if (userwin === true) {
        userscore++;
        users.innerHTML = userscore;
        msg.innerText =  `You Win!  ${userchoice}   beats ${compchoices}` ;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        comps.innerHTML = compscore;
        msg.innerText = ` OOps ! You Lose... Try again  ${compchoices}   beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log(userchoice);
    const compchoices = compchoice();
    console.log(compchoices);

    if (userchoice === compchoices) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoices === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoices === "scissors" ? false : true;
        } else {
            userwin = compchoices === "rock" ? false : true;
        }
        showwin(userwin, userchoice, compchoices);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
})