const form = document.querySelector('form');
const password = form.elements.UserPassword;
const passwordConfirm = form.elements.pswConfirm;

form.addEventListener('submit', (event) => {
  if (password.value !== passwordConfirm.value) {
    event.preventDefault(); // prevent the form submission
    alert('הסיסמאות לא זהות! אנא הזן שנית את הנתונים');
  }
});