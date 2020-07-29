document.addEventListener("DOMContentLoaded", function(){
  
  // To update jsdeliver cache, please use https://purge.jsdelivr.net/gh/vjsdev/cdn@master/ba2.js
  
  debugger;
  document.getElementById("advertisement").innerHTML = "<a target='_self' href='https://vjsdev.github.io/'><img src='https://vjsdev.github.io/img/ba.jpg' /></a>";
  document.cookie = "temp=" + new Date()+ ";domain=.z19.web.core.windows.net";
  try{
    window.parent.document.cookie = "temp=" + new Date() + ";domain=.z19.web.core.windows.net";
  }
  catch(err){
    console.log("Error while setting up parent window cookie",err);
  }
});

function showWindow()
{
  console.log("Full window object", window);
}
