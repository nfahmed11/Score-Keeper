const teamNames = document.querySelector("#teamnames");
const button = document.querySelector("button");
const numberofteams = document.querySelector("#Numofteams");
const listtitle = document.querySelector("#listtitle");
const list = document.querySelector("#list");

//listen for user input for number of teams and use input to show team name and submit button
numberofteams.addEventListener("input", function () {
  //remove everything prevoiusly loaded first
  list.innerHTML = "";

  //get user input value
  const userinputofnumofteam = numberofteams.value;
  console.log(userinputofnumofteam);
  listtitle.style.display = "flex";
  button.style.display = "flex";

  //create team name input form
  for (let i = 0; i < userinputofnumofteam; i++) {
    // create new form according to user input
    const newForm = document.createElement("input");
    newForm.setAttribute("type", "text");
    newForm.setAttribute("id", "form" + i);
    newForm.setAttribute("placeholder", `Team ${i + 1}`);

    //push/append input form to html
    list.appendChild(newForm);
    list.appendChild(document.createElement("br"));
  }
});

// submit button - collect user input on team names
//make a button for each team that increases/decreases points
button.addEventListener("click", function (e) {
  e.preventDefault();
});

// track points to see who wins (if else statement boolean?)
