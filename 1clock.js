function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var hourss=hours%12;
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.toLocaleDateString('en-US', { weekday: 'long' });
  var date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
 



  if (hourss==0){
    hourss=12;

  }
  var ampm= hours >=12 ? "PM":"AM";
  
  hourss = (hourss < 10) ? "0" + hourss : hourss;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  

  var secondsDots="";
  for(var i=1; i<61; i++)
  {
    var rotation= i*6;
    if (i==seconds)
    {
      secondsDots+='<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
    }
    else
    {
      secondsDots+='<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';

    }
  }

  hours=hourss*5
  var hoursDots="";
  for(var i=1; i<61; i++)
  {
    var rotation= i*6;
    
    if (i==hours)
    {
      hoursDots+='<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
    }
    else
    {
      hoursDots+='<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';

    }
  }

  var minutesDots="";
  for(var i=1; i<61; i++)
  {
    var rotation= i*6;
    if (i==minutes)
    {
      minutesDots+='<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
    }
    else
    {
      minutesDots+='<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
    }
  }

  hrDots.innerHTML=hoursDots+"<b>"+"</b>"+"<h1>"+hourss+"</h1>";
  minDots.innerHTML=minutesDots+"<b>"+day+", "+date+"</b>"+"<h1>"+minutes+"</h1>";
  secDots.innerHTML=secondsDots+"<b>"+ampm+"</b>"+"<h1>"+seconds+"</h1>";
  document.getElementById("clock").innerText = timeString;
  
  day.innerHTML="<h1>"+day+"</h1>";
  date.innerHTML="<h1>"+date+"</h1>";

  var backg="";
if (minutes%2==0){
  // backg="url('aaa.jpg')"
 bg+= '<div class="bg" style=background-image: url("aaa.jpg");></div>'
}
else{
  bg+= '<div class="bg" style=background-image: url("aaa.jpg");></div>'
}


}
setInterval(updateClock, 1000);
updateClock();





document.addEventListener("DOMContentLoaded", function() {
  const backgrounds = [
  
    "url('aaa.jpg')",
    "url('wall f.jpg')"

  ];

  let currentIndex = 0;

  function changeBackground() {
    document.getElementById('background-image').style.backgroundImage = backgrounds[currentIndex];
    currentIndex = (currentIndex + 1) % backgrounds.length;
  }

  changeBackground();

  setInterval(changeBackground, 1099);
});




