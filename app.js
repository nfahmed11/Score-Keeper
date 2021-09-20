const teamNames = document.querySelector("#teamnames");
const button = document.querySelector("button");
const numberofteams = document.querySelector("#Numofteams");
const h2teamname = document.querySelector("#teamname");
const teamnames = document.querySelector("#teamnames");

//listen for user input for number of teams and use input to create team name input
numberofteams.addEventListener("input", function () {
  const userinputofnumofteam = numberofteams.value;
  console.log(userinputofnumofteam);

  h2teamname.innerHTML = "Team Names ";
  h2teamname.classList.add(<i class="fas fa-list-ol"></i>);

  //create team name input
  for (let i = 0; i < userinputofnumofteam; i++) {}
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("button clicked");
});
