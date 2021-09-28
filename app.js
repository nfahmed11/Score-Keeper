const submit = document.querySelector("#submit");
const listtitle = document.querySelector("#listtitle");
const list = document.querySelector("#list");
const info = document.querySelector("#info");
const score = document.querySelector("#score");
const teams = document.querySelector("#teams");
const winningscore = document.querySelector("#WinningScore");
const numberofteams = document.querySelector("#Numofteams");
let values = [];

// second page
const pointspage = document.querySelector("#pointspage");
const teambox = document.querySelector("#teambox");
const newgame = document.querySelector("#newgame");
const createNewTeams = document.querySelector("#startover");

// hide everything below first input
score.addEventListener("input", function () {
  teams.style.display = "block";
});

numberofteams.addEventListener("input", function () {
  list.innerHTML = "";
  const numofteams = numberofteams.value;
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

//listen for submit button being clicked
submit.addEventListener("click", () => {
  //team names in an array:
  values = [];
  let namesArray = document.querySelectorAll(".names");

  namesArray.forEach((item) => {
    const nameVal = item.value;
    values.push(nameVal);
    item.value = "";

    // create div box with names
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const container2 = document.createElement("div");
    container2.setAttribute("class", "container2");

    const newDiv = document.createElement("div");
    const teamsscore = document.createElement("div");
    const increase = document.createElement("button");
    const decrease = document.createElement("button");

    newDiv.setAttribute("class", "teamDiv");
    newDiv.setAttribute("id", `${nameVal}`);
    newDiv.innerHTML = nameVal;

    teamsscore.innerHTML = "0";
    teamsscore.setAttribute("id", `${nameVal} score`);
    teamsscore.style.display = "flex";

    increase.innerHTML = " + 1 ";
    increase.setAttribute("class", "increase");
    increase.style.display = "flex";

    decrease.innerHTML = " - 1 ";
    decrease.setAttribute("class", "decrease");
    decrease.style.display = "flex";

    teambox.appendChild(container);

    container.appendChild(increase);
    container.appendChild(container2);
    container2.appendChild(newDiv);
    container2.appendChild(teamsscore);
    container.appendChild(decrease);

    // show next page and hide previos page
    info.style.display = "none";
    pointspage.style.display = "flex";
    newgame.style.display = "flex";
    createNewTeams.style.display = "flex";
  });

  console.log(values);
});
