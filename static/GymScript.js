let counter=0;

function resetCounter() {
    counter=0;
}

function clickButton() {
      if (counter%2==0) {
        document.getElementById("mainButton").src = "../media/button/clickedButton.png";
        document.getElementById("buttonText").innerHTML=`<h1>לחץ לסיום אימון</h1>`;
      }
      else {
        document.getElementById("mainButton").src = "../media/button/button.png";
        document.getElementById("buttonText").innerHTML=`<h1>!לחץ כדי להתחיל להתאמן</h1>`;
        alert("האימון נשמר בהצלחה!");
      }
        
    counter++
}

function delay(time) {
    var d1 = new Date();
    var d2 = new Date();
    while (d2.valueOf() < d1.valueOf() + time) {
      d2 = new Date();
    }
  }



  function cl_Div() {
    location.href('./LoadMeter.html');
  }

