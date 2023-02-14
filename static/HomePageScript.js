document.addEventListener("DOMContentLoaded", function(event) {
    const displayHours = document.getElementById('displayHours');
    const openingHours = localStorage.getItem('openingHours');

    if (openingHours) {
      displayHours.textContent = openingHours;
    }
  });




  let counter = 0;



function clickButton() {
  if (counter % 2 == 0) {
    document.getElementById("mainButton").src = "../media/button/clickedButton.png";
    document.getElementById("buttonText").innerHTML = `<h1>לחץ לסיום אימון</h1>`;
    
    // Call the sendForm function with the form data
    // sendForm();
  } else {
    document.getElementById("mainButton").src = "../media/button/button.png";
    document.getElementById("buttonText").innerHTML = `<h1>!לחץ כדי להתחיל להתאמן</h1>`;
    alert("האימון נשמר בהצלחה!");
  }

  counter++;
}


function sendForm() {
  // Get user ID, full name, and profile from the session
  const userID = sessionStorage.getItem("userID");
  const fullName = sessionStorage.getItem("fullName");
  const profile = sessionStorage.getItem("profile");

  // Get current date and time
  const now = new Date();
  const dateStamp = now.toLocaleDateString();
  const timeStamp = now.toLocaleTimeString();

  // Create a form with the user's ID, name, profile, date, and time
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "/training";
  form.style.display = "none";

  const userIdInput = document.createElement("input");
  userIdInput.type = "hidden";
  userIdInput.name = "userID";
  userIdInput.value = userID;
  form.appendChild(userIdInput);

  const fullNameInput = document.createElement("input");
  fullNameInput.type = "hidden";
  fullNameInput.name = "fullName";
  fullNameInput.value = fullName;
  form.appendChild(fullNameInput);

  const profileInput = document.createElement("input");
  profileInput.type = "hidden";
  profileInput.name = "profile";
  profileInput.value = profile;
  form.appendChild(profileInput);

  const dateInput = document.createElement("input");
  dateInput.type = "hidden";
  dateInput.name = "dateStamp";
  dateInput.value = dateStamp;
  form.appendChild(dateInput);

  const timeInput = document.createElement("input");
  timeInput.type = "hidden";
  timeInput.name = "timeStamp";
  timeInput.value = timeStamp;
  form.appendChild(timeInput);

  // Add the form to the page and submit it
  document.body.appendChild(form);
  form.submit();
}






 