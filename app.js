//first page
const submit = document.querySelector("#submit");
const listtitle = document.querySelector("#listtitle");
const list = document.querySelector("#list");
const info = document.querySelector("#info");
const teams = document.querySelector("#teams");
const scoretowin = document.querySelector("#WinningScore");
let scoreToWinValue;
const numberofteams = document.querySelector("#Numofteams");
let values = [];

// second page
const pointspage = document.querySelector("#pointspage");
const teambox = document.querySelector("#teambox");
const newgame = document.querySelector("#newgame");
const createNewTeams = document.querySelector("#startover");
let winner = document.querySelector("#winner");
let container = [];
let playersScore = [];

// hide everything below first input
scoretowin.addEventListener("input", function () {
  scoreToWinValue = scoretowin.value;
  console.log(`Winning score is set to ${scoreToWinValue}`);
  teams.style.display = "block";
});

//listen for how many teams are need ed
numberofteams.addEventListener("input", function () {
  list.innerHTML = "";
  const numofteams = numberofteams.value;
  console.log(`Number of teams: ${numofteams}`);
  listtitle.style.display = "flex";
  submit.style.display = "flex";

  for (let i = 0; i < numofteams; i++) {
    // create new form
    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "form" + i);
    newInput.setAttribute("class", "names");
    newInput.setAttribute("placeholder", `Team ${i + 1}`);

    //push form to html
    list.appendChild(newInput);
    list.appendChild(document.createElement("br"));
  }
});

// listen for all form inputs being filled out
document.addEventListener("input", function (e) {
  if (e.target.className === "names") {
    let allAreFilled = false;
    let namesArray = document.querySelectorAll(".names");

    namesArray.forEach((item) => {
      if (item.value != "") {
        allAreFilled = true;
      } else {
        allAreFilled = false;
      }
    });

    if (allAreFilled === true) {
      submit.removeAttribute("disabled");
      submit.style.cursor = "pointer";
    }
  }
});

//listen for submit button being clicked to create next page
submit.addEventListener("click", () => {
  //make an empty array
  let namesArray = document.querySelectorAll(".names");

  //use user input for team names and send each input into the empty array
  namesArray.forEach((item) => {
    const nameVal = item.value.toUpperCase();
    values.push(nameVal);
  });

  let removeDuplicates = [...new Set(values)];
  values = removeDuplicates;
  console.log(`Team names are ${values}`);

  container = [];

  values.forEach((value) => {
    const containerItems = `
    <div class="container">
    <button class="increase" onclick="handleClick(event)" id="${
      value + "Increase"
    }"> + 1 </button>
    <h3 class="theteamname" id="${value}">${value}</h3>
    <h3 class="score" id=${value + "Score"} > 0 </h3>
    <button class="decrease" id="${
      value + "Decrease"
    }" onclick="handleClick(event)"> - 1 </button>
    </div>`;

    container.push(containerItems);
    teambox.innerHTML = container.join(" ");
    const data = { name: value, score: 0 };
    playersScore.push(data);
  });

  //hide previous page and show next page and buttons
  info.style.display = "none";
  pointspage.style.display = "flex";
  newgame.style.display = "flex";
  createNewTeams.style.display = "flex";
});

//grab the id of button clicked and change idScore
function handleClick(event) {
  //grab the id of thing clicked
  let pathID = event.target.id;
  let changeScore;

  // if id has increase change to score, if id has decrease in it, change to score.
  if (pathID.includes("Increase")) {
    console.log("has increase");
    let changeScore = pathID.replace("Increase", "Score");
  }

  if (pathID.includes("Decrease")) {
    console.log("has decrease");
    let changeScore = pathID.replace("Decrease", "Score");
    console.log(changeScore);
  }

  //loop through playerscore object arrray, and for each one find the name value and see if it matches the variable for button click
  playersScore.forEach((item) => {
    if (item.name + "Increase" === pathID) {
      item.score += 1;
      console.log(`${item.name} score is ${item.score}`);

      let selectH2 = document.querySelector(`#${item.name}Score`);
      selectH2.innerHTML = item.score;

      // if current score === winningscore - write who wins
      if (item.score == scoreToWinValue) {
        console.log(`${item.name} wins`);
        teambox.style.display = "none";
        winner.style.display = "flex";
        winner.innerHTML = `<h2 class="animate__animated animate__heartBeat";>GAME OVER </h2></br> <h2 class="animate__animated animate__heartBeat";>${item.name} WINS!!!!!</h2>`;

        newgame.addEventListener("click", function () {
          teambox.style.display = "flex";
          winner.style.display = "none";
        });
      }
    }

    if (item.name + "Decrease" === pathID) {
      console.log("matched");
      item.score -= 1;
      console.log(`${item.name} score is ${item.score}`);

      let selectH2 = document.querySelector(`#${item.name}Score`);
      selectH2.innerHTML = item.score;
    }
  });

  //reset scores button
  newgame.addEventListener("click", function () {
    playersScore.forEach((item) => {
      item.score = 0;
      let selectH2 = document.querySelector(`#${item.name}Score`);
      selectH2.innerHTML = item.score;
    });
  });
}
console.log("bottom");
