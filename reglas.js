// Rules selector

survivalRulesBtn = document.getElementsByClassName("survival-rules-btn")[0];
realistaRulesBtn = document.getElementsByClassName("realista-rules-btn")[0];
kitpvpRulesBtn = document.getElementsByClassName("kitpvp-rules-btn")[0];

kitpvpRulesBtn.addEventListener("click", () => {
  var lastSelected = document.getElementsByClassName("rule-selected")[0];
  lastSelected.className = ""; 
  kitpvpRulesBtn.firstElementChild.className = "rule-selected";
  var kitpvpFeatures = document.getElementsByClassName("kitpvp-rules")[0];
  var currentDisplayed = document.getElementsByClassName("rules-on")[0];
  currentDisplayed.className = currentDisplayed.classList[0] + " " + currentDisplayed.classList[1]; 
  kitpvpFeatures.className = "server-rules kitpvp-rules rules-on";
})
 
realistaRulesBtn.addEventListener("click", () => {
  var lastSelected = document.getElementsByClassName("rule-selected")[0];
  lastSelected.className = ""; 
  realistaRulesBtn.firstElementChild.className = "rule-selected";
  var realistaFeatures = document.getElementsByClassName("realista-rules")[0];
  var currentDisplayed = document.getElementsByClassName("rules-on")[0];
  currentDisplayed.className = currentDisplayed.classList[0] + " " + currentDisplayed.classList[1]; 
  realistaFeatures.className = "server-rules realista-rules rules-on";
})

survivalRulesBtn.addEventListener("click", () => {
  var lastSelected = document.getElementsByClassName("rule-selected")[0];
  lastSelected.className = ""; 
  survivalRulesBtn.firstElementChild.className = "rule-selected";
  var survivalFeatures = document.getElementsByClassName("survival-rules")[0];
  var currentDisplayed = document.getElementsByClassName("rules-on")[0];
  currentDisplayed.className = currentDisplayed.classList[0] + " " + currentDisplayed.classList[1]; 
  survivalFeatures.className = "server-rules survival-rules rules-on";
})

