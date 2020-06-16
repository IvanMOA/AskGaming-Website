// Server selector

survivalBtn = document.getElementsByClassName("survival-selector")[0];
realistaBtn = document.getElementsByClassName("realista-selector")[0];
kitpvpBtn = document.getElementsByClassName("kitpvp-selector")[0];

kitpvpBtn.addEventListener("click", () => {
  var lastSelected = document.getElementsByClassName("server-selected")[0];
  lastSelected.className = ""; 
  kitpvpBtn.firstElementChild.className = "server-selected";
  var kitpvpFeatures = document.getElementsByClassName("kitpvp-display")[0];
  var currentDisplayed = document.getElementsByClassName("fade-in")[0];
  currentDisplayed.className = currentDisplayed.classList[0] + " " + currentDisplayed.classList[1] + " disappear"; 
  kitpvpFeatures.className = "servers-display kitpvp-display fade-in";
})

survivalBtn.addEventListener("click", () => {
  var lastSelected = document.getElementsByClassName("server-selected")[0];
  lastSelected.className = ""; 
  survivalBtn.firstElementChild.className = "server-selected";
  var survivalFeatures = document.getElementsByClassName("survival-display")[0];
  var currentDisplayed = document.getElementsByClassName("fade-in")[0];
  currentDisplayed.className = currentDisplayed.classList[0] + " " +  currentDisplayed.classList[1] + " disappear"; 
  survivalFeatures.className = "servers-display survival-display fade-in";
})

realistaBtn.addEventListener("click", () => {
  var lastSelected = document.getElementsByClassName("server-selected")[0];
  lastSelected.className = ""; 
  realistaBtn.firstElementChild.className = "server-selected";
  var realistaFeatures = document.getElementsByClassName("realista-display")[0];
  var currentDisplayed = document.getElementsByClassName("fade-in")[0];
  currentDisplayed.className = currentDisplayed.classList[0] + " " + currentDisplayed.classList[1] + " disappear"; 
  realistaFeatures.className = "servers-display realista-display fade-in";
})