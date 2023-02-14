
  const urlParams = new URLSearchParams(window.location.search);
  const loginFailed = urlParams.get('loginFailed');
  if (loginFailed === 'true') {
    alert('מספר אישי או סיסמא שגויים');
  }

//delete user button
function deleteUser() {
  const userId = document.querySelector('input[name="UserID"]').value;
  if (confirm('אתה בטוח שאתה רוצה למחוק את המשתמש שלך?')) {
    fetch(`/deleteUser/${userId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        window.location.href = '/Login.html';
      })
      .catch(error => console.error(error));
  }
}