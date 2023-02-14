


const hoursClick = document.getElementById('hoursClick');
  const hourForm = document.getElementById('hourForm');

  hourForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const open = hourForm.elements.open.value;
    const close = hourForm.elements.close.value;
    const hours = `${open}-${close}`;

    // Store the opening hours value in localStorage
    localStorage.setItem('openingHours', hours);

    // Update the display of the opening hours in the current page
    hoursClick.textContent = hours;
  });
