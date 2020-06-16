// Survival

// Realista

// MinecraftAPI.getServerStatus('198.50.130.167', {port: 25587}, function (err, status) {
//     if (err) {
//       return document.querySelector('.survival-on').innerHTML = '0'; 
//     }
//     document.querySelector('.survival-on').innerHTML = status;
//     console.log(status)
//   });

// KitPvP 
 
// Show how many players are connected in general

  fetch("https://api.mcsrvstat.us/2/askgaming.org")
  .then(res => { 
    return res.json()
  })
  .then(data =>{
    document.querySelector('.general-on').innerHTML = data.players.online;
  }) 

  // Copy button
  var copyBtn = document.querySelector(".copy-btn");
  copyBtn.addEventListener("click", ()=>{
    var text = "askgaming.org";
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err); 
    });
    
  })

  // Show more or less staff members

var moreStaffBtn = document.querySelector(".see-more-less-staff");
var contentToDisplay = document.querySelector(".staff-more-content");
var isUp = false;
moreStaffBtn.addEventListener("click", ()=>{
  if(!isUp){
    contentToDisplay.className = "staff-more-content show-content" 
    moreStaffBtn.innerHTML = "Ver menos"
  }else{
    contentToDisplay.className = "staff-more-content" 
    moreStaffBtn.innerHTML = "Ver más"
  }
  isUp = !isUp;
})