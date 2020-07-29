document.addEventListener("DOMContentLoaded", function(){
  
  // To update jsdeliver cache, please use https://purge.jsdelivr.net/gh/vjsdev/cdn@master/ad.js
  
  debugger;
  document.getElementById("advertisement").innerHTML = "<a href='https://vjsdev.github.io/'><img src='https://vjsdev.github.io/img/ba.jpg' /></a>";
  document.cookie = "temp=" + new Date();
  try{
    window.parent.document.cookie = "temp=" + new Date();
  }
  catch{
  }
});

function showWindow()
{
  console.log("Full window object", window);
}
